<script setup lang="ts">
import { Icon } from "@iconify/vue"
const services = [
    {
        icon: 'tabler:code',
        title: 'Web Development',
        description:
            'Responsive, fast, and modern websites built with clean code and best practices using the latest technologies.',
    },
    {
        icon: 'tabler:server',
        title: 'Back-end Solutions',
        description:
            'Robust and secure server-side applications with efficient databases, APIs, and scalable architecture.',
    },
    {
        icon: 'tabler:vector-bezier',
        title: 'UI/UX Implementation',
        description:
            'Intuitive and engaging user interfaces translated from designs into pixel-perfect, accessible experiences.',
    },
];
</script>

<template>
    <section class="offer-section flex flex-col w-full max-w-900px visible opacity-100 z-10 px-10px mx-auto mb-90px">
        <h2 v-scrollanimation
            class="lg:text-size-44px md:text-size-38px text-size-28px font-600 text-[var(--primary)] tracking-tight mb-15px">
            what i offer
        </h2>
        <p v-scrollanimation class="text-lg leading-7 mb-42px">
            High-quality solutions tailored to your goals, built with performance, scalability, and user experience in mind.
        </p>

        <div class="offer-grid">
            <div v-scrollanimation class="offer-card-wrap" v-for="(service, i) in services" :key="service.title"
                :style="`transition-delay: ${i * 200}ms;`">
                <div class="offer-card">
                    <div class="flex flex-col h-full p-24px justify-start items-start">
                        <div class="offer-icon text-[var(--primary)]">
                            <span>
                                <Icon :icon="service.icon" :size="34" />
                            </span>
                        </div>
                        <div class="offer-card-title text-xl font-700">{{ service.title }}</div>
                        <div class="offer-rule" aria-hidden="true"></div>
                        <div class="offer-card-copy leading-6 text-left">
                            {{ service.description }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
.offer-section {
    color: var(--lightestSlate);
}

.offer-grid {
    @apply grid gap-32px;
    grid-template-columns: repeat(3, minmax(0, 1fr));
}

.offer-card {
    @apply relative h-full overflow-hidden rounded-10px;
    border: 1px solid color-mix(in srgb, var(--primary) 35%, transparent);
    background: color-mix(in srgb, var(--background) 92%, #001e2e);
    transition: border-color 0.2s ease, transform 0.2s ease;

    &:hover {
        transform: translateY(-5px);
        border-color: color-mix(in srgb, var(--primary) 62%, transparent);
    }
}

.offer-icon {
    @apply flex items-center justify-center w-66px h-66px mb-28px rounded-8px;
    border: 1px solid color-mix(in srgb, var(--primary) 42%, transparent);

    span {
        @apply grid w-36px h-32px place-items-center rounded-4px;
        background: var(--primary);
        color: var(--background);
    }
}

.offer-card-title {
    @apply mb-12px;
    color: color-mix(in srgb, var(--lightestSlate) 96%, #ffffff);
    line-height: 1.15;
}

.offer-rule {
    @apply w-50px h-2px mb-12px;
    background: var(--primary);
}

.offer-card-copy {
    color: color-mix(in srgb, var(--lightestSlate) 76%, transparent);
}

@media (max-width: 960px) {
    .offer-grid {
        @apply grid-cols-1 max-w-620px w-full mx-auto;
    }
}

@media (max-width: 520px) {
    .offer-grid {
        @apply gap-18px;
    }
}
</style>
