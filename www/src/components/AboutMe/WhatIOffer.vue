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
        <h1 v-scrollanimation
            class="lg:text-size-44px md:text-size-38px text-size-28px font-600 text-[var(--primary)] tracking-tight mb-15px">
            what i offer
        </h1>
        <p v-scrollanimation class="text-lg leading-7 mb-42px">
            High-quality solutions tailored to your goals, built with performance, scalability, and user experience in mind.
        </p>

        <div class="offer-grid">
            <div v-scrollanimation class="offer-card-wrap" v-for="(service, i) in services" :key="service.title"
                :style="`transition-delay: ${i * 200}ms;`">
                <div class="offer-card">
                    <div class="offer-dots" aria-hidden="true"></div>
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
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 32px;
}

.offer-card {
    position: relative;
    height: 100%;
    overflow: hidden;
    border: 1px solid color-mix(in srgb, var(--primary) 35%, transparent);
    border-radius: 10px;
    background:
        radial-gradient(circle at 50% 0%, color-mix(in srgb, var(--primary) 12%, transparent), transparent 35%),
        radial-gradient(circle at 100% 100%, color-mix(in srgb, var(--primary) 7%, transparent), transparent 40%),
        color-mix(in srgb, var(--background) 92%, #001e2e);
    box-shadow:
        inset 0 0 24px color-mix(in srgb, var(--primary) 7%, transparent),
        0 20px 55px -38px color-mix(in srgb, var(--primary) 55%, transparent);
    transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;

    &:hover {
        transform: translateY(-5px);
        border-color: color-mix(in srgb, var(--primary) 62%, transparent);
        box-shadow:
            inset 0 0 32px color-mix(in srgb, var(--primary) 11%, transparent),
            0 22px 60px -34px color-mix(in srgb, var(--primary) 75%, transparent);
    }
}

.offer-dots {
    position: absolute;
    top: 26px;
    right: 24px;
    width: 74px;
    height: 48px;
    background-image: radial-gradient(circle, color-mix(in srgb, var(--primary) 72%, transparent) 1.5px, transparent 1.5px);
    background-size: 17px 17px;
    opacity: 0.46;
}

.offer-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 66px;
    height: 66px;
    margin-bottom: 28px;
    border: 1px solid color-mix(in srgb, var(--primary) 42%, transparent);
    border-radius: 8px;
    background: color-mix(in srgb, var(--primary) 9%, transparent);
    box-shadow:
        inset 0 0 20px color-mix(in srgb, var(--primary) 14%, transparent),
        0 0 18px color-mix(in srgb, var(--primary) 13%, transparent);

    span {
        display: grid;
        width: 36px;
        height: 32px;
        place-items: center;
        border-radius: 4px;
        background: var(--primary);
        color: var(--background);
        box-shadow: 0 0 16px color-mix(in srgb, var(--primary) 62%, transparent);
    }
}

.offer-card-title {
    color: color-mix(in srgb, var(--lightestSlate) 96%, #ffffff);
    line-height: 1.15;
    margin-bottom: 12px;
}

.offer-rule {
    width: 50px;
    height: 2px;
    margin-bottom: 12px;
    background: var(--primary);
    box-shadow: 0 0 12px color-mix(in srgb, var(--primary) 58%, transparent);
}

.offer-card-copy {
    color: color-mix(in srgb, var(--lightestSlate) 76%, transparent);
}

@media (max-width: 960px) {
    .offer-grid {
        grid-template-columns: 1fr;
        max-width: 620px;
        width: 100%;
        margin: 0 auto;
    }
}

@media (max-width: 520px) {
    .offer-grid {
        gap: 18px;
    }

    .offer-card-copy {
        max-width: 100%;
    }
}
</style>
