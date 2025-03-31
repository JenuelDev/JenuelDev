import { defineStore } from "pinia"
import { ref } from "vue";

export const store = defineStore('store', () => {
  const show = ref(false);
  const navShow = ref(false);

  return {
    show,
    navShow
  }
})