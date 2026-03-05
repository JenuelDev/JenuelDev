<script setup lang="ts">
import { Icon } from '@iconify/vue';

const lighthouseScores = [
    { label: "Performance", score: 100 },
    { label: "Accessibility", score: 100 },
    { label: "Best Practices", score: 100 },
    { label: "SEO", score: 100 },
];

function openSite(site: string) {
    window.open(site, "_blank");
}
</script>
<template>
    <section
        v-scrollanimation
        class="w-full max-w-960px px-12px py-8px mx-auto mt-8px mb-28px flex flex-wrap justify-center gap-20px md:gap-14px md:px-10px md:py-6px md:mb-22px"
        aria-label="Lighthouse scores"
    >
        <div v-for="item in lighthouseScores" :key="item.label" class="flex flex-col items-center gap-5 min-w-94px">
            <div
                class="w-30px h-30px rounded-full border-2 md:border-4 border-[var(--primary)] text-[var(--primary)] grid place-items-center text-size-20px font-600 leading-none md:w-50px md:h-50px md:text-size-13px"
                :aria-label="`${item.label} score ${item.score}`"
            >
                {{ item.score }}
            </div>
            <p class="m-0 text-center text-size-20px leading-1.2 md:text-md">{{ item.label }}</p>
        </div>
    </section>
    <div
        class="mx-auto mb-20px w-full max-w-760px flex items-center gap-12px px-12px md:px-8px"
        aria-hidden="true"
    >
        <div class="h-1px flex-1 bg-gradient-to-r from-transparent via-white/30 to-white/55"></div>
        <div
            class="w-38px h-38px rounded-full border border-[var(--primary)]/50 bg-[var(--lightBackground)]/70 shadow-[0_0_20px_rgba(79,213,127,0.25)] flex items-center justify-center"
        >
            <Icon icon="mdi:earth" class="text-size-20px text-[var(--primary)]" />
        </div>
        <div class="h-1px flex-1 bg-gradient-to-l from-transparent via-white/30 to-white/55"></div>
    </div>
    <div v-scrollanimation class="my-footer text-size-20px">
        <div class="footer-toggle-link" @click="openSite('https://github.com/JenuelDev')">
            <div class="copy-right">
                {{ new Date().getFullYear() }}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-copyright"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <circle cx="12" cy="12" r="9"></circle>
                    <path d="M14.5 9a3.5 4 0 1 0 0 6"></path>
                </svg>
                Jenuel Ganawed
            </div>
            <q class="text-center">Programming isn't about what you know; it's about what you can figure out.</q>
            <p class="m-0 mt-8px text-center text-size-16px">
                This website was created from the ground up using Vue technology.
            </p>
        </div>
    </div>
</template>
