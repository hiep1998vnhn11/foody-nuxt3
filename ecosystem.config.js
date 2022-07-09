module.exports = {
  apps: [
    {
      name: 'NuxtApp',
      exec_mode: 'cluster',
      instances: 1, // Or a number of instances
      script: './node_modules/nuxt/bin/nuxt.mjs',
      args: 'start',
    },
  ],
}
