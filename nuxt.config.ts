import { defineNuxtConfig } from 'nuxt'
import IconsResolver from 'unplugin-icons/resolver'
import UnpluginComponentsVite from 'unplugin-vue-components/vite'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  // ssr: false,
  // target: 'static',
  app: {
    head: {
      title: 'NuxtApp - Build for production',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          property: 'og:title',
          content: 'NuxtApp - Build for production',
        },
        {
          property: 'og:description',
          content: 'An nuxt app build for production testing performance',
        },
        {
          property: 'og:type',
          content: 'aecomapp:nuxt',
        },
        {
          property: 'og:url',
          content: 'https://nuxt.aecomapp.com',
        },
        {
          property: 'og:image',
          content: 'https://nuxt.aecomapp.com/nem.jpeg',
        },
        {
          property: 'og:site_name',
          content: 'NuxtApp',
        },
        {
          property: 'og:locale',
          content: 'vi_VN',
        },
        {
          hid: 'description',
          name: 'description',
          content: 'An nuxt app build for production testing performance',
        },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico?t=123' }],
    },
  },
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
