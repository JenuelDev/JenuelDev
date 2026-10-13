<script setup lang="ts">
import { onBeforeMount } from "vue";
import Footer from "./components/Footer/Footer.vue";

import Header from "./components/Header/Header.vue";

import { useStore } from "./stores/store";

const store = useStore();

// Mount the incoming route immediately so section links and scroll restoration
// can resolve their targets while the new page fades into place.
function finishPageLeave(_element: Element, done: () => void) {
    done();
}

onBeforeMount(() => {
    if (localStorage.getItem("showedIntro") == "done") {
        let ext = localStorage.getItem("expy") ? localStorage.getItem("expy") : "";

        if (ext && ext != "") {
            let isExpire = parseInt(ext);
            let dateNow = Date.now();

            if (isExpire > dateNow) {
                store.show = true;
            } else {
                store.show = false;
            }
        }
    }
    console.log(
        "%cHey! Whats Up!%c\nLike to dig into the meaty bits of the website? Thanks for Visiting!",
        "padding:10px;" +
            "border-radius: 10px;" +
            "color:#64ffda;" +
            "font-family:'Ubuntu';" +
            "display: block;" +
            "font-weight:bold;" +
            "font-size:48px;" +
            "background:#0a192f;",

        "padding: 10px; " +
            "border-radius:10px; " +
            "color:#ccd6f6; " +
            "font-family:'Ubuntu'; " +
            "font-weight:100; " +
            "font-size:18px; " +
            "background:#0a192f;",
    );
});
</script>
<template>
    <Header />
    <main class="site-main">
        <RouterView v-slot="{ Component, route }">
            <Transition name="page" @leave="finishPageLeave">
                <component :is="Component" :key="route.path" />
            </Transition>
        </RouterView>
    </main>
    <Footer />
</template>

<style lang="scss">
.site-main {
    min-height: 70vh;
}
.page-enter-active {
    transition: opacity 240ms cubic-bezier(0.22, 1, 0.36, 1);
}
.page-enter-from {
    opacity: 0;
}
.page-enter-to {
    opacity: 1;
}
@media (prefers-reduced-motion: reduce) {
    .page-enter-active {
        transition: none;
    }
    .page-enter-from {
        opacity: 1;
    }
}
</style>
