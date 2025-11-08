// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  rules: {
    // Основные TypeScript правила
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-explicit-any': 'warn',

    // Базовые ESLint правила
    'prefer-const': 'error',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

    // Vue правила
    'vue/multi-word-component-names': 'off'
  },
  ignores: [
    'dist/**',
    'node_modules/**',
    '.nuxt/**',
    'output/**',
    'coverage/**',
    '*.min.js',
    'public/**'
  ]
})
