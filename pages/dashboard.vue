<script setup lang="ts">
import { useObserver, useScrollObserver } from '~/composables/useObserver'
interface Item {
  image: string
  name: string
  description: string
  tags: string[]
}
const defaultItem: Item = {
  image:
    'https://images.foody.vn/res/g75/747170/prof/s750x400/foody-upload-api-foody-mobile-1-jpg-180606103333.jpg',
  name: 'The Coldest Sunset',
  description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.`,
  tags: ['photography', 'travel', 'lifestyle'],
}
const generateItems = async (count: number) => {
  loading.value = true
  await new Promise((resolve) => setTimeout(resolve, 500))
  loading.value = false
  const time = Date.now()
  return Array.from({ length: count }, (_, i) => ({
    ...defaultItem,
    name: `${defaultItem.name} ${time + i + 1}`,
    image: (i % 2 ? defaultItem.image : '/nem.jpeg') + '?t=' + (time + i),
    tags: defaultItem.tags.slice(0, Math.floor(Math.random() * 3) + 1),
  }))
}

const imageRef = ref<any[]>([])
const intersectionElementRef = ref<HTMLDivElement | null>(null)
useObserver(imageRef)
useScrollObserver(intersectionElementRef, async () => {
  items.value = [...items.value, ...(await generateItems(20))]
})
const items = ref<Item[]>([])
const total = ref(0)
const loading = ref(true)
onMounted(async () => {
  items.value = await generateItems(40)
})
</script>
<template>
  <div class="container">
    <h1 class="text-bold text-3xl mb-2">
      Nuxtapp Demo some card items with lazyload and intersection observer
    </h1>
    <h2>This page was using mix CDN and static image</h2>
    <div>
      <div class="grid grid-cols-5 gap-2">
        <div
          v-for="item in items"
          :key="item.name"
          class="card max-w-sm rounded overflow-hidden shadow-lg"
          :ref="(value) => imageRef.push(value)"
        >
          <img
            class="w-full"
            v-lazy="item.image"
            alt="Sunset in the mountains"
          />
          <div class="px-3 py-2">
            <div class="font-bold text-xl mb-2">
              {{ item.name }}
            </div>
            <p class="text-gray-700 text-base">
              {{ item.description }}
            </p>
          </div>
          <div class="px-3 pt-2 pb-1">
            <span
              v-for="tag in item.tags"
              :key="tag"
              class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              #{{ tag }}</span
            >
          </div>
        </div>
      </div>
      <div v-if="loading" class="grid grid-cols-5 gap-2">
        <SkeletonCard v-for="n in 10" :key="n" />
      </div>
      <div v-else ref="intersectionElementRef"></div>
    </div>
  </div>
</template>
<style lang="scss" scoped></style>
