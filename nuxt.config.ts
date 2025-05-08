// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  modules: [
    '@nuxt/ui',
    '@nuxt/eslint'
  ],
  css: ['~/assets/css/main.css'],
  
  devtools: { enabled: true }
});