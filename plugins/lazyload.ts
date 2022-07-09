export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('lazy', {
    mounted(el, value) {
      el.observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.src = value.value
            el.observer.unobserve(el)
          }
        })
      })
      el.observer.observe(el)
    },
    beforeUnmount(el) {
      el.observer.disconnect()
      el.observer = undefined
    },
  })
})
