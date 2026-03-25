<script setup lang="ts">
import ThemeChanger from "./../themeChanger/themeChanger.vue";
import { onMounted, onUnmounted, ref } from "vue";
import { RouterLink } from "vue-router";
import { Icon } from "@iconify/vue";
import { useStore } from "@/stores/store";
import headerLinks from "@/constant/header-links";

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
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleWidth);
    window.addEventListener("scroll", onScroll);
});

onUnmounted(() => {
    window.removeEventListener("scroll", onScroll);
    window.removeEventListener("scroll", handleScroll);
    window.removeEventListener("resize", handleWidth);
});
</script>

<template>
    <div class="header" :class="{ 'navbar--hidden': !showNavbar && scroll > 100, 'nav-min': scroll > 50 }">
        <nav>
            <div class="logo-image">
                <div
                    class="sm:ml-[50px] ml-[10px] w-40px h-40px rounded-full bg-[var(--primary)] flex items-center justify-center"
                >
                    <div class="bg-[var(--lightBackground)] w-20px h-20px rounded-full"></div>
                </div>
            </div>
            <div class="navs">
                <div class="nav-o">
                    <template v-for="(headerLink, index) in headerLinks">
                        <!-- Dropdown menu with children -->
                        <div
                            v-if="headerLink.children && headerLink.children.length > 0"
                            v-scrollanimation
                            :style="`transition-delay: ${(index + 1) * 100}ms`"
                            :key="headerLink.label ?? index"
                            class="dropdown-container"
                        >
                            <div class="dropdown-trigger flex items-center cursor-pointer">
                                <Icon :icon="headerLink.icon" />
                                <span class="text-size-14px font-500"> {{ headerLink.label }} </span>
                                <Icon icon="tabler:chevron-down" class="dropdown-arrow ml-1" />
                            </div>
                            <div class="dropdown-menu">
                                <div class="dropdown-menu-inner">
                                    <template v-for="(childLink, childIndex) in headerLink.children" :key="childIndex">
                                        <RouterLink v-if="!childLink.external" :to="childLink.to" class="dropdown-item">
                                            <div
                                                class="flex items-center"
                                                :class="{ active: $route.name == childLink.routeName }"
                                            >
                                                <Icon :icon="childLink.icon" />
                                                <span class="text-size-14px font-500"> {{ childLink.label }} </span>
                                            </div>
                                        </RouterLink>
                                        <a
                                            v-else
                                            class="dropdown-item flex items-center"
                                            rel="external"
                                            :href="childLink.to as string"
                                            hreflang="es-es"
                                            target="_blank"
                                        >
                                            <Icon :icon="childLink.icon" />
                                            <span class="text-size-14px font-500"> {{ childLink.label }} </span>
                                        </a>
                                    </template>
                                </div>
                            </div>
                        </div>
                        <!-- Regular internal link -->
                        <div
                            v-else-if="!headerLink.external"
                            v-scrollanimation
                            :style="`transition-delay: ${(index + 1) * 100}ms`"
                            :key="headerLink.routeName ?? headerLink.label ?? index"
                        >
                            <RouterLink :to="headerLink.to">
                                <div class="flex items-center" :class="{ active: $route.name == headerLink.routeName }">
                                    <Icon :icon="headerLink.icon" />
                                    <span class="text-size-14px font-500"> {{ headerLink.label }} </span>
                                </div>
                            </RouterLink>
                        </div>
                        <!-- Regular external link -->
                        <div
                            v-else
                            v-scrollanimation
                            :style="`transition-delay: ${(index + 1) * 100}ms`"
                            :key="headerLink.label"
                        >
                            <a
                                class="text-size-14px font-500 flex items-center"
                                rel="external"
                                :href="headerLink.to as string"
                                hreflang="es-es"
                                target="_blank"
                            >
                                <Icon :icon="headerLink.icon" />
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

<style scoped>
.dropdown-container {
    position: relative;
}

.dropdown-trigger {
    transition: all 0.3s ease;
}

.dropdown-arrow {
    transition: transform 0.3s ease;
}

.dropdown-container:hover .dropdown-arrow {
    transform: rotate(180deg);
}

.dropdown-menu {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%) translateY(-10px);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 100;
}

.dropdown-menu-inner {
    background: var(--background);
    border: 1px solid var(--primary);
    border-radius: 8px;
    min-width: 180px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
    transform: scale(0.95) translateY(-10px);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    display: flex;
    flex-direction: column;
    overflow: hidden;
}

.dropdown-container:hover .dropdown-menu {
    opacity: 1;
    visibility: visible;
    transform: translateX(-50%) translateY(10%);
}

.dropdown-container:hover .dropdown-menu-inner {
    transform: scale(1) translateY(0);
}

.dropdown-item {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px 16px;
    color: var(--text);
    text-decoration: none;
    transition: all 0.2s ease;
    white-space: nowrap;
}

.dropdown-item:hover {
    /* background: var(--primary);
    color: var(--background) !important; */
}

.dropdown-item.active {
    /* background: var(--primary);
    color: var(--background); */
}

.dropdown-item :deep(svg) {
    width: 18px;
    height: 18px;
}
</style>
