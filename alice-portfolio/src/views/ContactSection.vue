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

        <div class="contact-form-container">
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
        </div>
      </div>
    </div>

    <!-- Ocean-inspired decoration -->
    <div class="ocean-decoration">
      <div class="wave wave1"></div>
      <div class="wave wave2"></div>
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
.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-2xl);
  position: relative;
}

.contact-info {
  background-color: white;
  padding: var(--spacing-xl);
  border-radius: var(--border-radius-lg);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  height: fit-content;
}

.contact-info p {
  margin-bottom: var(--spacing-xl);
  font-size: var(--font-medium);
  line-height: 1.7;
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
}

.icon-container {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: var(--primary-color);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.contact-text h4 {
  font-size: var(--font-medium);
  margin-bottom: var(--spacing-xs);
  color: var(--primary-color);
}

.contact-text a {
  color: var(--text-color);
  transition: color var(--transition-fast);
}

.contact-text a:hover {
  color: var(--primary-color);
}

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

/* Ocean-themed decorative elements */
.ocean-decoration {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 150px;
  overflow: hidden;
  z-index: 0;
}

.wave {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 200%;
  height: 100px;
  background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="%232e86de" fill-opacity="0.2" d="M0,224L40,213.3C80,203,160,181,240,181.3C320,181,400,203,480,202.7C560,203,640,181,720,181.3C800,181,880,203,960,208C1040,213,1120,203,1200,186.7C1280,171,1360,149,1400,138.7L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>');
  background-size: 100% 100%;
  animation: wave-animation 15s linear infinite;
}

.wave1 {
  opacity: 0.3;
  animation-duration: 15s;
}

.wave2 {
  opacity: 0.2;
  animation-delay: -5s;
  animation-duration: 20s;
}

@keyframes wave-animation {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0);
  }
}

@media (max-width: 768px) {
  .contact-content {
    grid-template-columns: 1fr;
    gap: var(--spacing-xl);
  }

  .ocean-decoration {
    height: 100px;
  }

  .wave {
    height: 50px;
  }
}
</style>