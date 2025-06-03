export default defineNuxtConfig({
  // ssr: false,                   // reine SSG
  app: {
    baseURL: process.env.BASE_URL || '/holz-und-gut/',   // GitHub-Pages-Pfad
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image'
  ],
  image: {
    provider: 'static',          // ← statt ipx
    // optional: globale Presets
    format: ['webp'],
    quality: 75
  },
  nitro: { prerender: { routes: ['/'] } }
})