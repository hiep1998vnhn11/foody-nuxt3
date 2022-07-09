import { defineNuxtConfig } from 'nuxt'
import IconsResolver from 'unplugin-icons/resolver'
import UnpluginComponentsVite from 'unplugin-vue-components/vite'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  vite: {
    plugins: [
      UnpluginComponentsVite({
        dts: true,
        resolvers: [
          IconsResolver({
            prefix: 'Icon',
          }),
        ],
      }),
    ],
  },
  modules: [
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    'unplugin-icons/nuxt',
  ],
  css: ['~/assets/scss/vendor.scss', '~/assets/scss/app.scss'],
  // plugins: ['~/plugins/lazyload'],
})
