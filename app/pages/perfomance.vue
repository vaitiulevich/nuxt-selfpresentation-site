<template>
  <div class="about-page">
    <section class="about-hero">
      <div class="container">
        <h1 class="about-title">My Journey</h1>
        <p class="about-subtitle">From beginnings to current achievements</p>
      </div>
    </section>

    <section class="timeline-section">
      <div class="container">
        <div class="timeline">
          <div v-for="(item, index) in timeline" :key="index" class="timeline-item">
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
        <div class="stats-grid">
          <div v-for="stat in stats" :key="stat.label" class="stat-card">
            <div class="stat-number">{{ stat.number }}+</div>
            <div class="stat-label">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const timeline = [
  {
    year: '2020',
    title: 'Started Coding Journey',
    description: 'Began learning web development fundamentals'
  },
  {
    year: '2021',
    title: 'First Projects',
    description: 'Built first websites and applications'
  },
  {
    year: '2022',
    title: 'Vue.js Specialist',
    description: 'Focused on Vue.js ecosystem and modern frontend'
  },
  {
    year: '2023',
    title: 'Professional Experience',
    description: 'Started working on commercial projects'
  },
  {
    year: '2024',
    title: 'Current Focus',
    description: 'Mastering Nuxt, TypeScript and advanced patterns'
  }
]

const stats = [
  { number: '2', label: 'Years Experience' },
  { number: '50', label: 'Projects Completed' },
  { number: '10', label: 'Technologies' },
  { number: '100', label: 'Coffees Drank' }
]
</script>

<style scoped>
.timeline-section {
  padding: 4rem 0;
  background: var(--bg-secondary);
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
}

.timeline-content h4 {
  color: var(--text-primary);
  font-size: 1.25rem;
  margin-bottom: 1rem;
}

.timeline-content p {
  color: var(--text-secondary);
  line-height: 1.6;
}

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
}

@media (max-width: 768px) {
  .timeline::before {
    left: 20px;
  }

  .timeline-item {
    padding-left: 60px;
  }

  .timeline-marker {
    left: 12px;
  }
}
</style>
