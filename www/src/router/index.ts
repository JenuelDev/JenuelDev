import AboutMe from '@/views/AboutMe/AboutMe.vue';
import { applySeoMeta } from '@/utils/seo';
import { createRouter, createWebHistory } from 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    title?: string
    /** Used for <meta name="description">, og:description and twitter:description. */
    description?: string
    /** Set false to keep the page out of search indexes (e.g. 404). */
    index?: boolean
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'AboutMe',
      component: AboutMe,
      meta: {
        title: "Jenuel Ganawed — Software Developer | Vue, Nuxt, Laravel",
        description: "Jenuel Ganawed (JenuelDev) is a software developer from the Philippines building fast, reliable web, mobile, and desktop apps with Vue, Nuxt, Laravel, and Node.js. See projects, experience, and resume."
      }
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () => import('@/views/ContactMe/index.vue'),
      meta: {
        title: "Contact Jenuel Ganawed — Hire a Software Developer",
        description: "Get in touch with Jenuel Ganawed for freelance work, full-time roles, or collaboration on web, mobile, and desktop projects."
      }
    },
    {
      path: "/piso-wifi",
      name: 'Piso Wifi',
      component: () => import('@/views/PisoWifi.vue'),
      meta: {
        title: "Piso WiFi Safety: How to Stay Secure on Public WiFi — JenuelDev",
        description: "Why you should be careful on Piso WiFi and other public networks: protecting personal information, avoiding scams and cyber threats, and staying a responsible digital citizen."
      }
    },
    {
      path: '/privacy',
      name: 'Privacy',
      component: () => import('@/views/Privacy.vue'),
      meta: {
        title: "Privacy Policy — JenuelDev",
        description: "How JenuelDev collects, uses, shares, and protects your personal information, and the privacy rights available to you."
      }
    },
    {
      path: '/privacy-policy/photo-booth-auto-print',
      name: 'PrivacyPolicyPhotoBoothAutoPrint',
      component: () => import('@/views/PrivacyPolicy/PhotoBoothAutoPrint.vue'),
      meta: {
        title: "Privacy Policy — Photo Booth Auto Print | JenuelDev",
        description: "Privacy policy for the Photo Booth Auto Print app: the device data it accesses, the permissions it requests, how photos are handled, and your rights."
      }
    },
    {
      path: '/project-archives',
      name: 'ProjectArchives',
      component: () => import('@/views/ProjectArchives/index.vue'),
      meta: {
        title: "Project Archive — Apps & Open Source by Jenuel Ganawed",
        description: "A full archive of projects built by Jenuel Ganawed, including web apps, mobile apps, desktop tools, and open source packages, with the tech behind each one."
      }
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'PageNotFound',
      component: () => import('@/views/PageNotFound/index.vue'),
      meta: {
        title: "Page Not Found — JenuelDev",
        description: "The page you are looking for does not exist.",
        index: false
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

router.afterEach((to) => {
  const titleFromParams = to.params?.pageTitle

  applySeoMeta(to.path, {
    title: titleFromParams
      ? `${titleFromParams} - ${to.meta?.title ?? 'JenuelDev'}`
      : to.meta?.title,
    description: to.meta?.description,
    index: to.meta?.index,
  })
})

export default router
