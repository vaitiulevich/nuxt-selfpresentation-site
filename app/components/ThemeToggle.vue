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
    <span v-if="theme === 'light'">
      <Icon class="theme-icon" name="ph:moon-stars-bold" size="30"
    /></span>
    <span v-else><Icon class="theme-icon" name="meteocons:clear-day-fill" size="30" /></span>
  </button>
</template>

<style scoped>
.theme-icon {
  cursor: pointer;
  color: var(--accent-color);
}
.theme-toggle {
  border: none;
  background-color: transparent;
}
</style>
