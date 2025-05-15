// ContactSection.vue
<template>
  <section id="contact" class="section section-light">
    <div class="container">
      <h2 class="section-title">Get In Touch</h2>
      <div class="contact-content">
        <div class="contact-info">
          <div class="contact-details">
            <div class="contact-method">
              <div class="icon-container">
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
              </div>
              <div class="contact-text">
                <h4>Email</h4>
                <a href="mailto:amartinbusiness@outlook.com"
                  >amartinbusiness@outlook.com</a
                >
              </div>
            </div>

            <div class="contact-method">
              <div class="icon-container">
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
              </div>
              <div class="contact-text">
                <h4>LinkedIn</h4>
                <a href="https://linkedin.com/in/amartinarias" target="_blank"
                  >linkedin.com/in/amartinarias</a
                >
              </div>
            </div>

            <div class="contact-method">
              <div class="icon-container">
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
              </div>
              <div class="contact-text">
                <h4>GitHub</h4>
                <a href="https://github.com/amartinarias" target="_blank"
                  >github.com/amartinarias</a
                >
              </div>
            </div>
          </div>
        </div>

        <!-- <div class="contact-form-container">
          <form class="contact-form" @submit.prevent="submitForm">
            <div class="form-group">
              <label for="name">Name</label>
              <input
                type="text"
                id="name"
                v-model="formData.name"
                :class="{ error: errors.name }"
                required
              />
              <p v-if="errors.name" class="error-message">{{ errors.name }}</p>
            </div>

            <div class="form-group">
              <label for="email">Email</label>
              <input
                type="email"
                id="email"
                v-model="formData.email"
                :class="{ error: errors.email }"
                required
              />
              <p v-if="errors.email" class="error-message">
                {{ errors.email }}
              </p>
            </div>

            <div class="form-group">
              <label for="message">Message</label>
              <textarea
                id="message"
                v-model="formData.message"
                rows="5"
                :class="{ error: errors.message }"
                required
              ></textarea>
              <p v-if="errors.message" class="error-message">
                {{ errors.message }}
              </p>
            </div>

            <button type="submit" class="submit-btn" :disabled="isSubmitting">
              <span v-if="isSubmitting">Sending...</span>
              <span v-else>Send Message</span>
            </button>

            <p v-if="successMessage" class="success-message">
              {{ successMessage }}
            </p>
          </form>
        </div> -->
      </div>
    </div>

    <!-- Wave animation container -->
    <div class="wave-container">
      <div class="wave wave1"></div>
      <div class="wave wave2"></div>
      <div class="wave wave3"></div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from "vue";

// Form state
const formData = reactive({
  name: "",
  email: "",
  message: "",
});

const errors = reactive({
  name: "",
  email: "",
  message: "",
});

const isSubmitting = ref(false);
const successMessage = ref("");

// Form validation
const validateForm = () => {
  let isValid = true;

  // Reset errors
  errors.name = "";
  errors.email = "";
  errors.message = "";

  // Validate name
  if (!formData.name.trim()) {
    errors.name = "Name is required";
    isValid = false;
  }

  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!formData.email.trim()) {
    errors.email = "Email is required";
    isValid = false;
  } else if (!emailRegex.test(formData.email)) {
    errors.email = "Please enter a valid email address";
    isValid = false;
  }

  // Validate message
  if (!formData.message.trim()) {
    errors.message = "Message is required";
    isValid = false;
  } else if (formData.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters";
    isValid = false;
  }

  return isValid;
};

// Form submission
const submitForm = async () => {
  if (!validateForm()) {
    return;
  }

  isSubmitting.value = true;

  try {
    // Simulate API call with timeout
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Reset form after successful submission
    formData.name = "";
    formData.email = "";
    formData.message = "";

    // Show success message
    successMessage.value =
      "Thank you for your message! I'll get back to you soon.";

    // Clear success message after 5 seconds
    setTimeout(() => {
      successMessage.value = "";
    }, 5000);
  } catch (error) {
    console.error("Error submitting form:", error);
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<style scoped>
.section {
  position: relative;
  padding: var(--spacing-3xl) 0 var(--spacing-5xl);
  overflow: hidden;
}

.container {
  position: relative;
  z-index: 5; /* Higher z-index to ensure it's above waves */
}

.section-title {
  font-size: var(--font-2xl);
  margin-bottom: var(--spacing-2xl);
  text-align: center;
  color: var(--primary-color);
  font-weight: 700;
  position: relative;
}

.section-title:after {
  content: "";
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 3px;
  background-color: var(--primary-color);
  border-radius: 3px;
}

.contact-content {
  display: flex;
  justify-content: center;
  max-width: 500px;
  margin: 0 auto 120px; /* Add bottom margin to position above waves */
  position: relative;
}

.contact-info {
  background-color: white;
  padding: var(--spacing-xl);
  border-radius: var(--border-radius-lg);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  width: 100%;
  transform: translateY(0);
  transition: transform 0.3s ease;
  position: relative;
  z-index: 10; /* Ensure it's above the waves */
  margin-bottom: -50px; /* Make it overlap with the waves */
}

.contact-info:hover {
  transform: translateY(-5px);
}

.contact-details {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
}

.contact-method {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  padding: var(--spacing-md);
  border-radius: var(--border-radius-md);
  transition: background-color 0.3s ease;
}

.contact-method:hover {
  background-color: rgba(0, 0, 0, 0.02);
}

.icon-container {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: var(--primary-color);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, background-color 0.3s ease;
}

.contact-method:hover .icon-container {
  transform: scale(1.1);
  background-color: var(--dark-blue);
}

.contact-text h4 {
  font-size: var(--font-medium);
  margin-bottom: var(--spacing-xs);
  color: var(--primary-color);
  font-weight: 600;
}

.contact-text a {
  color: var(--text-color);
  transition: color var(--transition-fast);
  font-size: var(--font-medium);
  text-decoration: none;
  position: relative;
}

.contact-text a:after {
  content: "";
  position: absolute;
  width: 0;
  height: 1px;
  bottom: -2px;
  left: 0;
  background-color: var(--primary-color);
  transition: width 0.3s ease;
}

.contact-text a:hover {
  color: var(--primary-color);
}

.contact-text a:hover:after {
  width: 100%;
}

/* Wave animation */
.wave-container {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 180px;
  overflow: hidden;
  z-index: 2; /* Lower z-index to ensure it's below the contact box */
}

.wave {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 200%;
  height: 100px;
  background-repeat: repeat-x;
  background-position: 0 bottom;
  transform-origin: center bottom;
}

.wave1 {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'%3E%3Cpath d='M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z' opacity='.25' fill='%232e86de'%3E%3C/path%3E%3C/svg%3E");
  animation: wave-animation 25s linear infinite;
  z-index: 3;
  opacity: 0.5;
  height: 100px; /* Increased height */
}

.wave2 {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'%3E%3Cpath d='M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z' opacity='.25' fill='%232e86de'%3E%3C/path%3E%3C/svg%3E");
  animation: wave-animation 20s linear infinite;
  z-index: 2;
  opacity: 0.3;
  height: 80px; /* Increased height */
}

.wave3 {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'%3E%3Cpath d='M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z' opacity='.25' fill='%232e86de'%3E%3C/path%3E%3C/svg%3E");
  animation: wave-animation 15s linear infinite;
  z-index: 1;
  opacity: 0.2;
  height: 60px; /* Increased height */
}

@keyframes wave-animation {
  0% {
    transform: translateX(0) translateZ(0);
  }
  50% {
    transform: translateX(-25%) translateZ(0);
  }
  100% {
    transform: translateX(-50%) translateZ(0);
  }
}

/* Contact form styles (kept as commented code) */
.contact-form-container {
  position: relative;
  z-index: 1;
}

.contact-form {
  background-color: white;
  padding: var(--spacing-xl);
  border-radius: var(--border-radius-lg);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.form-group {
  margin-bottom: var(--spacing-md);
}

.form-group label {
  display: block;
  margin-bottom: var(--spacing-xs);
  font-weight: 500;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: var(--spacing-sm) var(--spacing-md);
  border: 1px solid #ddd;
  border-radius: var(--border-radius-sm);
  font-family: inherit;
  font-size: var(--font-medium);
  transition: border-color var(--transition-fast);
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--primary-color);
}

.form-group input.error,
.form-group textarea.error {
  border-color: #e74c3c;
}

.error-message {
  color: #e74c3c;
  font-size: var(--font-small);
  margin-top: var(--spacing-xs);
}

.success-message {
  color: #2ecc71;
  text-align: center;
  margin-top: var(--spacing-md);
}

.submit-btn {
  display: inline-block;
  padding: var(--spacing-md) var(--spacing-lg);
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: var(--border-radius-md);
  font-weight: 600;
  font-size: var(--font-medium);
  cursor: pointer;
  transition: all var(--transition-normal);
  width: 100%;
}

.submit-btn:hover {
  background-color: var(--dark-blue);
  transform: translateY(-2px);
}

.submit-btn:disabled {
  background-color: #ccc;
  cursor: not-allowed;
  transform: none;
}

@media (max-width: 768px) {
  .contact-content {
    flex-direction: column;
    gap: var(--spacing-xl);
    margin-bottom: 80px; /* Adjusted for mobile */
  }

  .wave-container {
    height: 100px;
  }

  .wave {
    height: 50px;
  }

  .section-title {
    font-size: var(--font-xl);
  }

  .section-title:after {
    width: 60px;
  }

  .icon-container {
    width: 40px;
    height: 40px;
  }

  .contact-text h4 {
    font-size: calc(var(--font-medium) - 2px);
  }

  .contact-text a {
    font-size: calc(var(--font-medium) - 2px);
  }

  .contact-info {
    margin-bottom: -30px; /* Adjusted overlap for mobile */
  }
}
@media (max-width: 768px) {
  /* Add more padding at the top of the section on mobile */
  .section {
    padding-top: var(--spacing-4xl);
  }

  /* Fix for the title being too close to the top */
  .section-title {
    font-size: var(--font-xl);
    margin-top: var(--spacing-xl);
    margin-bottom: var(--spacing-xl);
  }

  /* Fix for the squished email icon */
  .icon-container {
    min-width: 40px; /* Ensure minimum width */
    min-height: 40px; /* Ensure minimum height */
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Make contact methods more readable on mobile */
  .contact-method {
    padding: var(--spacing-sm);
    align-items: flex-start; /* Align to top for better layout */
  }

  /* Add more space between contact info items */
  .contact-details {
    gap: var(--spacing-xl);
  }

  /* Ensure the contact info box has enough padding */
  .contact-info {
    padding: var(--spacing-lg);
    margin-bottom: 50px; /* More space before waves */
  }

  /* Ensure wave container doesn't overlap too much with content */
  .wave-container {
    height: 80px;
  }

  /* Adjust the content margin to prevent overlap issues */
  .contact-content {
    margin-bottom: 100px;
  }
}

/* Fix for any SVG scaling issues */
@media (max-width: 480px) {
  .icon-container svg {
    width: 20px;
    height: 20px;
  }
}
</style>