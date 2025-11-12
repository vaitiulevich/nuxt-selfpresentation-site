<script setup lang="ts">
interface TimelineItem {
  title: string
  subtitle?: string
  description: string
  tags?: string[]
}

interface Props {
  title: string
  items: TimelineItem[]
  customClass?: string
}

const props = withDefaults(defineProps<Props>(), {
  customClass: ''
})

const getItemKey = (item: TimelineItem, index: number) => {
  return `${item.title}-${index}`
}
</script>

<template>
  <section class="timeline-section" :class="customClass">
    <div class="container">
      <h2 class="section-title animate-fade-up" :style="`--delay: ${0.4}s`">
        {{ props.title }}
      </h2>
      <div class="timeline">
        <div
          v-for="(item, index) in props.items"
          :key="getItemKey(item, index)"
          class="timeline-item animate-slide-right"
          :style="`--delay: ${0.5 + index * 0.15}s`"
        >
          <div class="timeline-marker" />
          <div class="timeline-content">
            <h3>{{ item.title }}</h3>
            <h4 v-if="item.subtitle">{{ item.subtitle }}</h4>
            <p>{{ item.description }}</p>
            <div v-if="item.tags" class="timeline-tags">
              <span v-for="tag in item.tags" :key="tag" class="timeline-tag">
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.timeline-section {
  padding: 4rem 0;
  background: var(--bg-secondary);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
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
  z-index: 2;
}

.timeline-content {
  background: var(--bg-primary);
  padding: 2rem;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.timeline-content:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
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
  margin-bottom: 1rem;
}

.timeline-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
}

.timeline-tag {
  background: var(--accent-color);
  color: var(--bg-primary);
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 500;
}

/* Анимации */
.animate-fade-up {
  opacity: 0;
  transform: translateY(30px);
  animation: fadeUp 0.8s ease forwards;
  animation-delay: var(--delay, 0s);
}

.animate-slide-right {
  opacity: 0;
  transform: translateX(-50px);
  animation: slideRight 0.8s ease forwards;
  animation-delay: var(--delay, 0s);
}

@keyframes fadeUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideRight {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Адаптивность */
@media (max-width: 768px) {
  .timeline-section {
    padding: 2rem 0;
  }

  .container {
    padding: 0 1rem;
  }

  .section-title {
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  .timeline::before {
    left: 20px;
  }

  .timeline-item {
    padding-left: 60px;
    margin-bottom: 2rem;
  }

  .timeline-marker {
    left: 12px;
  }

  .timeline-content {
    padding: 1.5rem;
  }

  .timeline-content h3 {
    font-size: 1.25rem;
  }

  .timeline-content h4 {
    font-size: 1.1rem;
  }
}
</style>
