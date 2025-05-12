// useMousePosition.js
import { ref, onMounted, onBeforeUnmount } from 'vue';

export function useMousePosition() {
    const x = ref(0);
    const y = ref(0);

    // Target values for smooth interpolation
    const targetX = ref(0);
    const targetY = ref(0);

    // For animation smoothing
    let animationFrameId = null;

    function updateMousePosition(event) {
        // Convert mouse position to normalized device coordinates (-1 to +1)
        targetX.value = (event.clientX / window.innerWidth) * 2 - 1;
        targetY.value = -(event.clientY / window.innerHeight) * 2 + 1;
    }

    function updateTouchPosition(event) {
        if (event.touches.length > 0) {
            // Convert touch position to normalized device coordinates (-1 to +1)
            targetX.value = (event.touches[0].clientX / window.innerWidth) * 2 - 1;
            targetY.value = -(event.touches[0].clientY / window.innerHeight) * 2 + 1;
            event.preventDefault();
        }
    }

    function animateMouseMovement() {
        // Smooth interpolation between current and target values
        x.value += (targetX.value - x.value) * 0.05;
        y.value += (targetY.value - y.value) * 0.05;

        animationFrameId = requestAnimationFrame(animateMouseMovement);
    }

    onMounted(() => {
        window.addEventListener('mousemove', updateMousePosition);
        window.addEventListener('touchmove', updateTouchPosition);

        // Start the animation loop
        animateMouseMovement();
    });

    onBeforeUnmount(() => {
        window.removeEventListener('mousemove', updateMousePosition);
        window.removeEventListener('touchmove', updateTouchPosition);

        // Cancel animation frame
        if (animationFrameId) {
            cancelAnimationFrame(animationFrameId);
        }
    });

    return { x, y };
}