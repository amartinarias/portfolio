// src/components/three/DynamicOceanBackground.vue
<template>
  <div ref="threeContainer" class="three-container"></div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import * as THREE from "three";
import { useMousePosition } from "@/composables/useMousePosition";

const threeContainer = ref(null);
let camera, scene, renderer;
let mesh, geometry, material;
let animationFrameId = null;
let startTime = Date.now();

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
  if (geometry) geometry.dispose();
  if (material) material.dispose();
  if (renderer) renderer.dispose();
});

function initThree() {
  // Constants for the ocean plane
  const worldWidth = 128;
  const worldDepth = 128;

  // Scene setup
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x87ceeb); // Sky blue background
  scene.fog = new THREE.FogExp2(0x87ceeb, 0.0007);

  // Camera setup
  camera = new THREE.PerspectiveCamera(
    60,
    window.innerWidth / window.innerHeight,
    1,
    20000
  );
  camera.position.y = 200;
  camera.position.z = 500;

  // Create ocean plane geometry
  geometry = new THREE.PlaneGeometry(
    20000,
    20000,
    worldWidth - 1,
    worldDepth - 1
  );
  geometry.rotateX(-Math.PI / 2);

  // Make geometry vertices dynamic
  const position = geometry.attributes.position;
  position.usage = THREE.DynamicDrawUsage;

  // Set initial wave pattern
  for (let i = 0; i < position.count; i++) {
    const y = 35 * Math.sin(i / 2);
    position.setY(i, y);
  }

  // Load water texture
  const textureLoader = new THREE.TextureLoader();
  const texture = textureLoader.load("/images/water-pool.jpg", () => {
    // Fallback to a color if texture loading fails
    material.color.set(0x0066cc);
  });

  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(5, 5);
  texture.colorSpace = THREE.SRGBColorSpace;

  // Create material with blue color
  material = new THREE.MeshBasicMaterial({
    color: 0x0044ff,
    map: texture,
    transparent: true,
    opacity: 0.8,
  });

  // Create mesh and add to scene
  mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  // Add some light
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
  scene.add(ambientLight);

  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
  directionalLight.position.set(0, 1, 0.5);
  scene.add(directionalLight);

  // Renderer setup
  renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
  });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);

  // Append to container
  threeContainer.value.appendChild(renderer.domElement);
}

function animate() {
  animationFrameId = requestAnimationFrame(animate);
  render();
}

function render() {
  // Calculate elapsed time
  const elapsedTime = (Date.now() - startTime) / 1000;

  // Update wave geometry based on time and mouse position
  const position = geometry.attributes.position;
  for (let i = 0; i < position.count; i++) {
    // Create dynamic wave pattern
    const y = 35 * Math.sin(i / 5 + (elapsedTime * 10 + i) / 7);

    // Add mouse influence to make waves react to mouse
    const mouseInfluence =
      Math.sin(i / 20 + mouseX.value * 3) *
      Math.cos(i / 15 + mouseY.value * 2) *
      10;

    position.setY(i, y + mouseInfluence);
  }
  position.needsUpdate = true;

  // Rotate camera slightly based on mouse position for a parallax effect
  camera.position.x = mouseX.value * 100;
  camera.lookAt(scene.position);

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

  // Move the camera slightly up based on scroll
  if (camera) {
    camera.position.y = 200 + scrollProgress * 200;
    camera.lookAt(scene.position);
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