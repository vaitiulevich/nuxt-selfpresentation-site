<script setup lang="ts">
// const router = useRouter()

const nav = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' }
]
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
  </div>
</template>
