// ExperienceSection.vue with properly positioned ocean decoration
<template>
  <section id="experience" class="section section-dark">
    <div class="container">
      <h2 class="section-title">Experience</h2>
      <div class="timeline">
        <div
          class="timeline-item"
          v-for="experience in experiences"
          :key="experience.id"
        >
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <h3>{{ experience.title }}</h3>
            <h4>{{ experience.company }}</h4>
            <p class="timeline-date">{{ experience.period }}</p>
            <ul>
              <li
                v-for="(responsibility, index) in experience.responsibilities"
                :key="index"
              >
                {{ responsibility }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Ocean wave decoration -->
    <div class="ocean-decoration">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="var(--light-blue)"
          fill-opacity="0.2"
          d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const experiences = ref([
  {
    id: 1,
    title: "Software Developer",
    company: "Vindico",
    period: "Sep 2022 - Present",
    responsibilities: [
      "Developing Android and iOS applications using VueJS/Javascript, Vuex/Vue Router/Vuetify, Firebase/Firestore, Redis and Figma.",
      "Working closely with team to develop a progressive web application following client requirements and timeline.",
      "Collaborating with project managers, design teams, and senior developers throughout application lifecycle.",
      "Implementing registering and login mechanisms, conducting tests, and managing NoSQL databases.",
      "Strong UX/UI design skills and passionate about creating apps that are user-friendly and accessible.",
    ],
  },
  {
    id: 2,
    title: "JavaScript, Web Development and Python Instructor",
    company: "Code First Girls",
    period: "Jun 2023 - Jan 2025",
    responsibilities: [
      "Delivered the CFG Coding Kickstarter Intro courses in Web Development, Python & Apps and JavaScript.",
      "Mentored over 100 students, providing personalized support and guidance.",
      "Designed hands-on coding exercises that improved student engagement and concept retention by 30%.",
      "Adapted teaching methods to accommodate diverse learning styles and technical backgrounds.",
    ],
  },
  {
    id: 3,
    title: "Engineering Mentee",
    company: "Cajigo",
    period: "Aug 2022 - Dec 2022",
    responsibilities: [
      "Completed 16-week mentorship program focused on problem-solving and communication skills.",
      "Pair-programmed on Codewars challenges and algorithms.",
      "Developed leadership through industry networking sessions.",
    ],
  },
  {
    id: 4,
    title: "Software Engineering Nanodegree",
    company: "Code First Girls",
    period: "May 2022 - Aug 2022",
    responsibilities: [
      "14-week bootcamp in Software Engineering. Achieved strong programming skills in Python and SQL.",
      "Boosted OOP skills. Gained an in-depth knowledge of SQL and database management techniques.",
      "Built a full-stack web application, using technologies such as Python, APIs, OAuth, HTML, CSS and Bootstrap.",
      "Implemented OAuth tokens, and endpoints with Flask.",
    ],
  },
  {
    id: 5,
    title: "Engineering Mentee",
    company: "Cajigo",
    period: "Aug 2022 - Dec 2022",
    responsibilities: [
      "Completed 16-week mentorship program focused on problem-solving and communication skills, pair-programming with Codewars and algorithms, and developing leadership through industry networking sessions",
    ],
  },
  {
    id: 6,
    title: "Logistics and Sales Administrator",
    company: "Cyden",
    period: "Aug 2020 - Aug 2022",
    responsibilities: [
      "Promoted to manage the logistics department as I was exceeding expectations with my work and communication skills at all levels within the business.",
      "Successfully coordinated the shipment of an average of 30000 hair removal devices each week. Collaborated with the quality, warehouse and production teams enabling delivery deadlines to be met on time.",
      "Delivered excellent customer service and built stronger relationships with clients on behalf of Cyden.",
    ],
  },
  {
    id: 7,
    title: "Finance Co-ordinator",
    company: "ARUP",
    period: "Feb 2019 - Aug 2019",
    responsibilities: [
      "Supervised the correct delivery of invoices ensuring that these were sent timely and with the correct information.",
      "Collaborated with the finance team and project managers ensuring clear communication and accuracy of my work. Built a strong knowledge of systems and procedures and worked independently towards my monthly goals.",
    ],
  },
]);
</script>

<style scoped>
.section {
  padding: var(--spacing-3xl) 0 calc(var(--spacing-3xl) + 80px); /* Add extra padding at bottom for decoration */
  position: relative;
  overflow: hidden; /* Important to contain the decoration */
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
  position: relative;
  z-index: 2; /* Ensure content is above the decoration */
}

.timeline {
  position: relative;
}

.timeline::before {
  content: "";
  position: absolute;
  width: 2px;
  background-color: var(--primary-color);
  top: 0;
  bottom: 0;
  left: 20px;
}

.timeline-item {
  padding-left: 50px;
  margin-bottom: var(--spacing-2xl);
  position: relative;
}

.timeline-item:last-child {
  margin-bottom: 0;
}

.timeline-dot {
  position: absolute;
  width: 16px;
  height: 16px;
  background-color: var(--primary-color);
  border-radius: 50%;
  left: 13px;
  top: 8px;
  z-index: 1;
}

.timeline-content {
  padding: var(--spacing-lg);
  background-color: white;
  border-radius: var(--border-radius-md);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  position: relative;
  transition: transform var(--transition-normal);
}

.timeline-content:hover {
  transform: translateY(-5px);
}

/* Create wave-like effect on hover */
.timeline-content::before {
  content: "";
  position: absolute;
  /* left: -15px; */
  top: 10px;
  width: 15px;
  height: 15px;
  background-color: white;
  transform: rotate(45deg);
  box-shadow: -5px 5px 5px rgba(0, 0, 0, 0.03);
}

.timeline-content h3 {
  font-size: var(--font-large);
  margin-bottom: var(--spacing-xs);
  color: var(--primary-color);
}

.timeline-content h4 {
  font-size: var(--font-medium);
  margin-bottom: var(--spacing-xs);
  font-weight: 600;
}

.timeline-date {
  font-size: var(--font-small);
  color: #777;
  margin-bottom: var(--spacing-md);
}

.timeline-content ul {
  padding-left: var(--spacing-lg);
  list-style-type: disc;
}

.timeline-content li {
  margin-bottom: var(--spacing-sm);
  line-height: 1.5;
}

.timeline-content li:last-child {
  margin-bottom: 0;
}

/* Ocean decoration styles */
.ocean-decoration {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 150px; /* Set a specific height */
  overflow: hidden;
  z-index: 1; /* Lower than content */
}

.ocean-decoration svg {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: auto;
}

@media (max-width: 768px) {
  .timeline-item {
    padding-left: 40px;
  }

  .timeline::before {
    left: 15px;
  }

  .timeline-dot {
    left: 8px;
  }

  .timeline-content {
    padding: var(--spacing-md);
  }

  .ocean-decoration {
    height: 80px; /* Smaller height on mobile */
  }
}
</style>