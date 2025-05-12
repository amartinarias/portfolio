// ProjectsSection.vue
<template>
  <section id="projects" class="section section-dark">
    <div class="container">
      <h2 class="section-title">Projects</h2>
      <div class="projects-grid">
        <div v-for="project in projects" :key="project.id" class="project-card">
          <div class="project-image">
            <div
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
            <a :href="project.link" target="_blank" class="project-link">
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
  </section>
</template>

<script setup>
import { ref } from "vue";

const projects = ref([
  {
    id: 1,
    title: "Recapify",
    subtitle: "Spotify Recapping Web App",
    description:
      "A full-stack web application using Python, APIs, OAuth, HTML, CSS and Bootstrap. Implementation of OAuth tokens and endpoints with Flask to access Spotify's API.",
    image: "/project1.jpg",
    tags: ["Python", "Flask", "OAuth", "API"],
    link: "https://github.com/recapify",
  },
  {
    id: 2,
    title: "Villo-Design",
    subtitle: "E-Commerce Platform",
    description:
      "An e-commerce website built as part of a group project, using Python, Shopify Liquid, HTML and CSS. Worked on the wireframe using Figma and following Agile principles.",
    image: "/project2.jpg",
    tags: ["Python", "Shopify Liquid", "HTML/CSS", "Agile"],
    link: "https://github.com/Villo-Design",
  },
  {
    id: 3,
    title: "Ocean Wave Simulator",
    subtitle: "Three.js Interactive Experience",
    description:
      "A 3D ocean wave simulation that showcases my passion for surfing and the beauty of nature. Built with Three.js and featuring realistic water physics.",
    image: "/project3.jpg",
    tags: ["Three.js", "JavaScript", "WebGL", "Physics"],
    link: "#",
  },
]);

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

<style scoped>
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

@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }

  .project-info {
    padding: var(--spacing-md);
  }
}
</style>