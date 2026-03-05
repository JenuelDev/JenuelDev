<script setup lang="ts">
import { Icon } from "@iconify/vue"
const services = [
    {
        icon: 'tabler:device-ipad-horizontal-star',
        title: 'Front-End Development',
        description:
            'Transforms product requirements and design systems into responsive, accessible interfaces using modern web technologies.',
    },
    {
        icon: 'tabler:server-bolt',
        title: 'Back-End Development',
        description:
            'Builds reliable server-side systems that handle business logic, data processing, and communication between databases and client applications.',
    },
    {
        icon: 'tabler:manual-gearbox-filled',
        title: 'Website Management',
        description:
            'Manages website operations end-to-end, including maintenance, performance optimization, SEO readiness, and continuous improvements.',
    },
];
</script>

<template>
    <section class="flex flex-col w-[100%] max-w-[1200px] visible opacity-100 z-10 px-10px mt-100px mx-auto">
        <div class="text-center mb-40px">
            <h1 v-scrollanimation
                class="lg:text-size-52px md:text-size-44px text-size-36px font-800 text-[var(--primary)] tracking-tight mt-10px mb-15px">
                What I can offer</h1>
            <p v-scrollanimation
                class="md:text-size-24px text-size-20px md:px-10px w-[100%] max-w-[770px] md:leading-relaxed leading-normal mx-auto">
                Here are the core services that support product quality, reduce technical risks, and help teams ship
                maintainable web applications with confidence.
            </p>
        </div>

        <div class="flex gap-20px flex-wrap">
            <div v-scrollanimation class="flex-1 basis-300px" v-for="(service, i) in services" :key="service.title"
                :style="`transition-delay: ${i * 200}ms;`">
                <div class="card-item bg-[var(--lightBackground)] shadow-sm duration-200 h-[100%] border border-[var(--slate)]/20 hover:border-[var(--primary)]/35">
                    <div class="flex flex-col p-20px justify-center items-center gap-10px">
                        <div class="text-size-52px text-[var(--primary)] opacity-85">
                            <Icon :icon="service.icon" :size="50" />
                        </div>
                        <div class="item-title md:text-size-24px text-size-20px font-700">{{ service.title }}</div>
                        <div class="item-des md:text-size-20px text-size-18px md:leading-normal leading-snug text-center">
                            {{ service.description }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-scrollanimation class="mt-30px text-center mb-50px">
            <div>
                <router-link to="/contact"
                    class="bg-[var(--primary)] px-25px py-10px rounded-md text-[var(--background)] font-600 opacity-90 hover:opacity-100">
                    Get In Touch
                </router-link>
            </div>
        </div>
    </section>
</template>
