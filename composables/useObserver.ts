import type { Ref } from 'vue'
type MaybeRefElement =
  | Element
  | Array<Element | null>
  | null
  | Ref<Element | null>
  | Ref<Array<Element | null>>
type NullableElement = Element | null | Array<Element | null>
export function useObserver(objectObserver: MaybeRefElement) {
  const observer = ref<null | IntersectionObserver>(null)
  const unObserver = (value: Element | Array<Element | null> | null) => {
    if (!observer.value || !value) return
    if (Array.isArray(value)) {
      value.forEach((el) => el && observer.value!.unobserve(el))
    } else {
      observer.value!.unobserve(value)
    }
  }
  const handleObserver = (value: NullableElement) => {
    if (!observer.value || !value) return
    if (Array.isArray(value)) {
      value.forEach((el) => el && observer.value!.observe(el))
    } else {
      observer.value!.observe(value)
    }
  }

  watch(
    () => unref<NullableElement>(objectObserver),
    (value, oldValue) => {
      if (!observer.value) return
      if (oldValue) unObserver(oldValue)
      if (value) handleObserver(value)
    },
    {
      deep: true,
    }
  )
  onMounted(() => {
    observer.value = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          } else {
            entry.target.classList.remove('is-visible')
          }
        })
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0,
      }
    )
  })
  onBeforeUnmount(() => {
    observer.value!.disconnect()
    observer.value = null
  })
}

type MaybeElementObserver = null | Element | Ref<Element | null>
type ElementObserver = null | Element
export function useScrollObserver(
  element: MaybeElementObserver,
  callback: () => any
) {
  if (typeof callback !== 'function')
    console.error(
      'useScrollObserver: callback is required and must be a function'
    )
  const observer = ref<null | IntersectionObserver>(null)
  const unObserver = (value: Element | Element[]) => {
    if (!observer.value || !value) return
    if (Array.isArray(value)) {
      value.forEach((el) => observer.value!.unobserve(el))
    } else {
      observer.value!.unobserve(value)
    }
  }

  const handleObserver = (value: ElementObserver) => {
    if (!observer.value || !value) return
    if (Array.isArray(value)) {
      value.forEach((el) => observer.value!.observe(el))
    } else {
      observer.value!.observe(value)
    }
  }

  watch(
    () => unref<ElementObserver>(element),
    (value, oldValue) => {
      if (!observer.value) return
      if (oldValue) unObserver(oldValue)
      if (value) handleObserver(value)
    }
  )

  onMounted(() => {
    observer.value = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            callback()
          }
        })
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0,
      }
    )
  })
  onBeforeUnmount(() => {
    observer.value!.disconnect()
    observer.value = null
  })
}
