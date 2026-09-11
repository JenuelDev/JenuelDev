<script setup lang="ts">
import { computed } from "vue";
import SvgDecoration from "./../SvgDecoration/SvgDecoration.vue";

const yearCount = computed(() => new Date().getFullYear() - 2018);
</script>

<template>
    <section id="about" class="about-section mx-auto w-full max-w-900px px-10px mb-90px relative">
        <h2
            v-scrollanimation
            class="lg:text-size-44px md:text-size-38px text-size-28px font-600 text-[var(--primary)] tracking-tight mb-15px"
        >
            about
        </h2>

        <div v-scrollanimation class="about-body text-lg leading-relaxed max-w-[770px]">
            <p>
                I'm a senior software developer with
                <strong>{{ yearCount }}+ years of experience</strong> building and maintaining web, mobile, and
                desktop applications. My primary stack is Laravel, Vue, TypeScript, PHP, MySQL, and PostgreSQL, with
                production experience in Flutter, Electron, Node.js, and AI-assisted development workflows.
            </p>
            <p>
                I started in software after a career shift from criminology to Information Technology in 2016. Since
                then I've worked on production systems, business applications, APIs, integrations, and independent
                products across multiple platforms.
            </p>
            <p>
                I enjoy solving difficult technical problems, improving systems that already exist, and building
                software that stays maintainable long after a feature ships. Outside of work I play guitar, read, walk,
                and keep learning.
            </p>
        </div>

        <SvgDecoration
            classNames="absolute lg:-right-30 -right-20 top-20 md:block hidden z-20 fill-[var(--primary)] opacity-50"
            :type="3"
        />
    </section>
</template>

<style scoped lang="scss">
.about-section {
    &.a-before-enter {
        opacity: 0;
        transform: translateY(20px);
        transition: 0.3s ease-in;
    }

    &.a-enter {
        opacity: 1;
        transform: translateY(0);
    }
}

.about-body {
    color: color-mix(in srgb, var(--lightestSlate) 82%, transparent);

    p {
        margin: 0 0 22px;

        &:last-child {
            margin-bottom: 0;
        }
    }

    strong {
        color: var(--lightestSlate);
    }
}
</style>
