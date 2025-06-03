export default defineNuxtConfig({
  ssr: false,                   // reine SSG
  app: {
    baseURL: process.env.BASE_URL || '/holz-und-gut/',   // GitHub-Pages-Pfad
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image'
  ],
  nitro: { prerender: { routes: ['/'] } }
})