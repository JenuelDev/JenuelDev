import AboutMe from '@/views/AboutMe/AboutMe.vue';
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'AboutMe',
      component: AboutMe,
      meta: {
        title: "About Me - JenuelDev"
      }
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () => import('@/views/ContactMe/index.vue'),
      meta: {
        title: "Contacts - JenuelDev"
      }
    },
    {
      path: "/piso-wifi",
      name: 'Piso Wifi',
      component: () => import('@/views/PisoWifi.vue'),
      meta: {
        title: "Piso WiFi - JenuelDev"
      }
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'PageNotFound',
      component: () => import('@/views/PageNotFound/index.vue'),
      meta: {
        title: "Page Not Found - JenuelDev"
      }
    },
  ],
  scrollBehavior(to, from, savedPosition) {

    // If the url has a #sub-section scroll to there
    if (to.hash) {
      return { el: to.hash, top: 20 };
    }

    if (!savedPosition) {
      return { left: 0, top: 0 };
    } else {
      return savedPosition;
    }
  }
})

router.beforeEach((to, from) => {
  const titleFromParams = to.params?.pageTitle

  if (titleFromParams) {
    document.title = `${titleFromParams} - ${document.title}`
  } else {
    document.title = to.meta?.title as string ?? 'JenuelDev'
  }
})

export default router
