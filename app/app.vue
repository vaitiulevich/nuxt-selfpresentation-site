<script setup lang="ts">
import { useTheme } from './composables/useTheme'

const { theme, toggleTheme, setTheme, isDark, isLight, isReady } = useTheme()
// const router = useRouter()

// const nav = [
//   { label: 'Home', to: '/' },
//   { label: 'About', to: '/about' }
// ]
</script>

<template>
  <div>
    <!-- <header>
      <nav>
        <ul>
          <li><NuxtLink to="/about">About</NuxtLink></li>
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/posts/2">Post 2</NuxtLink></li>
        </ul>
      </nav>
    </header> -->
    <NuxtLayout>
      <NuxtLoadingIndicator />
      <NuxtPage />
    </NuxtLayout>
    <div class="app">
      <header class="header">
        <h1>My App</h1>
        <ThemeToggle />

        <div class="theme-controls" v-if="isReady">
          <button @click="setTheme('light')" :disabled="isLight">Light</button>
          <button @click="setTheme('dark')" :disabled="isDark">Dark</button>
          <span>Current: {{ theme }}</span>
        </div>
      </header>
    </div>
  </div>
</template>
