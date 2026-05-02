// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  ssr: false,
  app: {
    baseURL: "/Quokka/",
    buildAssetsDir: "assets",
    head: {
      link: [{ rel: "icon", type: "image/svg", href: "/Quokka/media/QuokkaLogo.svg" }],
      title: "Quokka"
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  router: {
    options: {
      scrollBehaviorType: "smooth"
    },
  },
  nitro: {
    prerender: {
      failOnError: false,
    },
  },
  vite: {
    optimizeDeps: {
      include: ['maz-ui', '@maz-ui/nuxt'],
      esbuildOptions: {
        supported: {
          'top-level-await': true,
        },
      },
    },
    esbuild: {
      supported: {
        'top-level-await': true,
      },
    }
  },
  vue: {
    compilerOptions: {
      whitespace: 'preserve'
    }
  },
  css: [
    "~/assets/css/main.css"
  ],
  modules: [
    "lenis/nuxt",
    "@maz-ui/nuxt",
    "@nuxt/content",
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/scripts",
    "@nuxt/ui",
    "@pinia/nuxt",
    '@nuxtjs/device',
  ],
  mazUi: {
    theme: {
      preset: 'maz-ui',
      overrides: {
        colors: {
          light: {
            primary: '210 100% 56%',
            secondary: '272 99% 54%',
            info: '188 78% 41%',
            success: '80 61% 50%',
            warning: '40 97% 59%',
            destructive: '1 100% 71%',
            muted: '0 0% 54%',
            accent: '272 99% 54%',
            contrast: '0 0% 85%',
          },
          dark: {
            primary: '210 100% 56%',
            secondary: '272 99% 54%',
            info: '188 78% 41%',
            success: '80 61% 50%',
            warning: '40 97% 59%',
            destructive: '1 100% 71%',
            muted: '255 0% 54%',
            accent: '272 99% 54%',
            contrast: '210 8% 14%',
          },
        },
      },
      strategy: 'hybrid',
      darkModeStrategy: 'class',
    },
    translations: {
      locale: 'en',
      fallbackLocale: 'en',
    },
    plugins: {
      aos: true,
      dialog: true,
      toast: true,
      wait: true,
    },
    directives: {
      vTooltip: true,
      vLazyImg: true,
      vClickOutside: true,
    },
  },
  icon: {
    clientBundle: {
      icons: [],
      scan: true,
      includeCustomCollections: true,
      sizeLimitKb: 256,
    },
  },
});