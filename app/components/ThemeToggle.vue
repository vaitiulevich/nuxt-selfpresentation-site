<script setup lang="ts">
import { useTheme } from '../composables/useTheme'

const { theme, toggleTheme, isReady } = useTheme()
</script>

<template>
  <button
    class="theme-toggle"
    :aria-label="`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`"
    :disabled="!isReady"
    @click="toggleTheme"
  >
    <span v-if="theme === 'light'">🌙</span>
    <span v-else>☀️</span>
  </button>
</template>
