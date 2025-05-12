// TheFooter.vue
<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="social-icons">
          <a
            href="https://github.com/amartinarias"
            target="_blank"
            aria-label="GitHub"
          >
            <span class="social-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
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
            <span class="social-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
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
            <span class="social-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
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
        <div class="copyright">
          &copy; {{ currentYear }} Alice Martin | Built with Vue.js
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from "vue";

const currentYear = computed(() => new Date().getFullYear());
</script>

<style scoped>
.footer {
  background-color: var(--dark-blue);
  color: var(--light-text);
  padding: var(--spacing-md) 0;
  margin-top: var(--spacing-xl);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: var(--font-small);
}

.social-icons {
  display: flex;
  gap: var(--spacing-md);
}

.social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  color: var(--light-text);
  transition: all var(--transition-normal);
}

.social-icon:hover {
  background-color: var(--light-blue);
  transform: translateY(-2px);
}

.copyright {
  opacity: 0.8;
}

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    gap: var(--spacing-md);
    padding: var(--spacing-sm) 0;
    text-align: center;
  }

  .social-icons {
    margin-bottom: var(--spacing-sm);
  }
}
</style>