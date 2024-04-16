import svg from "@neodx/svg/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  pages: true,
  modules: ["@nuxtjs/tailwindcss", '@pinia/nuxt'],
  typescript: {
    strict: true,
  },
  runtimeConfig: {
    ssr: true,
    public: {
        apiBase: process.env['API_BASE'],
    },
  },
  vite: {
    vue: {},
      plugins: [
        svg({
          root: "shared/ui/icons/assets",
          group: true,
          output: "public/sprite",
          metadata: "shared/ui/icons/sprite.h.ts",
        }),
      ],
  },
  components: [
      {
          path: 'shared',
          extensions: ['.vue'],
          prefix: 'Shared',
      },
      {
          path: 'features',
          extensions: ['.vue'],
          prefix: 'Feature',
      },
      {
          path: 'widgets',
          extensions: ['.vue'],
          prefix: 'Widget',
      },
      {
          path: 'entities',
          extensions: ['.vue'],
          prefix: 'Entity',
      },
  ],
  alias: {
      '@styles': './app/styles',
  },
  imports: {
      dirs: [
          'shared/**/*.ts',
          'features/**/*.ts',
          'widgets/**/*.ts',
          'entities/**/*.ts',
      ],
  },

});
