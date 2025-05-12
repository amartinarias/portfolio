// SkillsSection.vue
<template>
  <section id="skills" class="section section-light">
    <div class="container">
      <h2 class="section-title">Skills</h2>
      <div class="skills-content">
        <div class="skills-category">
          <h3>Programming</h3>
          <div class="skills-grid">
            <div
              v-for="skill in skills.programming"
              :key="skill.id"
              class="skill-item"
              :class="{ highlight: isHighlighted(skill.name) }"
            >
              {{ skill.name }}
            </div>
          </div>
        </div>

        <div class="skills-category">
          <h3>Tools & Technologies</h3>
          <div class="skills-grid">
            <div
              v-for="skill in skills.tools"
              :key="skill.id"
              class="skill-item"
              :class="{ highlight: isHighlighted(skill.name) }"
            >
              {{ skill.name }}
            </div>
          </div>
        </div>
      </div>

      <div class="ocean-waves">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="var(--light-blue)"
            fill-opacity="0.2"
            d="M0,256L48,240C96,224,192,192,288,181.3C384,171,480,181,576,197.3C672,213,768,235,864,229.3C960,224,1056,192,1152,181.3C1248,171,1344,181,1392,186.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

// Highlighted skills will get extra styling (key skills)
const highlightedSkills = [
  "VueJS",
  "JavaScript",
  "Three.js",
  "Firebase",
  "Figma",
  "GitHub",
];

const skills = ref({
  programming: [
    { id: 1, name: "VueJS" },
    { id: 2, name: "JavaScript" },
    { id: 3, name: "HTML5" },
    { id: 4, name: "CSS3" },
    { id: 5, name: "Python" },
    { id: 6, name: "Flask" },
    { id: 7, name: "OOP" },
    { id: 8, name: "MySQL" },
    { id: 9, name: "REST APIs" },
    { id: 10, name: "Three.js" },
    { id: 11, name: "MongoDB" },
    { id: 12, name: "Vuetify" },
  ],
  tools: [
    { id: 1, name: "Firebase" },
    { id: 2, name: "Figma" },
    { id: 3, name: "GitHub" },
    { id: 4, name: "Git" },
    { id: 5, name: "Agile" },
    { id: 6, name: "OAuth" },
    { id: 7, name: "Vuex" },
    { id: 8, name: "Vue Router" },
    { id: 9, name: "Redis" },
  ],
});

const isHighlighted = (skillName) => {
  return highlightedSkills.includes(skillName);
};
</script>

<style scoped>
.skills-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-2xl);
  position: relative;
  z-index: 2;
}

.skills-category h3 {
  font-size: var(--font-xl);
  margin-bottom: var(--spacing-lg);
  color: var(--primary-color);
  position: relative;
  display: inline-block;
}

.skills-category h3::after {
  content: "";
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 40px;
  height: 2px;
  background-color: var(--primary-color);
}

.skills-grid {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-md);
}

.skill-item {
  background-color: var(--background);
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--border-radius-sm);
  font-weight: 500;
  transition: all var(--transition-normal);
  position: relative;
  overflow: hidden;
}

.skill-item:hover {
  background-color: var(--primary-color);
  color: white;
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

/* Create wave animation behind skill items on hover */
.skill-item::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.2),
    transparent
  );
  transition: left 0.5s;
}

.skill-item:hover::before {
  left: 100%;
}

/* Highlighted skills */
.skill-item.highlight {
  background-color: var(--primary-color);
  color: white;
  border: none;
}

.skill-item.highlight:hover {
  background-color: var(--dark-blue);
}

/* Ocean waves decoration */
.ocean-waves {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px;
  overflow: hidden;
  z-index: 1;
}

.ocean-waves svg {
  width: 100%;
  height: auto;
}

@media (max-width: 768px) {
  .skills-content {
    grid-template-columns: 1fr;
    gap: var(--spacing-xl);
  }

  .skills-category:last-child {
    margin-bottom: var(--spacing-xl);
  }

  .ocean-waves {
    height: 60px;
  }
}
</style>