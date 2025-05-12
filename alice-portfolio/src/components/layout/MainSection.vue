// src/components/layout/MainSection.vue
<template>
  <div class="main-section">
    <div class="hero-content" :class="{ visible: isVisible }">
      <h1>Alice Martin</h1>
      <h2>Software Developer</h2>
      <p>
        Creating beautiful, functional applications with a passion for
        nature-inspired design
      </p>
      <div class="cta-buttons">
        <router-link to="/projects" class="btn primary"
          >View Projects</router-link
        >
        <router-link to="/contact" class="btn secondary"
          >Contact Me</router-link
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const isVisible = ref(false);

onMounted(() => {
  // Add a small delay for the animation to work
  setTimeout(() => {
    isVisible.value = true;
  }, 500);
});
</script>

<style scoped>
.main-section {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  padding: var(--spacing-2xl);
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: var(--border-radius-lg);
  backdrop-filter: blur(5px);
  transform: translateY(30px);
  opacity: 0;
  transition: all 1.2s ease-out;
}

.hero-content.visible {
  transform: translateY(0);
  opacity: 1;
}

h1 {
  font-size: var(--font-3xl);
  margin-bottom: var(--spacing-md);
  background: var(--gradient-bg);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
}

h2 {
  font-size: var(--font-xl);
  margin-bottom: var(--spacing-md);
  font-weight: 400;
}

p {
  font-size: var(--font-large);
  margin-bottom: var(--spacing-xl);
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.cta-buttons {
  display: flex;
  gap: var(--spacing-md);
  justify-content: center;
}

.btn {
  display: inline-block;
  padding: var(--spacing-sm) var(--spacing-lg);
  border-radius: var(--border-radius-md);
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transition-normal);
  text-decoration: none;
}

.btn.primary {
  background-color: var(--primary-color);
  color: white;
}

.btn.primary:hover {
  background-color: var(--dark-blue);
  transform: translateY(-2px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.btn.secondary {
  background-color: transparent;
  color: var(--primary-color);
  border: 2px solid var(--primary-color);
}

.btn.secondary:hover {
  background-color: var(--primary-color);
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
  .hero-content {
    padding: var(--spacing-xl);
    width: 90%;
  }

  .cta-buttons {
    flex-direction: column;
    gap: var(--spacing-md);
  }

  h1 {
    font-size: var(--font-2xl);
  }

  h2 {
    font-size: var(--font-large);
  }

  p {
    font-size: var(--font-medium);
  }
}
</style>