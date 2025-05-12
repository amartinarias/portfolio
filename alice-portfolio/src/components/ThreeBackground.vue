// ThreeBackground.vue
<template>
  <div ref="threeContainer" class="three-container"></div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import * as THREE from "three";
import { useMousePosition } from "@/composables/useMousePosition";

const threeContainer = ref(null);
let renderer, scene, camera;
let sky, ocean, sun, horizon;
let animationFrameId = null;
const clock = new THREE.Clock();

// Get mouse position using composable
const { x: mouseX, y: mouseY } = useMousePosition();

onMounted(() => {
  initThree();
  animate();

  window.addEventListener("resize", handleResize);
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
  }

  window.removeEventListener("resize", handleResize);
  window.removeEventListener("scroll", handleScroll);

  // Clean up Three.js resources
  if (renderer) {
    renderer.dispose();
  }
});

function initThree() {
  // Scene setup
  scene = new THREE.Scene();

  // Camera setup
  camera = new THREE.PerspectiveCamera(
    70, // Field of view
    window.innerWidth / window.innerHeight, // Aspect ratio
    0.1, // Near clipping plane
    1000 // Far clipping plane
  );
  camera.position.set(0, 0, 3);
  camera.lookAt(0, 0, 0);

  // Renderer setup
  renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setClearColor(0x000000, 0); // Transparent background
  threeContainer.value.appendChild(renderer.domElement);

  // Create sky with gradient
  createSky();

  // Create ocean with waves
  createOcean();

  // Create horizon line
  createHorizon();

  // Create sun
  createSun();

  // Add lighting
  addLighting();
}

function createSky() {
  const skyGeometry = new THREE.PlaneGeometry(5, 2.5, 1, 1);
  const skyMaterial = new THREE.ShaderMaterial({
    uniforms: {
      time: { value: 0 },
      skyColor1: { value: new THREE.Color("#87CEEB") }, // Sky blue
      skyColor2: { value: new THREE.Color("#C9E9F6") }, // Light sky blue
      mousePos: { value: new THREE.Vector2(0, 0) },
    },
    vertexShader: `
      varying vec2 vUv;
      
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform vec3 skyColor1;
      uniform vec3 skyColor2;
      uniform vec2 mousePos;
      uniform float time;
      varying vec2 vUv;
      
      void main() {
        // Calculate distance from mouse for subtle light effect
        float distFromMouse = length(vec2(vUv.x - 0.5 - mousePos.x * 0.1, vUv.y - 0.5 - mousePos.y * 0.1));
        float brightness = 1.0 - distFromMouse * 0.5;
        
        // Add some subtle movement to clouds
        float cloudMovement = sin(vUv.x * 10.0 + time * 0.2) * 0.05;
        
        // Create vertical gradient between sky colors
        float gradient = vUv.y + cloudMovement;
        vec3 skyColor = mix(skyColor1, skyColor2, gradient);
        
        // Apply brightness variance based on mouse position
        skyColor = mix(skyColor, skyColor * 1.2, brightness);
        
        gl_FragColor = vec4(skyColor, 1.0);
      }
    `,
    transparent: true,
    side: THREE.DoubleSide,
  });

  sky = new THREE.Mesh(skyGeometry, skyMaterial);
  sky.position.y = 0.75;
  scene.add(sky);
}

function createOcean() {
  const oceanGeometry = new THREE.PlaneGeometry(5, 2.5, 150, 150);
  const oceanMaterial = new THREE.ShaderMaterial({
    uniforms: {
      time: { value: 0 },
      oceanColor1: { value: new THREE.Color("#0066cc") }, // Deep blue
      oceanColor2: { value: new THREE.Color("#5ab9ea") }, // Light blue
      mousePos: { value: new THREE.Vector2(0, 0) },
    },
    vertexShader: `
      uniform float time;
      uniform vec2 mousePos;
      varying vec2 vUv;
      varying float vElevation;
      
      // Simplex noise function
      vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }
      
      float snoise(vec2 v) {
        const vec4 C = vec4(0.211324865405187, 0.366025403784439,
           -0.577350269189626, 0.024390243902439);
        vec2 i  = floor(v + dot(v, C.yy));
        vec2 x0 = v -   i + dot(i, C.xx);
        vec2 i1;
        i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
        vec4 x12 = x0.xyxy + C.xxzz;
        x12.xy -= i1;
        i = mod(i, 289.0);
        vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
          + i.x + vec3(0.0, i1.x, 1.0 ));
        vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy),
          dot(x12.zw,x12.zw)), 0.0);
        m = m*m;
        m = m*m;
        vec3 x = 2.0 * fract(p * C.www) - 1.0;
        vec3 h = abs(x) - 0.5;
        vec3 ox = floor(x + 0.5);
        vec3 a0 = x - ox;
        m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
        vec3 g;
        g.x  = a0.x  * x0.x  + h.x  * x0.y;
        g.yz = a0.yz * x12.xz + h.yz * x12.yw;
        return 130.0 * dot(m, g);
      }
      
      void main() {
        vUv = uv;
        
        // Calculate distance from mouse for interactive waves
        float distX = position.x - mousePos.x * 5.0;
        float distY = position.y - mousePos.y * 5.0;
        float dist = sqrt(distX * distX + distY * distY);
        float mouseFactor = smoothstep(1.0, 3.0, dist);
        
        // Create multiple waves with different frequencies and amplitudes
        float elevation = 0.0;
        
        // Base waves
        elevation += 0.04 * sin(position.x * 1.0 + time * 0.8);
        elevation += 0.02 * sin(position.y * 2.0 + time * 0.6);
        
        // Mouse interactive waves - creates ripples around mouse position
        elevation += 0.06 * (1.0 - mouseFactor) * sin(dist * 3.0 - time * 3.0);
        
        // Small choppy waves using noise
        float noiseFreq = 3.0;
        float noiseAmp = 0.08;
        elevation += noiseAmp * snoise(vec2(position.x * noiseFreq + time * 0.3, position.y * noiseFreq + time * 0.4));
        
        vElevation = elevation;
        
        // Apply elevation to the vertex
        vec3 newPosition = position;
        newPosition.z += elevation;
        
        gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
      }
    `,
    fragmentShader: `
      uniform vec3 oceanColor1;
      uniform vec3 oceanColor2;
      uniform vec2 mousePos;
      varying vec2 vUv;
      varying float vElevation;
      
      void main() {
        // Mix between two ocean colors based on elevation
        float mixStrength = (vElevation + 0.1) * 5.0;
        
        // Add some horizontal gradient based on UV coordinates
        mixStrength += vUv.y * 0.4;
        
        // Add highlight near mouse position
        float distX = vUv.x - (mousePos.x * 0.1 + 0.5);
        float distY = vUv.y - (mousePos.y * 0.1 + 0.5);
        float mouseDist = sqrt(distX * distX + distY * distY);
        float highlight = smoothstep(0.3, 0.0, mouseDist) * 0.2;
        
        // Clamp mix strength
        mixStrength = clamp(mixStrength, 0.0, 1.0);
        
        // Create final color
        vec3 oceanColor = mix(oceanColor1, oceanColor2, mixStrength);
        oceanColor = mix(oceanColor, vec3(1.0), highlight); // Add highlight
        
        // Add shore foam at the top
        float foam = smoothstep(0.4, 0.55, vUv.y);
        oceanColor = mix(oceanColor, vec3(1.0), foam * 0.15);
        
        gl_FragColor = vec4(oceanColor, 0.9); // Slightly transparent
      }
    `,
    transparent: true,
    side: THREE.DoubleSide,
  });

  ocean = new THREE.Mesh(oceanGeometry, oceanMaterial);
  ocean.position.y = -0.75;
  scene.add(ocean);
}

function createHorizon() {
  const horizonGeometry = new THREE.PlaneGeometry(5, 0.05, 1, 1);
  const horizonMaterial = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    transparent: true,
    opacity: 0.5,
  });

  horizon = new THREE.Mesh(horizonGeometry, horizonMaterial);
  horizon.position.y = 0;
  scene.add(horizon);
}

function createSun() {
  const sunGeometry = new THREE.CircleGeometry(0.15, 32);
  const sunMaterial = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    transparent: true,
    opacity: 0.8,
  });

  sun = new THREE.Mesh(sunGeometry, sunMaterial);
  sun.position.set(0.5, 0.5, -0.1);
  scene.add(sun);
}

function addLighting() {
  // Ambient light
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
  scene.add(ambientLight);

  // Directional light to simulate sun
  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
  directionalLight.position.set(1, 2, 1);
  scene.add(directionalLight);
}

function animate() {
  animationFrameId = requestAnimationFrame(animate);

  // Update time uniform for the shaders
  const elapsedTime = clock.getElapsedTime();

  if (sky.material.uniforms) {
    sky.material.uniforms.time.value = elapsedTime;
    sky.material.uniforms.mousePos.value.set(mouseX.value, mouseY.value);
  }

  if (ocean.material.uniforms) {
    ocean.material.uniforms.time.value = elapsedTime;
    ocean.material.uniforms.mousePos.value.set(mouseX.value, mouseY.value);
  }

  // Move sun based on mouse position (subtly)
  if (sun) {
    sun.position.x = 0.5 + mouseX.value * 0.3;
    sun.position.y = 0.5 + mouseY.value * 0.2;
  }

  // Also move scene slightly with mouse for parallax effect
  if (scene) {
    scene.rotation.x = mouseY.value * 0.05;
    scene.rotation.y = mouseX.value * 0.05;
  }

  renderer.render(scene, camera);
}

function handleResize() {
  if (camera && renderer) {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }
}

function handleScroll() {
  const scrollY = window.scrollY;
  const maxScroll = document.body.scrollHeight - window.innerHeight;
  const scrollProgress = scrollY / maxScroll || 0;

  // Move the camera slightly based on scroll
  if (camera) {
    camera.position.z = 3 + scrollProgress * 0.5;
  }
}
</script>

<style scoped>
.three-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: -1;
  opacity: 0.8;
}
</style>