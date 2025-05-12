// TheFooter.vue
<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-info">
          <div class="footer-logo">AM</div>
          <p class="footer-tagline">Software Developer</p>
        </div>

        <div class="footer-links">
          <div class="footer-social">
            <h3>Connect</h3>
            <div class="social-icons">
              <a
                href="https://github.com/amartinarias"
                target="_blank"
                aria-label="GitHub"
              >
                <span class="social-icon github">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path
                      d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                    ></path>
                  </svg>
                </span>
              </a>
              <a
                href="https://linkedin.com/in/amartinarias"
                target="_blank"
                aria-label="LinkedIn"
              >
                <span class="social-icon linkedin">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path
                      d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
                    ></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </span>
              </a>
              <a href="mailto:amartinbusiness@outlook.com" aria-label="Email">
                <span class="social-icon email">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path
                      d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                    ></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <p class="copyright">
          &copy; {{ currentYear }} Alice Martin. All rights reserved.
        </p>
        <p class="built-with">Built with Vue.js and Three.js</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref, computed } from "vue";

const currentYear = computed(() => new Date().getFullYear());

const navItems = [
  { id: 1, text: "About", link: "#about" },
  { id: 2, text: "Experience", link: "#experience" },
  { id: 3, text: "Skills", link: "#skills" },
  { id: 4, text: "Projects", link: "#projects" },
  { id: 5, text: "Contact", link: "#contact" },
];

function scrollToSection(sectionId) {
  const element = document.querySelector(sectionId);

  if (element) {
    window.scrollTo({
      top: element.offsetTop - 80, // Account for header height
      behavior: "smooth",
    });
  }
}
</script>

<style scoped>
.footer {
  position: relative;
  background-color: var(--dark-blue);
  color: var(--light-text);
  padding: var(--spacing-3xl) 0 var(--spacing-xl);
  margin-top: var(--spacing-3xl);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
}

.footer-content {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: var(--spacing-2xl);
  margin-bottom: var(--spacing-2xl);
}

.footer-logo {
  font-size: var(--font-xl);
  font-weight: 700;
  color: var(--light-blue);
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid var(--light-blue);
  border-radius: 50%;
  margin-bottom: var(--spacing-md);
}

.footer-tagline {
  color: var(--light-text);
  opacity: 0.8;
  font-size: var(--font-medium);
}

.footer-links {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-xl);
}

.social-icons {
  display: flex;
  gap: var(--spacing-md);
}

.social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  color: var(--light-text);
  transition: all var(--transition-normal);
}

.social-icon:hover {
  background-color: var(--light-blue);
  transform: translateY(-3px);
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: var(--spacing-lg);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: var(--font-small);
  opacity: 0.7;
}

.built-with {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
}

/* Wave animation */
@keyframes wave {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(-25%);
  }
  100% {
    transform: translateX(0);
  }
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: var(--spacing-xl);
  }

  .footer-links {
    grid-template-columns: 1fr;
    gap: var(--spacing-xl);
  }

  .footer-bottom {
    flex-direction: column;
    align-items: center;
    gap: var(--spacing-sm);
    text-align: center;
  }
}
</style>