<script setup lang="ts">
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import { Icon } from "@iconify/vue";
import ThemeChanger from "../themeChanger/themeChanger.vue";
import headerLinks from "@/constant/header-links";
const resourceLinks = headerLinks[0]?.children?.filter(
    (link) => link.routeName !== "Experience" && link.routeName !== "Project",
);
const menuOpen = ref(false);
const route = useRoute();
watch(
    () => route.fullPath,
    () => {
        menuOpen.value = false;
    },
);
</script>
<template>
    <header class="craft-header">
        <router-link to="/" class="craft-logo" aria-label="JenuelDev home">
            <span class="site-logo-mark" aria-hidden="true"></span>
        </router-link>
        <nav class="craft-nav" aria-label="Main navigation">
            <router-link to="/" :class="{ 'is-active': route.path === '/' && !route.hash }">Home</router-link>
            <router-link :to="{ path: '/', hash: '#projects' }">Work</router-link>
            <router-link :to="{ path: '/', hash: '#experience' }">Experience</router-link>
            <div class="craft-nav-dropdown">
                <button type="button">Resources <Icon icon="tabler:chevron-down" /></button>
                <div class="craft-nav-submenu">
                    <router-link v-for="link in resourceLinks" :key="link.label" :to="link.to">{{
                        link.label
                    }}</router-link>
                    <router-link to="/project-archives">Project archive</router-link>
                    <a href="/Jenuel Ganawed - Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
                </div>
            </div>
            <a href="https://store.jenuel.dev/" target="_blank" rel="noopener noreferrer">Store</a>
            <a href="https://blog.jenuel.dev/" target="_blank" rel="noopener noreferrer">Blog</a>
        </nav>
        <div class="craft-header-actions">
            <a
                class="header-github"
                href="https://github.com/JenuelDev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                ><Icon icon="tabler:brand-github"
            /></a>
            <ThemeChanger />
            <router-link to="/contact" class="header-contact"
                >Get in touch <Icon icon="tabler:arrow-up-right"
            /></router-link>
            <button
                class="craft-menu-button"
                type="button"
                :aria-expanded="menuOpen"
                aria-controls="mobile-menu"
                :aria-label="menuOpen ? 'Close menu' : 'Open menu'"
                @click="menuOpen = !menuOpen"
            >
                <Icon :icon="menuOpen ? 'tabler:x' : 'tabler:menu-2'" />
            </button>
        </div>
        <nav
            v-if="menuOpen"
            id="mobile-menu"
            class="craft-mobile-menu"
            @click="menuOpen = false"
            aria-label="Mobile navigation"
        >
            <router-link to="/">Home</router-link>
            <router-link v-for="link in headerLinks[0]?.children" :key="link.label" :to="link.to">{{
                link.label
            }}</router-link>
            <router-link to="/project-archives">Project archive</router-link>
            <router-link to="/contact">Contact me</router-link>
            <a href="https://blog.jenuel.dev/">Blog</a><a href="https://store.jenuel.dev/">Store</a>
        </nav>
    </header>
</template>
