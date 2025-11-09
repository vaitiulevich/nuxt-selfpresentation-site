<template>
  <div class="about-page">
    <section class="about-hero">
      <div class="container">
        <h1 class="about-title animate-fade-up" style="--delay: 0.1s">About Me</h1>
        <p class="about-subtitle animate-fade-up" style="--delay: 0.3s">
          Get to know more about my journey, skills, and passion
        </p>
      </div>
    </section>

    <section class="about-content">
      <div class="container">
        <div class="about-grid">
          <div class="about-main">
            <div class="content-block animate-fade-up" style="--delay: 0.5s">
              <h2>My Story</h2>
              <p>
                Hello! I'm Katya, a passionate frontend developer with a love for creating
                beautiful, functional, and user-friendly web experiences. My journey in web
                development started with curiosity and has evolved into a true passion for crafting
                digital solutions.
              </p>
            </div>

            <div class="content-block animate-fade-up" style="--delay: 0.7s">
              <h3>What I Do</h3>
              <p>
                I specialize in modern frontend technologies like Vue.js, Nuxt, and TypeScript. I
                enjoy turning complex problems into simple, beautiful designs that provide
                exceptional user experiences.
              </p>
            </div>

            <div class="personal-info content-block animate-fade-up" style="--delay: 0.9s">
              <h3>Personal Info</h3>
              <div class="info-grid">
                <div
                  v-for="(info, index) in personalInfo"
                  :key="info.label"
                  class="info-item animate-scale"
                  :style="`--delay: ${0.9 + index * 0.1}s`"
                >
                  <div class="info-icon">{{ info.icon }}</div>
                  <div class="info-content">
                    <div class="info-label">{{ info.label }}</div>
                    <div class="info-value">{{ info.value }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="about-sidebar">
            <div class="skills-card animate-slide-left" style="--delay: 0.6s">
              <h3>Technologies</h3>
              <div class="skills-list">
                <span
                  v-for="(skill, index) in skills"
                  :key="skill"
                  class="skill-tag animate-bounce-in"
                  :style="`--delay: ${0.6 + index * 0.05}s`"
                >
                  {{ skill }}
                </span>
              </div>
            </div>

            <div class="interests-card animate-slide-left" style="--delay: 0.8s">
              <h3>Interests</h3>
              <div class="interests-list">
                <span
                  v-for="(interest, index) in interests"
                  :key="interest"
                  class="interest-item animate-fade-in"
                  :style="`--delay: ${0.8 + index * 0.1}s`"
                >
                  {{ interest }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="timeline-section">
      <div class="container">
        <h2 class="section-title animate-fade-up" style="--delay: 0.4s">My Journey</h2>
        <div class="timeline">
          <div
            v-for="(item, index) in timeline"
            :key="item.year"
            class="timeline-item animate-slide-right"
            :style="`--delay: ${0.5 + index * 0.15}s`"
          >
            <div class="timeline-marker" />
            <div class="timeline-content">
              <h3>{{ item.year }}</h3>
              <h4>{{ item.title }}</h4>
              <p>{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="stats-section">
      <div class="container">
        <h2 class="section-title animate-fade-up" style="--delay: 0.3s">By the Numbers</h2>
        <div class="stats-grid">
          <div
            v-for="stat in stats"
            :key="stat.label"
            class="stat-card animate-count"
            :style="`--delay: ${0.4 + parseInt(stat.number) * 0.1}s`"
          >
            <div class="stat-number" :data-count="stat.number">0+</div>
            <div class="stat-label">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

const personalInfo = [
  { label: 'Name', value: 'Katya', icon: '👩‍💻' },
  { label: 'Location', value: 'Your City', icon: '📍' },
  { label: 'Email', value: 'hello@example.com', icon: '✉️' },
  { label: 'Status', value: 'Available for projects', icon: '🚀' }
]

const skills = [
  'Vue.js',
  'Nuxt',
  'TypeScript',
  'JavaScript',
  'HTML/CSS',
  'SASS/SCSS',
  'Responsive Design',
  'Git'
]

const interests = [
  '🎨 UI/UX Design',
  '🚀 New Technologies',
  '📚 Continuous Learning',
  '🎵 Music & Creativity',
  '✈️ Travel & Exploration'
]

const timeline = [
  {
    year: '2020',
    title: 'Started Coding Journey',
    description: 'Began learning web development fundamentals and fell in love with coding'
  },
  {
    year: '2021',
    title: 'First Projects',
    description: 'Built first websites and applications, exploring different technologies'
  },
  {
    year: '2022',
    title: 'Vue.js Specialist',
    description: 'Focused on Vue.js ecosystem and modern frontend development patterns'
  },
  {
    year: '2023',
    title: 'Professional Experience',
    description: 'Started working on commercial projects and collaborating with teams'
  },
  {
    year: '2024',
    title: 'Current Focus',
    description: 'Mastering Nuxt, TypeScript and building scalable applications'
  }
]

const stats = [
  { number: '2', label: 'Years Experience' },
  { number: '50', label: 'Projects Completed' },
  { number: '10', label: 'Technologies' },
  { number: '25', label: 'Happy Clients' }
]

onMounted(() => {
  const animateCounters = () => {
    const counters = document.querySelectorAll('.stat-number')

    counters.forEach((counter) => {
      const target = parseInt(counter.getAttribute('data-count') || '0')
      const duration = 2000
      const step = target / (duration / 16)
      let current = 0

      const updateCounter = () => {
        current += step
        if (current < target) {
          counter.textContent = Math.ceil(current) + '+'
          requestAnimationFrame(updateCounter)
        } else {
          counter.textContent = target + '+'
        }
      }

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            updateCounter()
            observer.unobserve(entry.target)
          }
        })
      })

      observer.observe(counter)
    })
  }

  setTimeout(animateCounters, 1000)
})
</script>

<style scoped>
.about-page {
  min-height: 100vh;
  background: var(--bg-primary);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Hero Section */
.about-hero {
  background: linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-primary) 100%);
  padding: 6rem 0 4rem;
  text-align: center;
}

.about-title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  background: linear-gradient(135deg, var(--text-primary) 0%, var(--accent-color) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
}

.about-subtitle {
  font-size: 1.25rem;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto;
}

/* Main Content */
.about-content {
  padding: 4rem 0;
}

.about-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 4rem;
  align-items: start;
}

.content-block {
  margin-bottom: 3rem;
}

.about-main h2 {
  font-size: 2rem;
  color: var(--text-primary);
  margin-bottom: 1.5rem;
}

.about-main h3 {
  font-size: 1.5rem;
  color: var(--text-primary);
  margin-bottom: 1rem;
}

.about-main p {
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--text-secondary);
}

.personal-info {
  background: var(--bg-secondary);
  padding: 2rem;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
}

.info-grid {
  display: grid;
  gap: 1rem;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: var(--bg-primary);
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
}

.info-icon {
  font-size: 1.5rem;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--accent-color);
  border-radius: 50%;
  color: var(--bg-secondary);
}

.info-content {
  flex: 1;
}

.info-label {
  font-weight: 600;
  color: var(--text-primary);
  font-size: 0.9rem;
  margin-bottom: 0.25rem;
}

.info-value {
  color: var(--text-secondary);
  font-size: 1rem;
}

/* Sidebar Cards */
.about-sidebar {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.skills-card,
.interests-card {
  background: var(--bg-secondary);
  padding: 2rem;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
}

.skills-card h3,
.interests-card h3 {
  color: var(--text-primary);
  margin-bottom: 1.5rem;
  font-size: 1.25rem;
}

.skills-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.skill-tag {
  background: var(--accent-color);
  color: var(--bg-primary);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 500;
}

.interests-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.interest-item {
  color: var(--text-secondary);
  font-size: 0.95rem;
  padding: 0.5rem 0;
}

/* Timeline Section */
.timeline-section {
  padding: 4rem 0;
  background: var(--bg-secondary);
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  color: var(--text-primary);
  margin-bottom: 3rem;
  font-weight: 700;
}

.timeline {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 30px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: var(--accent-color);
}

.timeline-item {
  position: relative;
  margin-bottom: 3rem;
  padding-left: 80px;
}

.timeline-marker {
  position: absolute;
  left: 22px;
  top: 0;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--accent-color);
  border: 4px solid var(--bg-secondary);
}

.timeline-content {
  background: var(--bg-primary);
  padding: 2rem;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
}

.timeline-content h3 {
  color: var(--accent-color);
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  font-weight: 700;
}

.timeline-content h4 {
  color: var(--text-primary);
  font-size: 1.25rem;
  margin-bottom: 1rem;
  font-weight: 600;
}

.timeline-content p {
  color: var(--text-secondary);
  line-height: 1.6;
}

/* Stats Section */
.stats-section {
  padding: 4rem 0;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  max-width: 800px;
  margin: 0 auto;
}

.stat-card {
  text-align: center;
  padding: 2rem;
  background: var(--bg-secondary);
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--accent-color);
  margin-bottom: 0.5rem;
}

.stat-label {
  color: var(--text-secondary);
  font-size: 1rem;
  font-weight: 500;
}

/* ===== АНИМАЦИИ ===== */

/* Fade Up Animation */
.animate-fade-up {
  opacity: 0;
  transform: translateY(30px);
  animation: fadeUp 0.8s ease forwards;
  animation-delay: var(--delay, 0s);
}

@keyframes fadeUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Fade In Animation */
.animate-fade-in {
  opacity: 0;
  animation: fadeIn 0.6s ease forwards;
  animation-delay: var(--delay, 0s);
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}

/* Slide Left Animation */
.animate-slide-left {
  opacity: 0;
  transform: translateX(50px);
  animation: slideLeft 0.8s ease forwards;
  animation-delay: var(--delay, 0s);
}

@keyframes slideLeft {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Slide Right Animation */
.animate-slide-right {
  opacity: 0;
  transform: translateX(-50px);
  animation: slideRight 0.8s ease forwards;
  animation-delay: var(--delay, 0s);
}

@keyframes slideRight {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Bounce In Animation */
.animate-bounce-in {
  opacity: 0;
  transform: scale(0.8);
  animation: bounceIn 0.6s ease forwards;
  animation-delay: var(--delay, 0s);
}

@keyframes bounceIn {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  50% {
    opacity: 1;
    transform: scale(1.1);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

/* Scale Animation */
.animate-scale {
  opacity: 0;
  transform: scale(0.9);
  animation: scaleIn 0.6s ease forwards;
  animation-delay: var(--delay, 0s);
}

@keyframes scaleIn {
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* Count Animation */
.animate-count {
  animation: countPulse 0.6s ease forwards;
  animation-delay: var(--delay, 0s);
}

@keyframes countPulse {
  0% {
    transform: scale(0.8);
    opacity: 0;
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

/* Responsive */
@media (max-width: 768px) {
  .about-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .container {
    padding: 0 1rem;
  }

  .about-hero {
    padding: 4rem 0 2rem;
  }

  .about-content {
    padding: 2rem 0;
  }

  .timeline::before {
    left: 20px;
  }

  .timeline-item {
    padding-left: 60px;
  }

  .timeline-marker {
    left: 12px;
  }

  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
