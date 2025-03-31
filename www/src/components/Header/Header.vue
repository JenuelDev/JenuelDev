<script setup lang="ts">
import ThemeChanger from './../themeChanger/themeChanger.vue';
import { onBeforeMount, onMounted, ref } from 'vue';
import { RouterLink } from 'vue-router';
import { Icon } from "@iconify/vue"
import { useStore } from '@/stores/store';

const store = useStore();
const scroll = ref(0);
const width = ref(0);
const showNavbar = ref(true);
const lastScrollPosition = ref(0);

function handleScroll() {
    scroll.value = window.scrollY;
}
function handleWidth() {
    width.value = window.innerWidth;
}
function onScroll() {
    // Get the current scroll position
    const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    // Because of momentum scrolling on mobiles, we shouldn't continue if it is less than zero
    if (currentScrollPosition < 0) {
        return;
    }
    // Here we determine whether we need to show or hide the navbar
    showNavbar.value = currentScrollPosition < lastScrollPosition.value;

    // Set the current scroll position as the last scroll position
    lastScrollPosition.value = currentScrollPosition;
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleWidth);
    window.addEventListener('scroll', onScroll);
});

onBeforeMount(() => {
    window.removeEventListener('scroll', onScroll);
});


</script>

<template>
    <div class="header" :class="{ 'navbar--hidden': !showNavbar && scroll > 100, 'nav-min': scroll > 50 }">
        <nav>
            <div class="logo-image">
                <div
                    class="sm:ml-[50px] ml-[10px] w-40px h-40px rounded-full bg-[var(--primary)] flex items-center justify-center">
                    <div class="bg-[var(--lightBackground)] w-20px h-20px rounded-full "></div>
                </div>
            </div>
            <div class="navs">
                <div class="nav-o">
                    <RouterLink v-scrollanimation style="transition-delay: 100ms" to="/">
                        <div class="flex items-center" :class="{ active: $route.name == 'AboutMe' }">
                            <Icon icon="tabler:home-filled" size="20" />
                            <span class="text-size-14px font-500"> Home </span>
                        </div>
                    </RouterLink>
                    <a v-scrollanimation style="transition-delay: 250ms" href="#experience">
                        <div class="flex items-center" :class="{ active: $route.name == 'Experience' }">
                            <Icon icon="tabler:briefcase-2-filled" size="20" />
                            <span class="text-size-14px font-500"> Experience </span>
                        </div>
                    </a>
                    <a v-scrollanimation style="transition-delay: 400ms" href="#projects">
                        <div class="flex items-center" :class="{ active: $route.name == 'Project' }">
                            <Icon icon="tabler:terminal-2" size="20" />
                            <span class="text-size-14px font-500"> Projects </span>
                        </div>
                    </a>
                    <RouterLink v-scrollanimation style="transition-delay: 550ms" to="/contact">
                        <div class="flex items-center" :class="{ active: $route.name == 'Contact' }">
                            <Icon icon="tabler:mail" size="20" />
                            <span class="text-size-14px font-500"> Contact Me </span>
                        </div>
                    </RouterLink>
                    <div v-scrollanimation style="transition-delay: 650ms">
                        <a class="text-size-14px font-500 flex items-center" rel="external"
                            href="https://blog.brojenuel.com" hreflang="es-es">
                            <Icon icon="tabler:brand-blogger" size="20" />
                            Blog
                        </a>
                    </div>
                    <div v-scrollanimation style="transition-delay: 650ms">
                        <a class="text-size-14px font-500 flex items-center" rel="external"
                            href="https://drive.google.com/file/d/1CEMto0ubGMVBJNCLq-QQN8-aFsYUo2Dd/view?usp=sharing"
                            hreflang="es-es" target="_blank">
                            <Icon icon="tabler:file-download" size="20" />
                            Resume
                        </a>
                    </div>
                </div>
                <div v-scrollanimation style="transition-delay: 700ms">
                    <ThemeChanger />
                </div>
            </div>

            <div class="show-mobile-nav-but mt-[10px]">
                <Icon class="text-3xl" @click="store.navShow = true" style="margin-right: 20px" icon="tabler:menu-2" />
            </div>
        </nav>
    </div>
</template>
