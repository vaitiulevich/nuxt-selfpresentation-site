<script setup lang="ts">
import { ref } from 'vue'
import { navigateTo } from 'nuxt/app'

const handleDowloadCV = () => {
  const link = document.createElement('a')
  link.href = '/files/cv.pdf'
  link.download = 'CV.pdf'
  link.target = '_blank'
  link.rel = 'noopener noreferrer'

  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

const navigateToAbout = () => {
  navigateTo('/about')
}

const isHovered = ref(false)

const defaultImage = '/images/avatar-laptop.webp'
const hoverImage = '/images/avatar-hi.webp'
</script>

<template>
  <div class="hero">
    <div class="hero-content">
      <div class="text-content">
        <h1 class="title">
          <span class="title-name">Hi! I'm</span>
          <span class="title-name">Katya )</span>
        </h1>

        <h2 class="subtitle">
          <span class="subtitle-line">Welcome to my</span>
          <span class="subtitle-highlight">self-presentation website</span>
        </h2>

        <div class="cta-buttons">
          <button class="btn btn-primary" @click="navigateToAbout">Discover More</button>
          <button class="btn btn-secondary" @click="handleDowloadCV">Download CV</button>
        </div>
      </div>

      <div class="image-container" @mouseenter="isHovered = true" @mouseleave="isHovered = false">
        <img
          :src="isHovered ? hoverImage : defaultImage"
          alt="Katya"
          class="avatar-image"
          loading="eager"
        />
        <div class="image-glow" />
      </div>
    </div>

    <NuxtLink to="/about" class="scroll-indicator">
      <div class="scroll-arrow" />
    </NuxtLink>
  </div>
</template>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background: linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%);
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, var(--accent-color) 0%, transparent 70%);
  opacity: 0.03;
  animation: float 20s ease-in-out infinite;
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  max-width: 1200px;
  width: 100%;
  z-index: 2;
  position: relative;
}

.text-content {
  animation: slideInLeft 1s ease-out;
}

.title {
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, var(--text-primary) 0%, var(--accent-color) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.title-name {
  display: block;
  background: linear-gradient(135deg, var(--accent-color) 0%, #ff6b6b 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: fadeInUp 0.8s ease-out 0.4s both;
}

.subtitle {
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  font-weight: 300;
  line-height: 1.4;
  margin-bottom: 2.5rem;
  color: var(--text-secondary);
  animation: fadeInUp 0.8s ease-out 0.6s both;
}

.subtitle-line {
  display: block;
}

.subtitle-highlight {
  color: var(--accent-color);
  font-weight: 600;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  animation: fadeInUp 0.8s ease-out 0.8s both;
}

.image-container {
  position: relative;
  animation: slideInRight 1s ease-out;
}

.avatar-image {
  width: 100%;
  max-width: 500px;
  height: auto;
  border-radius: 20px;
  box-shadow:
    0 20px 40px rgba(0, 0, 0, 0.1),
    0 0 0 1px rgba(255, 255, 255, 0.1);
  position: relative;
  z-index: 2;
  transition: transform 0.3s ease;
}

.avatar-image:hover {
  transform: scale(1.02);
}

.image-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 110%;
  height: 110%;
  background: linear-gradient(135deg, var(--accent-color) 0%, transparent 50%);
  border-radius: 25px;
  filter: blur(20px);
  opacity: 0.3;
  z-index: 1;
  animation: pulse 4s ease-in-out infinite;
}

.scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  animation: fadeIn 1s ease-out 1.5s both;
}

.scroll-arrow {
  width: 30px;
  height: 30px;
  border-right: 2px solid var(--text-secondary);
  border-bottom: 2px solid var(--text-secondary);
  transform: rotate(45deg);
  animation: bounce 2s infinite;
}

/* Анимации */
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

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes float {
  0%,
  100% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(-20px, -20px);
  }
}

@keyframes pulse {
  0%,
  100% {
    opacity: 0.3;
  }
  50% {
    opacity: 0.5;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Адаптивность */
@media (max-width: 768px) {
  .hero-content {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }

  .text-content {
    order: 2;
  }

  .image-container {
    order: 1;
  }

  .cta-buttons {
    justify-content: center;
  }

  .btn {
    padding: 0.875rem 1.5rem;
    font-size: 1rem;
  }
}
</style>
