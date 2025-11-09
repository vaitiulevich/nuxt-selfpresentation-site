<script setup lang="ts">
import { useRoute } from 'vue-router'

const nav = [
  {
    label: 'Home',
    to: '/',
    icon: 'ph:house-line-light'
  },
  {
    label: 'About',
    to: '/about',
    icon: 'ph:person-arms-spread-duotone'
  },
  {
    label: 'Perfomance',
    to: '/perfomance',
    icon: 'ph:clipboard-text-light'
  }
]

const route = useRoute()

const isActive = (path: string) => {
  return route.path === path
}
</script>

<template>
  <header class="header">
    <nav>
      <ul class="nav-list">
        <li v-for="item in nav" :key="item.to">
          <NuxtLink
            :to="item.to"
            class="nav-link"
            :class="{ 'nav-link--active': isActive(item.to) }"
          >
            <Icon :name="item.icon" size="25" class="nav-icon" />
          </NuxtLink>
        </li>
      </ul>
    </nav>

    <ThemeToggle />
  </header>
</template>

<style scoped>
.header {
  height: 100vh;
  max-height: 100vh;
  background-color: var(--bg-secondary);
  border-right: 1.5px solid var(--border-color);
  padding: 20px 10px;
  width: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
}
.nav-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
}
.nav-icon {
  color: var(--primary-color);
}
.nav-link--active {
  color: var(--accent-color);
}
</style>
