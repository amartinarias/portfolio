// App.vue
<template>
  <div class="app">
    <ThreeBackground />
    <TheHeader />
    <main>
      <div>Test app</div>
      <!-- <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection /> -->
    </main>
    <TheFooter />
  </div>
</template>

<script setup>
import ThreeBackground from "@/components/ThreeBackground.vue";
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";
// import HeroSection from "@/components/HeroSection.vue";
// import AboutSection from "@/components/AboutSection.vue";
// import ExperienceSection from "@/components/ExperienceSection.vue";
// import SkillsSection from "@/components/SkillsSection.vue";
// import ProjectsSection from "@/components/ProjectsSection.vue";
// import ContactSection from "@/components/ContactSection.vue";
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
  padding: 80px 20px 40px;
  width: 100%;
}

@media (max-width: 768px) {
  main {
    padding: 80px 16px 40px;
  }
}
</style>