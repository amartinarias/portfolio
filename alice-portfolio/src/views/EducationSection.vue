// EducationSection.vue
<template>
  <section id="education" class="section section-light">
    <div class="container">
      <h2 class="section-title">Education</h2>

      <div class="education-grid">
        <!-- The Open University -->
        <div class="education-card">
          <div class="education-header">
            <div class="education-icon">
              <div class="cap-icon"></div>
            </div>
            <div class="education-title">
              <h3>Certificate of Higher Education in Computing and IT</h3>
              <h4>The Open University, Wales</h4>
              <p class="education-date">2020 - 2024</p>
            </div>
          </div>
          <div class="education-details">
            <div class="module">
              <span class="module-name"
                >Introduction to Computing and IT 1 (TM111)</span
              >
              <span class="grade highlight">Distinction</span>
            </div>
            <div class="module">
              <span class="module-name"
                >Introduction to Computing and IT 2 (TM112)</span
              >
              <span class="grade highlight">Distinction</span>
            </div>
            <div class="module">
              <span class="module-name">Technologies in Practice (TM129)</span>
              <span class="grade highlight">Distinction</span>
            </div>
            <div class="module">
              <span class="module-name">Discovering Mathematics (MU123)</span>
              <span class="grade highlight">Distinction</span>
            </div>
          </div>
        </div>

        <!-- Software Engineering Nanodegree -->
        <div class="education-card">
          <div class="education-header">
            <div class="education-icon">
              <div class="code-icon"></div>
            </div>
            <div class="education-title">
              <h3>Software Engineering Nanodegree</h3>
              <h4>Code First Girls</h4>
              <p class="education-date">May 2022 - Aug 2022</p>
            </div>
          </div>
          <div class="education-details">
            <p>14-week bootcamp in Software Engineering focusing on:</p>
            <ul>
              <li>Strong programming skills in Python and SQL</li>
              <li>Object-Oriented Programming principles</li>
              <li>In-depth knowledge of SQL and database management</li>
              <li>Building full-stack web applications</li>
              <li>Implementing OAuth tokens and Flask endpoints</li>
            </ul>
          </div>
        </div>

        <!-- Software Development Bootcamp -->
        <div class="education-card">
          <div class="education-header">
            <div class="education-icon">
              <div class="laptop-icon"></div>
            </div>
            <div class="education-title">
              <h3>Software Development Bootcamp</h3>
              <h4>TechUP, Durham University</h4>
              <p class="education-date">Oct 2021 - Feb 2022</p>
            </div>
          </div>
          <div class="education-details">
            <p>16-week intensive bootcamp covering:</p>
            <ul>
              <li>Python programming fundamentals</li>
              <li>Object-Oriented Programming concepts</li>
              <li>Version control with Git and GitHub</li>
              <li>Software development lifecycle</li>
              <li>Agile methodologies and team collaboration</li>
              <li>
                Building a group e-commerce project with Python and Shopify
                Liquid
              </li>
            </ul>
          </div>
        </div>

        <!-- University Degree -->
        <div class="education-card">
          <div class="education-header">
            <div class="education-icon">
              <div class="university-icon"></div>
            </div>
            <div class="education-title">
              <h3>B.A. English Studies, 2:1</h3>
              <h4>University of Salamanca, Spain</h4>
              <p class="education-date">2012 - 2016</p>
            </div>
          </div>
          <div class="education-details">
            <p>Including an Erasmus exchange year at:</p>
            <div class="exchange">
              <h4>Leipzig University, Germany</h4>
            </div>
            <p>This international education has enhanced my:</p>
            <ul>
              <li>Cross-cultural communication skills</li>
              <li>Adaptability to diverse environments</li>
              <li>Language proficiency (Fluent in English and Spanish)</li>
              <li>Problem-solving across different contexts</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- Ocean wave decoration at bottom -->
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
// No additional logic needed
</script>

<style scoped>
.section {
  padding: var(--spacing-3xl) 0;
  position: relative;
  overflow: hidden;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
  position: relative;
  z-index: 2;
}

.section-title {
  font-size: var(--font-2xl);
  margin-bottom: var(--spacing-2xl);
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

.education-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  gap: var(--spacing-xl);
}

.education-card {
  background-color: white;
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all var(--transition-normal);
  border-top: 4px solid var(--primary-color);
}

.education-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.education-header {
  display: flex;
  align-items: flex-start;
  padding: var(--spacing-lg);
  gap: var(--spacing-md);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.education-icon {
  width: 50px;
  height: 50px;
  background-color: var(--light-blue);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
}

/* Education icons using CSS */
.cap-icon,
.code-icon,
.laptop-icon,
.university-icon {
  position: relative;
  width: 28px;
  height: 28px;
}

.cap-icon::before {
  content: "🎓";
  font-size: 24px;
}

.code-icon::before {
  content: "💻";
  font-size: 24px;
}

.laptop-icon::before {
  content: "🖥️";
  font-size: 24px;
}

.university-icon::before {
  content: "🏛️";
  font-size: 24px;
}

.education-title {
  flex: 1;
}

.education-title h3 {
  font-size: var(--font-large);
  margin-bottom: var(--spacing-xs);
  color: var(--primary-color);
}

.education-title h4 {
  font-size: var(--font-medium);
  margin-bottom: var(--spacing-xs);
  font-weight: 500;
}

.education-date {
  font-size: var(--font-small);
  color: #777;
}

.education-details {
  padding: var(--spacing-lg);
}

.education-details p {
  margin-bottom: var(--spacing-md);
}

.education-details ul {
  padding-left: var(--spacing-md);
  margin-bottom: var(--spacing-md);
}

.education-details li {
  margin-bottom: var(--spacing-xs);
  position: relative;
}

.education-details li::before {
  content: "🌊"; /* Ocean-themed bullet point */
  position: absolute;
  left: -25px;
  font-size: 14px;
}

.module {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-sm) 0;
  border-bottom: 1px dashed rgba(0, 0, 0, 0.1);
}

.module:last-child {
  border-bottom: none;
}

.module-name {
  font-weight: 500;
}

.grade {
  font-size: var(--font-small);
  padding: 2px 8px;
  border-radius: var(--border-radius-sm);
  background-color: #e8f0fe;
  color: var(--primary-color);
}

.grade.highlight {
  background-color: var(--primary-color);
  color: white;
}

.exchange {
  background-color: #f5f5f5;
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--border-radius-sm);
  margin-bottom: var(--spacing-md);
}

.exchange h4 {
  margin: 0;
  font-size: var(--font-medium);
  font-weight: 500;
}

/* Ocean decoration */
.ocean-decoration {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  z-index: 1;
}

.ocean-decoration svg {
  display: block;
  width: 100%;
}

/* Responsive styles */
@media (max-width: 768px) {
  .education-grid {
    grid-template-columns: 1fr;
  }

  .education-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .education-icon {
    margin-bottom: var(--spacing-sm);
  }
}
</style>