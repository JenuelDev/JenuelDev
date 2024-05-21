<script setup lang="ts">
const showMobileMenu = ref(false);

const JumpLinks = [
    {
        key: "about",
        name: "About",
        link: "#about",
        isRoute: false,
    },
    {
        key: "experience",
        name: "Experience",
        link: "#experience",
        isRoute: false,
    },
    {
        key: "projects",
        name: "Projects",
        link: "#projects",
        isRoute: false,
    },
    {
        key: "Achievements",
        name: "Achievements",
        link: "#achievements",
        isRoute: false,
    },
    {
        key: "blog",
        name: "Blog",
        link: "/blog",
        isRoute: true,
    },
];

function toggleMobileMenu() {
    showMobileMenu.value = !showMobileMenu.value;

    if (!showMobileMenu.value) document.body.classList.remove("no-scroll");
    else document.body.classList.add("no-scroll");
}
</script>
<template>
    <div
        class="fixed right-5 top-5 bg-slate-900 p-5 rounded-full shadow-md cursor-pointer block lg:hidden"
        style="z-index: 60"
        @click="toggleMobileMenu"
    >
        <Icon size="30" name="material-symbols:menu-rounded" />
    </div>
    <div
        class="mobile-menu-container"
        :class="{
            active: showMobileMenu,
        }"
        style="z-index: 50"
    >
        <template v-for="link in JumpLinks">
            <a
                v-if="!link.isRoute"
                class="p-2 text-2xl font-bold"
                :href="link.link"
                @click="toggleMobileMenu"
            >
                {{ link.name }}
            </a>
            <div
                v-else
                class="p-2 text-2xl font-bold"
                @click="
                    toggleMobileMenu();
                    $router.push(link.link);
                "
            >
                Blog
            </div>
        </template>
    </div>
</template>
<style lang="scss">
.mobile-menu-container {
    @apply fixed opacity-0 transition-all h-[0px] w-[0px] top-5 right-6 overflow-hidden flex flex-col justify-center items-center bg-slate-900 p-2 rounded-lg shadow-md;

    a,
    div {
        @apply opacity-0 transition-all delay-200;
    }

    &.active {
        @apply top-28 opacity-100 w-[300px] h-[250px];

        a,
        div {
            @apply opacity-100 delay-300;
        }
    }
}
</style>
