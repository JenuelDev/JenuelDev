import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import scrollAnimation, { animationViewFull } from './directives/scrollAnimation'

import './assets/main.scss'

import '@unocss/reset/tailwind.css'
import 'virtual:uno.css'

const app = createApp(App)

app.directive('scrollanimation', scrollAnimation)
app.directive('scrollview', animationViewFull)
app.directive('click-outside', {
    beforeMount(el, binding) {
        el.clickOutsideEvent = function (event: any) {
            if (!(el === event.target || el.contains(event.target))) {
                binding.value(event, el);
            }
        };
        document.body.addEventListener('click', el.clickOutsideEvent);
    },
    unmounted(el) {
        document.body.removeEventListener('click', el.clickOutsideEvent);
    },
})

app.use(createPinia())
app.use(router)

app.mount('#app')
