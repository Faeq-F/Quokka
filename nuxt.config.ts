// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: false },
  app: {
    baseURL: "/Quokka/",
    buildAssetsDir: "assets",
    head: {
      link: [{ rel: "icon", type: "image/svg", href: "/Quokka/media/QuokkaLogo.svg" }],
    },
  },
  nitro: {
    prerender: {
      failOnError: false,
    },
  },
  css: [
    "~/assets/css/main.css",
  ],
  modules: [
    "lenis/nuxt",
    "maz-ui/nuxt",
    "@nuxt/content",
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/scripts",
    "@nuxt/ui",
    "@pinia/nuxt",
  ],
});
