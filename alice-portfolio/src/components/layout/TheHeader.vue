// src/components/layout/TheHeader.vue - Corrected for Router
<template>
  <header :class="{ 'header-scrolled': isScrolled }">
    <nav class="nav-container">
      <router-link to="/" class="logo">AM</router-link>
      <div class="nav-links" :class="{ 'nav-open': menuOpen }">
        <ul>
          <li v-for="item in navItems" :key="item.id">
            <router-link :to="item.link" @click="menuOpen = false">
              {{ item.text }}
            </router-link>
          </li>
        </ul>
      </div>
      <div class="mobile-toggle" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const isScrolled = ref(false);
const menuOpen = ref(false);

// Updated navItems to use router paths instead of hash links
const navItems = [
  { id: 1, text: "About", link: "/about" },
  { id: 2, text: "Experience", link: "/experience" },
  { id: 3, text: "Skills", link: "/skills" },
  { id: 4, text: "Projects", link: "/projects" },
  { id: 5, text: "Contact", link: "/contact" },
];

function checkScroll() {
  isScrolled.value = window.scrollY > 50;
}

function toggleMenu() {
  menuOpen.value = !menuOpen.value;

  // Prevent scrolling when menu is open on mobile
  document.body.style.overflow = menuOpen.value ? "hidden" : "";
}

onMounted(() => {
  window.addEventListener("scroll", checkScroll);
  checkScroll(); // Check initial scroll position
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", checkScroll);
});
</script>

<style scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: var(--spacing-md) 0;
  z-index: 100;
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(5px);
  transition: all var(--transition-normal);
}

.header-scrolled {
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  background-color: rgba(255, 255, 255, 0.95);
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
}

.logo {
  font-size: var(--font-xl);
  font-weight: 700;
  color: var(--primary-color);
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid var(--primary-color);
  border-radius: 50%;
  z-index: 101;
  text-decoration: none;
}

.nav-links ul {
  display: flex;
  gap: var(--spacing-lg);
}

.nav-links ul li a {
  font-weight: 500;
  transition: color var(--transition-fast);
  text-decoration: none;
  color: var(--text-color);
  position: relative;
}

.nav-links ul li a:hover {
  color: var(--primary-color);
}

.nav-links a.router-link-active {
  color: var(--primary-color);
  font-weight: 600;
}

.nav-links a.router-link-exact-active::after {
  content: "";
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: var(--primary-color);
}

.mobile-toggle {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 24px;
  height: 18px;
  cursor: pointer;
  z-index: 101;
}

.mobile-toggle span {
  display: block;
  width: 100%;
  height: 2px;
  background-color: var(--primary-color);
  transition: all var(--transition-normal);
}

@media (max-width: 768px) {
  .mobile-toggle {
    display: flex;
  }

  .nav-links {
    position: fixed;
    top: 0;
    right: -100%;
    width: 70%;
    height: 100vh;
    background-color: white;
    box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
    transition: right var(--transition-normal);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .nav-links.nav-open {
    right: 0;
  }

  .nav-links ul {
    flex-direction: column;
    align-items: center;
    gap: var(--spacing-xl);
  }

  .nav-links ul li a {
    font-size: var(--font-large);
  }

  /* Hamburger to X animation */
  .nav-open .mobile-toggle span:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
  }

  .nav-open .mobile-toggle span:nth-child(2) {
    opacity: 0;
  }

  .nav-open .mobile-toggle span:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
  }
}
</style>