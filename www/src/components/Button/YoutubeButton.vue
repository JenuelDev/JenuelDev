<script setup lang="ts">
import { Icon } from "@iconify/vue";
</script>
<template>
    <div class="relative group px-21px py-21px">
        <a
            href="https://www.youtube.com/@JenuelDev"
            target="_blank"
            class="bg-[var(--primary)] px-10px py-10px rounded-md text-[var(--background)] font-600 opacity-90 hover:opacity-100 cursor-pointer whitespace-nowrap flex items-center gap-5px shadow-sm z-100 absolute top-0 left-0 !group-hover:bg-red-5 transition-all"
        >
            <Icon icon="tabler:brand-youtube-filled" class="text-2xl !group-hover:text-dark-6 transition-all" />
        </a>
        <!-- group-hover:visible invisible -->
        <div
            class="group-hover:visible invisible absolute z-5 group-hover:-top-40px top-0 group-hover:-left-100px left-0 rotate-30 bg-[var(--primary)] text-[var(--background)] px-4 py-1 rounded-md border border-dark-9 transition-all delay-0 opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100"
        >
            Finance
        </div>
        <div
            class="group-hover:visible invisible absolute z-3 group-hover:-top-5px top-0 group-hover:-left-90px left-0 rotate-10 bg-[var(--primary)] text-[var(--background)] px-4 py-1 rounded-md shadow-sm border border-dark-9 transition-all delay-50 opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100"
        >
            Tech
        </div>
        <div
            class="group-hover:visible invisible absolute z-2 group-hover:top-30px top-0 group-hover:-left-150px -left-15px -rotate-10 bg-[var(--primary)] text-[var(--background)] px-4 py-1 rounded-md border border-dark-9 transition-all delay-150 opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100"
        >
            Programming
        </div>
        <div
            class="group-hover:visible invisible absolute z-99 group-hover:top-40px top-0 group-hover:-right-110px right-0 rotate-10 bg-[var(--primary)] text-[var(--background)] px-4 py-1 rounded-md shadow-sm border border-dark-9 transition-all delay-100 opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100"
        >
            Business
        </div>
        <div
            class="group-hover:visible invisible absolute z-99 group-hover:top-0px top-0 group-hover:-right-90px right-0 -rotate-10 bg-[var(--primary)] text-[var(--background)] px-4 py-1 rounded-md shadow-sm border border-dark-9 transition-all delay-125 opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100"
        >
            Code
        </div>
        <div
            class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:w-72 w-0 group-hover:h-72 h-0 rounded-full bg-[radial-gradient(circle,_rgba(0,0,0,0.5)_0%,_rgba(0,0,0,0.3)_40%,_rgba(0,0,0,0)_100%)] transition-all"
        ></div>
    </div>
</template>
