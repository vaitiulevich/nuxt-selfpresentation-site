<script setup lang="ts">
const roadmap = [
  {
    icon: 'material-icon-theme:next',
    name: 'Nuxt & Vue',
    description: 'Advanced patterns and performance'
  },
  {
    icon: 'material-icon-theme:folder-element-open',
    name: 'Jotai & Recoil',
    description: 'Description'
  },
  {
    icon: 'material-icon-theme:gulp',
    name: 'Gulp',
    description: 'Description'
  }
]
</script>

<template>
  <section class="roadmap-section">
    <div class="container">
      <h2 class="section-title">План Развития</h2>

      <div>
        <div class="roadmap-track">
          <div
            v-for="(item, index) in roadmap"
            :key="index"
            class="roadmap-item"
            :style="{ '--delay': index * 0.2 + 's' }"
          >
            <div class="roadmap-marker">
              <div class="roadmap-icon">
                <Icon :name="item.icon" size="40" class="theory-icon" />
              </div>
              <div class="roadmap-dot"></div>
            </div>
            <div class="roadmap-content">
              <h3 class="roadmap-name">{{ item.name }}</h3>
              <p class="roadmap-description">{{ item.description }}</p>
            </div>
          </div>
        </div>

        <div class="roadmap-line">
          <div class="roadmap-progress"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.roadmap-section {
  background: var(--bg-primary);
  min-height: 60vh;
  display: flex;
  align-items: center;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
  font-weight: 700;
  opacity: 0;
  margin-bottom: 50px;
  animation: fadeInUp 0.8s ease forwards;
}

.roadmap-track {
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 2;
}

.roadmap-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  position: relative;
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 0.6s ease var(--delay) forwards;
}

.roadmap-marker {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1.5rem;
  position: relative;
}

.roadmap-icon {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: var(--bg-secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  box-shadow: 0 4px 20px var(--accent-color-shadow);
  margin-bottom: 1rem;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  z-index: 3;
}

.roadmap-item:hover .roadmap-icon {
  transform: scale(1.15) rotate(8deg);
  box-shadow: 0 8px 30px var(--accent-color-shadow);
}

.roadmap-dot {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--accent-color);
  border: 3px solid var(--border-color);
  box-shadow: 0 2px 10px var(--accent-color-shadow);
  z-index: 3;
  transition: all 0.3s ease;
}

.roadmap-item:hover .roadmap-dot {
  transform: scale(1.3);
  background: var(--accent-color);
  box-shadow: 0 2px 15px var(--accent-color-shadow);
}

.roadmap-content {
  background: var(--bg-secondary);
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px var(--bg-secondary);
  text-align: center;
  max-width: 250px;
  width: 100%;
  transition: all 0.3s ease;
  position: relative;
}

.roadmap-content::before {
  content: '';
  position: absolute;
  top: -8px;
  left: 50%;
  transform: translateX(-50%) rotate(45deg);
  width: 16px;
  height: 16px;
  background: var(--bg-secondary);
  border-radius: 2px;
}

.roadmap-item:hover .roadmap-content {
  transform: translateY(-5px);
}

.roadmap-name {
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
  font-weight: 600;
}

.roadmap-description {
  color: var(--text-secondary);
  line-height: 1.5;
  margin: 0;
  font-size: 0.95rem;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .roadmap-track {
    flex-direction: column;
    gap: 3rem;
  }

  .roadmap-item {
    flex-direction: row;
    align-items: flex-start;
    text-align: left;
    gap: 1.5rem;
  }

  .roadmap-marker {
    margin-bottom: 0;
    flex-shrink: 0;
  }

  .roadmap-content {
    max-width: none;
    text-align: left;
  }

  .roadmap-content::before {
    top: 50%;
    left: -8px;
    transform: translateY(-50%) rotate(45deg);
  }

  .roadmap-line {
    display: none;
  }

  .section-title {
    font-size: 2rem;
  }

  .roadmap-icon {
    width: 60px;
    height: 60px;
    font-size: 1.5rem;
  }
}

@media (max-width: 480px) {
  .roadmap-section {
    padding: 3rem 1rem;
  }

  .roadmap-item {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1rem;
  }

  .roadmap-content::before {
    top: -8px;
    left: 50%;
    transform: translateX(-50%) rotate(45deg);
  }

  .roadmap-content {
    text-align: center;
  }
}
</style>
