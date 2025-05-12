// Sky and Ocean Interactive Animation
// This script creates an interactive background with sky at the top and ocean at the bottom
// that responds to mouse movements

// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    // Get the container element
    const container = document.getElementById('three-container');

    // Scene setup
    const scene = new THREE.Scene();

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
        70, // Field of view
        window.innerWidth / window.innerHeight, // Aspect ratio
        0.1, // Near clipping plane
        1000 // Far clipping plane
    );
    camera.position.set(0, 0, 3);
    camera.lookAt(0, 0, 0);

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x000000, 0); // Transparent background
    container.appendChild(renderer.domElement);

    // Mouse position tracking for interactive effects
    const mouse = {
        x: 0,
        y: 0,
        target: { x: 0, y: 0 }
    };

    // Sky background with gradient
    const skyGeometry = new THREE.PlaneGeometry(5, 2.5, 1, 1);
    const skyMaterial = new THREE.ShaderMaterial({
        uniforms: {
            time: { value: 0 },
            skyColor1: { value: new THREE.Color('#87CEEB') }, // Sky blue
            skyColor2: { value: new THREE.Color('#C9E9F6') }, // Light sky blue
            mousePos: { value: new THREE.Vector2(0, 0) }
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
        side: THREE.DoubleSide
    });

    const sky = new THREE.Mesh(skyGeometry, skyMaterial);
    sky.position.y = 0.75;
    scene.add(sky);

    // Ocean with interactive waves
    const oceanGeometry = new THREE.PlaneGeometry(5, 2.5, 150, 150);
    const oceanMaterial = new THREE.ShaderMaterial({
        uniforms: {
            time: { value: 0 },
            oceanColor1: { value: new THREE.Color('#0066cc') }, // Deep blue
            oceanColor2: { value: new THREE.Color('#5ab9ea') }, // Light blue
            mousePos: { value: new THREE.Vector2(0, 0) }
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
        side: THREE.DoubleSide
    });

    const ocean = new THREE.Mesh(oceanGeometry, oceanMaterial);
    ocean.position.y = -0.75;
    scene.add(ocean);

    // Horizon line to connect sky and ocean
    const horizonGeometry = new THREE.PlaneGeometry(5, 0.05, 1, 1);
    const horizonMaterial = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.5
    });
    const horizon = new THREE.Mesh(horizonGeometry, horizonMaterial);
    horizon.position.y = 0;
    scene.add(horizon);

    // Subtle sun effect
    const sunGeometry = new THREE.CircleGeometry(0.15, 32);
    const sunMaterial = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.8
    });
    const sun = new THREE.Mesh(sunGeometry, sunMaterial);
    sun.position.set(0.5, 0.5, -0.1);
    scene.add(sun);

    // Ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    // Directional light to simulate sun
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(1, 2, 1);
    scene.add(directionalLight);

    // Track mouse movement
    document.addEventListener('mousemove', (event) => {
        // Convert mouse position to normalized device coordinates (-1 to +1)
        mouse.target.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.target.y = -(event.clientY / window.innerHeight) * 2 + 1;
    });

    // Handle touch events for mobile
    document.addEventListener('touchmove', (event) => {
        if (event.touches.length > 0) {
            mouse.target.x = (event.touches[0].clientX / window.innerWidth) * 2 - 1;
            mouse.target.y = -(event.touches[0].clientY / window.innerHeight) * 2 + 1;
            event.preventDefault();
        }
    });

    // Handle window resize
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });

    // Animation loop
    const clock = new THREE.Clock();

    function animate() {
        requestAnimationFrame(animate);

        // Update time uniform for the shaders
        const elapsedTime = clock.getElapsedTime();
        oceanMaterial.uniforms.time.value = elapsedTime;
        skyMaterial.uniforms.time.value = elapsedTime;

        // Smooth mouse movement
        mouse.x += (mouse.target.x - mouse.x) * 0.05;
        mouse.y += (mouse.target.y - mouse.y) * 0.05;

        // Update mouse position uniforms
        oceanMaterial.uniforms.mousePos.value.set(mouse.x, mouse.y);
        skyMaterial.uniforms.mousePos.value.set(mouse.x, mouse.y);

        // Move sun based on mouse position (subtly)
        sun.position.x = 0.5 + mouse.x * 0.3;
        sun.position.y = 0.5 + mouse.y * 0.2;

        // Also move scene slightly with mouse for parallax effect
        scene.rotation.x = mouse.y * 0.05;
        scene.rotation.y = mouse.x * 0.05;

        renderer.render(scene, camera);
    }

    animate();

    // Create a subtle parallax effect on scroll
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        const maxScroll = document.body.scrollHeight - window.innerHeight;
        const scrollProgress = scrollY / maxScroll;

        // Move the camera slightly based on scroll
        camera.position.z = 3 + scrollProgress * 0.5;
    });
});

// Additional code for smooth scrolling navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - 80, // Account for fixed header
            behavior: 'smooth'
        });
    });
});

// Simple form validation
const contactForm = document.querySelector('#contact form');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // You would normally send the form data to a server here
        // For this demo, just show a success message
        const formElements = contactForm.elements;
        let isValid = true;

        // Basic validation
        for (let i = 0; i < formElements.length; i++) {
            if (formElements[i].hasAttribute('required') && !formElements[i].value) {
                isValid = false;
                formElements[i].classList.add('error');
            } else {
                formElements[i].classList.remove('error');
            }
        }

        if (isValid) {
            // Reset the form
            contactForm.reset();

            // Show success message (in a real application, you'd handle this better)
            alert('Message sent successfully! I will get back to you soon.');
        }
    });
}