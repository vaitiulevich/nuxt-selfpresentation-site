type Theme = 'light' | 'dark'

export const useTheme = () => {
  // Начинаем с light темы по умолчанию для SSR
  const theme = ref<Theme>('light')
  const isReady = ref(false)

  const setTheme = (newTheme: Theme) => {
    theme.value = newTheme

    // Только на клиенте
    localStorage.setItem('theme', newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
  }

  const toggleTheme = () => {
    setTheme(theme.value === 'light' ? 'dark' : 'light')
  }

  // Инициализация ТОЛЬКО на клиенте
  onMounted(() => {
    const savedTheme = localStorage.getItem('theme') as Theme | null
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

    // Определяем начальную тему
    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light')

    // Устанавливаем тему
    setTheme(initialTheme)
    isReady.value = true

    // Слушаем изменения системной темы (только если нет сохраненной)
    if (!savedTheme) {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

      const handleSystemChange = (e: MediaQueryListEvent) => {
        setTheme(e.matches ? 'dark' : 'light')
      }

      mediaQuery.addEventListener('change', handleSystemChange)

      onUnmounted(() => {
        mediaQuery.removeEventListener('change', handleSystemChange)
      })
    }
  })

  return {
    theme: readonly(theme),
    setTheme,
    toggleTheme,
    isDark: computed(() => theme.value === 'dark'),
    isLight: computed(() => theme.value === 'light'),
    isReady: readonly(isReady)
  }
}
