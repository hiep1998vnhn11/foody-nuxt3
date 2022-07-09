import { defineStore } from 'pinia'

export interface ICounterState {
  count: number
}

export const useApp = defineStore('app', () => {
  const darkMode = ref(false)
  return {
    darkMode,
  }
})
