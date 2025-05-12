// App.vue
<template>
  <div class="app">
    <ThreeBackground />
    <TheHeader />
    <main>
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <TheFooter />
  </div>
</template>

<script setup>
import ThreeBackground from "@/components/DynamicOceanBackground.vue";
// import ThreeBackground from "@/components/ThreeBackground.vue";
import TheHeader from "@/components/layout/TheHeader.vue";
import TheFooter from "@/components/layout/TheFooter.vue";
</script>

<style>
@import "@/assets/styles/main.css";

.app {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1; /* This makes the main content expand to push footer down */
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px 40px;
  width: 100%;
}

@media (max-width: 768px) {
  main {
    padding: 80px 16px 40px;
  }
}
</style>