// BaseButton.vue
<template>
  <button
    class="btn"
    :class="{
      primary: primary,
      secondary: secondary,
      small: small,
      large: large,
    }"
  >
    <slot></slot>
  </button>
</template>

<script setup>
defineProps({
  primary: {
    type: Boolean,
    default: false,
  },
  secondary: {
    type: Boolean,
    default: false,
  },
  small: {
    type: Boolean,
    default: false,
  },
  large: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped>
.btn {
  display: inline-block;
  padding: var(--spacing-sm) var(--spacing-lg);
  border-radius: var(--border-radius-md);
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transition-normal);
  border: none;
  outline: none;
  font-family: inherit;
  font-size: var(--font-medium);
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

.btn.small {
  padding: var(--spacing-xs) var(--spacing-md);
  font-size: var(--font-small);
}

.btn.large {
  padding: var(--spacing-md) var(--spacing-xl);
  font-size: var(--font-large);
}

.btn:active {
  transform: translateY(0);
}
</style>