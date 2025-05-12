// src/views/NotFoundView.vue
<template>
  <div class="not-found">
    <div class="container">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>
        The page you're looking for seems to have drifted away with the tide.
      </p>
      <router-link to="/" class="back-btn">Return to Shore</router-link>

      <div class="ocean-scene">
        <div class="waves">
          <div class="wave wave1"></div>
          <div class="wave wave2"></div>
          <div class="wave wave3"></div>
        </div>

        <div class="submarine">
          <div class="submarine-body"></div>
          <div class="submarine-window"></div>
          <div class="submarine-periscope"></div>
          <div class="submarine-propeller"></div>
          <div class="bubbles">
            <div class="bubble bubble1"></div>
            <div class="bubble bubble2"></div>
            <div class="bubble bubble3"></div>
            <div class="bubble bubble4"></div>
            <div class="bubble bubble5"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// No additional logic needed
</script>

<style scoped>
.not-found {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 var(--spacing-lg);
  color: white;
}

.container {
  max-width: 600px;
  position: relative;
  background-color: rgba(12, 36, 97, 0.8);
  padding: var(--spacing-2xl);
  border-radius: var(--border-radius-lg);
  backdrop-filter: blur(10px);
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

h1 {
  font-size: 8rem;
  margin: 0;
  background: var(--gradient-bg);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1;
  text-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

h2 {
  font-size: 2.5rem;
  margin-bottom: var(--spacing-lg);
  color: var(--light-blue);
}

p {
  margin-bottom: var(--spacing-xl);
  font-size: var(--font-large);
  opacity: 0.9;
}

.back-btn {
  display: inline-block;
  padding: var(--spacing-md) var(--spacing-xl);
  background-color: var(--primary-color);
  color: white;
  border-radius: var(--border-radius-md);
  font-weight: 600;
  text-decoration: none;
  transition: all var(--transition-normal);
}

.back-btn:hover {
  background-color: var(--dark-blue);
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

/* Ocean scene animation */
.ocean-scene {
  position: relative;
  height: 200px;
  margin-top: var(--spacing-2xl);
  overflow: hidden;
  border-radius: var(--border-radius-md);
}

.waves {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100%;
}

.wave {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 200%;
  height: 100px;
  background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="%232e86de" fill-opacity="0.5" d="M0,224L40,213.3C80,203,160,181,240,181.3C320,181,400,203,480,202.7C560,203,640,181,720,181.3C800,181,880,203,960,208C1040,213,1120,203,1200,186.7C1280,171,1360,149,1400,138.7L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>');
  background-size: 100% 100%;
  animation: wave-animation 12s linear infinite;
}

.wave1 {
  opacity: 0.8;
  height: 80px;
  animation-duration: 12s;
}

.wave2 {
  opacity: 0.6;
  height: 60px;
  animation-delay: -5s;
  animation-duration: 16s;
}

.wave3 {
  opacity: 0.4;
  height: 40px;
  animation-delay: -2s;
  animation-duration: 8s;
}

@keyframes wave-animation {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

/* Submarine animation */
.submarine {
  position: absolute;
  width: 80px;
  height: 40px;
  bottom: 60px;
  left: 10%;
  animation: submarine-move 15s ease-in-out infinite;
}

.submarine-body {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: var(--dark-blue);
  border-radius: 40px 40px 10px 10px;
}

.submarine-window {
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #a3daff;
  border: 2px solid var(--light-blue);
  top: 10px;
  left: 15px;
}

.submarine-periscope {
  position: absolute;
  width: 6px;
  height: 25px;
  background-color: var(--dark-blue);
  top: -25px;
  right: 20px;
}

.submarine-propeller {
  position: absolute;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: var(--light-blue);
  right: -8px;
  top: 12px;
  animation: propeller-spin 1s linear infinite;
}

.bubbles {
  position: absolute;
  top: 5px;
  right: -20px;
}

.bubble {
  position: absolute;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 50%;
  animation: bubble-rise 3s ease-in infinite;
}

.bubble1 {
  width: 8px;
  height: 8px;
  right: 0;
  animation-delay: 0s;
}

.bubble2 {
  width: 6px;
  height: 6px;
  right: 10px;
  top: 10px;
  animation-delay: 0.5s;
}

.bubble3 {
  width: 10px;
  height: 10px;
  right: -5px;
  top: 15px;
  animation-delay: 1s;
}

.bubble4 {
  width: 5px;
  height: 5px;
  right: 5px;
  top: 5px;
  animation-delay: 1.5s;
}

.bubble5 {
  width: 7px;
  height: 7px;
  right: -10px;
  top: 20px;
  animation-delay: 2s;
}

@keyframes submarine-move {
  0% {
    transform: translateX(0) translateY(0);
  }
  25% {
    transform: translateX(300%) translateY(-15px);
  }
  50% {
    transform: translateX(600%) translateY(0);
  }
  75% {
    transform: translateX(300%) translateY(15px);
  }
  100% {
    transform: translateX(0) translateY(0);
  }
}

@keyframes propeller-spin {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes bubble-rise {
  0% {
    transform: translateY(0) translateX(0);
    opacity: 0;
  }
  25% {
    opacity: 1;
  }
  100% {
    transform: translateY(-80px) translateX(-20px);
    opacity: 0;
  }
}

@media (max-width: 768px) {
  h1 {
    font-size: 6rem;
  }

  h2 {
    font-size: 1.8rem;
  }

  .container {
    padding: var(--spacing-lg);
  }
}
</style>