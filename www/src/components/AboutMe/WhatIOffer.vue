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
    <section class="offer-section flex flex-col w-full max-w-1160px visible opacity-100 z-10 px-16px mt-110px mx-auto">
        <div class="offer-heading text-center mb-20px">
            <div class="offer-heading-line offer-heading-line-left" aria-hidden="true">
                <span></span>
                <i></i>
            </div>
            <div class="offer-heading-line offer-heading-line-right" aria-hidden="true">
                <span></span>
                <i></i>
            </div>
            <h1 v-scrollanimation
                class="offer-title lg:text-size-36px md:text-size-34px text-size-30px font-800 mt-0 mb-8px">
                What I Can <span>Offer</span></h1>
            <p v-scrollanimation
                class="offer-copy md:text-size-18px text-size-16px md:px-10px w-full max-w-560px leading-6 mx-auto">
                High-quality solutions tailored to your goals, built with performance, scalability, and user experience in mind.
            </p>
        </div>

        <div class="offer-grid">
            <div v-scrollanimation class="offer-card-wrap" v-for="(service, i) in services" :key="service.title"
                :style="`transition-delay: ${i * 200}ms;`">
                <div class="offer-card">
                    <div class="offer-dots" aria-hidden="true"></div>
                    <div class="flex flex-col h-full p-24px md:p-24px justify-start items-start">
                        <div class="offer-icon text-[var(--primary)]">
                            <span>
                                <Icon :icon="service.icon" :size="34" />
                            </span>
                        </div>
                        <div class="offer-card-title md:text-size-23px text-size-21px font-800">{{ service.title }}</div>
                        <div class="offer-rule" aria-hidden="true"></div>
                        <div class="offer-card-copy md:text-size-16px text-size-15px leading-6 text-left">
                            {{ service.description }}
                        </div>
                        <router-link to="/contact" class="offer-card-link">
                            Learn More
                            <Icon icon="tabler:arrow-right" :size="20" />
                        </router-link>
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

.offer-heading {
    position: relative;
}

.offer-title {
    color: color-mix(in srgb, var(--lightestSlate) 95%, #ffffff);
    position: relative;
    z-index: 1;
    display: inline-block;
    padding: 0 28px;
    background: var(--background);
    line-height: 1.1;
    letter-spacing: 0.08em;
    text-shadow: 0 0 18px rgba(255, 255, 255, 0.12);

    span {
        color: var(--primary);
        text-shadow: 0 0 18px color-mix(in srgb, var(--primary) 45%, transparent);
    }
}

.offer-copy {
    color: color-mix(in srgb, var(--lightestSlate) 74%, transparent);
    letter-spacing: 0.02em;
}

.offer-heading-line {
    position: absolute;
    top: 10px;
    width: 330px;
    height: 28px;
    opacity: 0.6;

    &::before,
    &::after,
    span,
    i {
        content: "";
        position: absolute;
        display: block;
        background: var(--primary);
        box-shadow: 0 0 12px color-mix(in srgb, var(--primary) 55%, transparent);
    }

    &::before {
        top: 13px;
        width: 292px;
        height: 1px;
        opacity: 0.72;
    }

    &::after {
        top: 10px;
        width: 7px;
        height: 7px;
    }

    span {
        width: 28px;
        height: 28px;
        border: 1px solid var(--primary);
        background: transparent;
        box-shadow: inset 0 0 10px color-mix(in srgb, var(--primary) 24%, transparent);
    }

    i {
        width: 4px;
        height: 4px;
        border-radius: 999px;
    }
}

.offer-heading-line-left {
    right: calc(50% + 76px);

    &::before {
        right: 0;
    }

    &::after {
        right: -2px;
    }

    span {
        left: 0;
        top: 0;
    }

    i {
        left: 12px;
        top: 13px;
    }
}

.offer-heading-line-right {
    left: calc(50% + 76px);

    &::before {
        left: 0;
    }

    &::after {
        left: -2px;
    }

    span {
        right: 0;
        top: 0;
    }

    i {
        right: 12px;
        top: 13px;
    }
}

.offer-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 32px;
}

.offer-card {
    position: relative;
    min-height: 314px;
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
    max-width: 290px;
    color: color-mix(in srgb, var(--lightestSlate) 76%, transparent);
}

.offer-card-link {
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    gap: 26px;
    min-width: 162px;
    margin-top: auto;
    padding: 10px 20px;
    border: 1px solid color-mix(in srgb, var(--primary) 46%, transparent);
    border-radius: 6px;
    color: var(--primary);
    font-size: 14px;
    font-weight: 800;
    text-decoration: none;
    transition: background 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;

    &:hover {
        transform: translateY(-2px);
        background: color-mix(in srgb, var(--primary) 8%, transparent);
        box-shadow: 0 0 18px color-mix(in srgb, var(--primary) 22%, transparent);
    }
}

@media (max-width: 960px) {
    .offer-heading-line {
        display: none;
    }

    .offer-grid {
        grid-template-columns: 1fr;
        max-width: 620px;
        width: 100%;
        margin: 0 auto;
    }

    .offer-card {
        min-height: 292px;
    }
}

@media (max-width: 520px) {
    .offer-section {
        margin-top: 80px;
    }

    .offer-grid {
        gap: 18px;
    }

    .offer-card {
        min-height: 320px;
    }

    .offer-card-copy {
        max-width: 100%;
    }
}
</style>
