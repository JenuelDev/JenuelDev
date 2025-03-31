import AboutMe from '@/views/AboutMe/AboutMe.vue';
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'AboutMe',
      component: AboutMe,
    },
    {
      path: '/project',
      name: 'Project',
      component: () => import('@/views/MyWork/index.vue'),
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () => import('@/views/ContactMe/index.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'PageNotFound',
      component: () => import('@/views/PageNotFound/index.vue'),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (!savedPosition) {
      return { left: 0, top: 0 };
    } else {
      return savedPosition;
    }
  }
})

export default router
