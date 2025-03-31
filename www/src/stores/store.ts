import { defineStore } from "pinia"
import { ref } from "vue";

export const useStore = defineStore('store', () => {
  const show = ref(false);
  const navShow = ref(false);
  const workShow = ref(false)

  return {
    show,
    navShow,
    workShow
  }
})