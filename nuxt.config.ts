// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  app: {
    head: {
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1.0" }
      ],
      link: [
        { rel: "icon", href: "/images/favicon.png" }
      ],
    },
  },
  css: ['/assets/css/style.css'],
  modules: ['@nuxt/content']
})
