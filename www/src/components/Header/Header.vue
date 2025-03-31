<script setup lang="ts">
import ThemeChanger from './../themeChanger/themeChanger.vue';
import { onBeforeMount, onMounted, ref } from 'vue';
import { RouterLink } from 'vue-router';
import { Icon } from "@iconify/vue"
import { useStore } from '@/stores/store';
import headerLinks from '@/constant/header-links';

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
                    <template v-for="(headerLink, index) in headerLinks">
                        <div v-if="!headerLink.external" v-scrollanimation
                            :style="`transition-delay: ${(index + 1) * 100}ms`">
                            <RouterLink :to="headerLink.to">
                                <div class="flex items-center" :class="{ active: $route.name == headerLink.routeName }">
                                    <Icon :icon="headerLink.icon" />
                                    <span class="text-size-14px font-500"> {{ headerLink.label }} </span>
                                </div>
                            </RouterLink>
                        </div>
                        <div v-else v-scrollanimation :style="`transition-delay: ${(index + 1) * 100}ms`">
                            <a class="text-size-14px font-500 flex items-center" rel="external"
                                :href="headerLink.to as string" hreflang="es-es" target="_blank">
                                <Icon icon="tabler:file-download" size="20" />
                                {{ headerLink.label }}
                            </a>
                        </div>
                    </template>
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
