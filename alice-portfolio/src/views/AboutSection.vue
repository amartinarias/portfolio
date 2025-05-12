// AboutSection.vue
<template>
  <section id="about" class="section section-light">
    <div class="container">
      <h2 class="section-title">About Me</h2>
      <div class="about-content">
        <div class="about-text">
          <p>
            I'm a Software Developer with strong knowledge in application
            development and a commitment to delivering high-quality software. I
            work collaboratively with team members and clients to achieve
            desired results.
          </p>
          <p>
            With expertise in VueJS, JavaScript, and a range of frontend and
            backend technologies, I develop applications that are both
            functional and user-friendly. I've completed the CFG Software
            Engineering Nanodegree and am constantly enhancing my abilities in
            problem-solving, software development, and testing.
          </p>
          <p>
            When I'm not coding, you'll find me catching waves at the beach or
            exploring nature trails. My passion for the outdoors influences my
            design aesthetics, bringing organic flows and natural color palettes
            into my work.
          </p>
          <p>
            Fluent in English and Spanish, I enjoy connecting with diverse
            communities and bringing different perspectives to my projects.
          </p>
        </div>
        <div class="about-image">
          <div class="image-container">
            <img
              src="@/assets/images/profile-photo.jpg"
              alt="Profile Picture"
              class="profile-image"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-content {
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: var(--spacing-2xl);
  align-items: center;
}

.about-text p {
  margin-bottom: var(--spacing-md);
  font-size: var(--font-medium);
  line-height: 1.7;
}

.about-text p:last-child {
  margin-bottom: 0;
}

.about-image {
  display: flex;
  justify-content: center;
}

.image-container {
  width: 100%;
  max-width: 320px;
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  position: relative;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.profile-placeholder {
  width: 100%;
  padding-top: 100%; /* 1:1 Aspect ratio */
  background: var(--gradient-bg);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 5rem;
  font-weight: bold;
  color: white;
}

.profile-placeholder::after {
  content: "AM";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

/* Ocean-themed decorative element */
.about-text p:first-of-type::first-letter {
  color: var(--primary-color);
  font-size: 3em;
  float: left;
  margin-right: 10px;
  line-height: 0.8;
}

@media (max-width: 768px) {
  .about-content {
    grid-template-columns: 1fr;
    gap: var(--spacing-xl);
  }

  .about-image {
    order: -1; /* Show image first on mobile */
    margin-bottom: var(--spacing-md);
  }

  .image-container {
    max-width: 240px;
  }
}
</style>