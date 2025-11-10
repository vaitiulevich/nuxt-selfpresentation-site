<script setup lang="ts">
import { onMounted } from 'vue'
const avatarSelibrate = '/images/avatar-selibrate.webp'
const avatarIdea = '/images/avatar-idea.webp'

const personalInfo = [
  { label: 'At company', value: 'More then 1 year', img: avatarSelibrate },
  {
    label: 'Continuous learning',
    value: 'An environment in which I learn a lot of new technologies',
    img: avatarIdea
  }
]

const skills = ['Vue.js', 'Nuxt', 'TypeScript', 'Tailwind', 'SASS/SCSS', 'Zustand']

const theory = [
  { label: 'Docker and Docker Compose', icon: 'devicon:docker' },
  { label: 'Design Patterns', icon: 'pajamas:building' },
  { label: 'GitHub Actions', icon: 'pajamas:archive' },
  { label: 'Testing pyramid', icon: 'heroicons-outline:search-circle' },
  { label: 'GraphQL', icon: 'material-icon-theme:graphql' }
]

const timeline = [
  {
    title: 'Закрепление навыков',
    description:
      'Прошла мини-этап по подготовке, что укрепило текущие знания и умение решать задачи разной сложности'
  },
  {
    title: 'Менеджерские навыки',
    description:
      'Принимала участие в сппорте коллег, планировании спринта, оптимизации рабочих процессов и бизнес решений'
  },
  {
    title: 'Мейнтейнерство',
    description:
      'Поддержка ui-lib, создавала задачи для улучшения, проводила ревью, учавствовала в обсуждениях о внедрении библиотеки на сторонний проект, описывала задачи для сторонней команды и коммуницировла с разработчиками, определяла приоритезацию тасок и версионность библиотеки, получила опыт в релизном-менджменте'
  }
]

const techTimeline = [
  {
    title: 'Реализация модуля отсутвий',
    description: 'Принимала участие в разработке и интеграции нового модуля отсутвий'
  },
  {
    title: 'Расширение модуля Dashboard',
    description: 'Реализация и интегрция новых пользоваетльских виджетов'
  },
  {
    title: 'Опыт работы с Web Speech API',
    description: 'Участвовала в оптимизации компонентов с поддержкой голосового ввода'
  },
  {
    title: 'Работа с кодовой базой проекта',
    description: 'Поддержка и оптимизация сущестывующих решений, рефакторинг кода'
  }
]

const stats = [
  { number: '1', label: 'Years of Modsen Experience' },
  { number: '100', label: 'MMS Commites' },
  { number: '3', label: 'Technologies' }
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

<template>
  <div class="about-page">
    <section class="about-hero">
      <div class="container">
        <h1 class="about-title animate-fade-up" style="--delay: 0.1s">Performance Review</h1>
        <p class="about-subtitle animate-fade-up" style="--delay: 0.3s">
          Get to know more about my learned technologies and practices
        </p>
      </div>
    </section>

    <section class="about-content">
      <div class="container">
        <div class="about-grid">
          <div class="about-main">
            <div class="content-block animate-fade-up" style="--delay: 0.5s">
              <h2>About Me</h2>
              <p>
                Hello! I'm Katya, a frontend developer with a love for creating beautiful,
                functional, and user-friendly web experiences.
              </p>
            </div>

            <div class="content-block animate-fade-up" style="--delay: 0.7s">
              <h3>What Is Described Here</h3>
              <p>This page is intended to describe my recent experience.</p>
            </div>

            <div class="personal-info content-block animate-fade-up" style="--delay: 0.9s">
              <h3>My Modsen Experience</h3>
              <div class="info-grid">
                <div
                  v-for="(info, index) in personalInfo"
                  :key="info.label"
                  class="info-item animate-scale"
                  :style="`--delay: ${0.9 + index * 0.1}s`"
                >
                  <div class="info-icon">
                    <img :src="info.img" :alt="info.label" class="info-image" loading="eager" />
                  </div>
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
              <h3>New Technologies</h3>
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
              <h3>New Theory</h3>
              <div v-for="(interest, index) in theory" :key="interest.label" class="interests-list">
                <div class="theory-icon-wrapper">
                  <Icon :name="interest.icon" size="20" class="theory-icon" />
                </div>
                <span
                  class="interest-item animate-fade-in"
                  :style="`--delay: ${0.8 + index * 0.1}s`"
                >
                  {{ interest.label }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="timeline-section">
      <div class="container">
        <h2 class="section-title animate-fade-up" style="--delay: 0.4s">Технические Достижения</h2>
        <div class="timeline">
          <div
            v-for="(item, index) in techTimeline"
            :key="index"
            class="timeline-item animate-slide-right"
            :style="`--delay: ${0.5 + index * 0.15}s`"
          >
            <div class="timeline-marker" />
            <div class="timeline-content">
              <h3>{{ item.title }}</h3>
              <p>{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="timeline-section">
      <div class="container">
        <h2 class="section-title animate-fade-up" style="--delay: 0.4s">Личные Достижения</h2>
        <div class="timeline">
          <div
            v-for="(item, index) in timeline"
            :key="index"
            class="timeline-item animate-slide-right"
            :style="`--delay: ${0.5 + index * 0.15}s`"
          >
            <div class="timeline-marker" />
            <div class="timeline-content">
              <h3>{{ item.title }}</h3>
              <p>{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="stats-section">
      <DevPlans />
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
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-secondary);
  border-radius: 50%;
  color: var(--bg-secondary);
}

.info-image {
  height: 100%;
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
  gap: 0.75rem;
  align-items: center;
}

.interest-item {
  color: var(--text-secondary);
  font-size: 0.95rem;
  padding: 0.5rem 0;
}

.theory-icon-wrapper {
  background-color: rgba(151, 151, 151, 0.307);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  width: 30px;
  min-height: 30px;
  min-width: 30px;
  border-radius: 50%;
}

.theory-icon {
  color: var(--accent-color);
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
  left: 22.5px;
  top: -1px;
  width: 17px;
  height: 17px;
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
    grid-template-columns: 1fr;
  }
}
</style>
