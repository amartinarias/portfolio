// SkillsAndProjectsSection.vue 

<script setup>
import { ref } from "vue";
import recapifyImage from "@/assets/images/recapify.png";

// Highlighted skills will get extra styling (key skills)
const highlightedSkills = [
  "VueJS",
  "JavaScript",
  "Vuetify",
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

const projects = ref([
  {
    id: 1,
    title: "Recapify",
    subtitle: "Spotify Recapping Web App",
    description:
      "A full-stack web application using Python, APIs, OAuth, HTML, CSS and Bootstrap. Implementation of OAuth tokens and endpoints with Flask to access Spotify's API.",
    image: recapifyImage,
    tags: ["Python", "Flask", "OAuth", "API"],
    link: "https://github.com/recapify",
  },
  {
    id: 2,
    title: "Villo-Design",
    subtitle: "E-Commerce Platform",
    description:
      "An e-commerce website built as part of a group project, using Python, Shopify Liquid, HTML and CSS. Worked on the wireframe using Figma and following Agile principles.",
    tags: ["Python", "Shopify Liquid", "HTML/CSS", "Agile"],
    link: "https://github.com/Villo-Design",
  },
  {
    id: 3,
    title: "Villo-Design",
    subtitle: "E-Commerce Platform",
    description:
      "An e-commerce website built as part of a group project, using Python, Shopify Liquid, HTML and CSS. Worked on the wireframe using Figma and following Agile principles.",
    tags: ["Vue JS", "Vuetify", "MongoDB", "Redis"],
  },
]);

const isHighlighted = (skillName) => {
  return highlightedSkills.includes(skillName);
};

// Generate ocean-themed colors for project placeholders
function getRandomColor() {
  const colors = [
    "#2e86de", // Primary blue
    "#54a0ff", // Secondary blue
    "#0c2461", // Dark blue
    "#70a1ff", // Light blue
    "#5758BB", // Accent purple
    "#00d2d3", // Teal
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}
</script>

<template>
  <section id="skills-and-projects" class="section-skills">
    <!-- Skills Section -->
    <div class="section-part section-light rounded-top">
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
      </div>

      <div class="wave-divider">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="var(--background)"
            fill-opacity="1"
            d="M0,256L48,240C96,224,192,192,288,181.3C384,171,480,181,576,197.3C672,213,768,235,864,229.3C960,224,1056,192,1152,181.3C1248,171,1344,181,1392,186.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>

    <!-- Projects Section -->
    <div class="section-part section-dark rounded-bottom">
      <div class="container">
        <h2 class="section-title">Projects</h2>
        <div class="projects-grid">
          <div
            v-for="project in projects"
            :key="project.id"
            class="project-card"
          >
            <div>
              <!-- Use actual image when available -->
              <img
                v-if="project.image"
                :src="project.image"
                :alt="project.title"
                class="project-img"
              />
              <!-- Fallback to placeholder if no image -->
              <div
                v-else
                class="project-img-placeholder"
                :style="{ 'background-color': getRandomColor() }"
              >
                <div class="project-icon">{{ project.title.charAt(0) }}</div>
              </div>
            </div>
            <div class="project-info">
              <h3>{{ project.title }}</h3>
              <p class="project-subtitle">{{ project.subtitle }}</p>
              <p class="project-description">{{ project.description }}</p>
              <div class="project-tags">
                <span v-for="(tag, index) in project.tags" :key="index">{{
                  tag
                }}</span>
              </div>
              <a
                v-if="project.link"
                :href="project.link"
                target="_blank"
                class="project-link"
              >
                View Project
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<style scoped>
/* Section Structure */
.section-skills {
  position: relative;
  margin: 80px auto;
  max-width: 1200px;
  opacity: 0.9;
  border-radius: var(--border-radius-lg);
  overflow: hidden; /* Important for maintaining rounded corners */
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1); /* Optional: add shadow for depth */
}

.section-part {
  padding: var(--spacing-3xl) 0;
  position: relative;
}

.rounded-top {
  border-top-left-radius: var(--border-radius-lg);
  border-top-right-radius: var(--border-radius-lg);
}

.rounded-bottom {
  border-bottom-left-radius: var(--border-radius-lg);
  border-bottom-right-radius: var(--border-radius-lg);
}

.section-light {
  background-color: white;
}

.section-dark {
  background-color: var(--background);
}

.container {
  max-width: 1100px; /* Slightly smaller than section to maintain padding */
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
  position: relative;
  z-index: 2;
}

.section-title {
  font-size: var(--font-2xl);
  margin-bottom: var(--spacing-xl);
  position: relative;
  display: inline-block;
}

.section-title::after {
  content: "";
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 80px;
  height: 3px;
  background-color: var(--primary-color);
}

/* Wave Divider */
.wave-divider {
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 150px;
  overflow: hidden;
  z-index: 1;
}

.wave-divider svg {
  position: absolute;
  bottom: 0;
  width: 100%;
}

/* Skills Section Styles */
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

/* Projects Section Styles */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: var(--spacing-xl);
}

.project-card {
  background-color: white;
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform var(--transition-normal),
    box-shadow var(--transition-normal);
  position: relative;
}

.project-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

/* "Wave" animation on hover */
.project-card::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 5px;
  background: var(--gradient-bg);
  transform: scaleX(0);
  transform-origin: bottom right;
  transition: transform 0.5s;
}

.project-card:hover::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}

.project-img-placeholder {
  width: 100%;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
  position: relative;
  overflow: hidden;
}

.project-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 5rem;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.7);
}

.project-info {
  padding: var(--spacing-lg);
}

.project-info h3 {
  font-size: var(--font-large);
  margin-bottom: var(--spacing-xs);
  color: var(--primary-color);
}

.project-subtitle {
  color: #777;
  margin-bottom: var(--spacing-md);
  font-weight: 500;
}

.project-description {
  margin-bottom: var(--spacing-md);
  line-height: 1.6;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
  margin: var(--spacing-md) 0;
}

.project-tags span {
  background-color: #e8f0fe;
  color: var(--primary-color);
  padding: 4px 8px;
  border-radius: var(--border-radius-sm);
  font-size: var(--font-small);
  font-weight: 500;
}

.project-link {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-xs);
  color: var(--primary-color);
  font-weight: 600;
  transition: transform var(--transition-fast);
}

.project-link:hover {
  transform: translateX(5px);
}

/* Responsive Styles */
@media (max-width: 768px) {
  .section-skills {
    margin: 60px 16px; /* Add horizontal margin on mobile */
  }

  .skills-content {
    grid-template-columns: 1fr;
    gap: var(--spacing-xl);
  }

  .skills-category:last-child {
    margin-bottom: var(--spacing-xl);
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }

  .project-info {
    padding: var(--spacing-md);
  }

  .wave-divider {
    height: 80px;
  }
}
</style>