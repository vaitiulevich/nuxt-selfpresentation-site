<template>
  <div class="app-wrapper">
    <AppHeader />
    <div class="app-content">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.app-wrapper {
  display: flex;
  height: 100%;
}
.app-content {
  flex-grow: 1;
  max-height: 100vh;
  overflow: auto;
}
</style>
