<script setup lang="ts">
import { computed } from "vue";
import SvgDecoration from "./../SvgDecoration/SvgDecoration.vue";
import YoutubeButton from "@/components/Button/YoutubeButton.vue";
import { Icon } from "@iconify/vue";

const yearCount = computed(() => new Date().getFullYear() - 2018);
const showYoutubeButton = false;

const primaryStack = ["Laravel", "Vue", "TypeScript", "PHP"];
</script>
<template>
    <section id="about-me" class="mx-auto mb-100px flex flex-col items-center max-w-900px visible px-10px lg:mt-130px">
        <div class="flex lg:flex-row flex-col items-center gap-50px relative">
            <div class="lg:order-1 order-2">
                <div class="lg:text-right text-center max-w-520px">
                    <div>
                        <p class="md:text-2xl text-xl font-500 mb-2">Hi, I'm Jenuel</p>
                        <h1 class="md:text-5xl text-3xl font-600 text-[var(--primary)] mb-3">
                            <span class="sr-only">Jenuel Ganawed — </span>Senior Full-Stack Developer
                        </h1>
                        <ul class="hero-stack mb-3 flex lg:justify-end justify-center flex-wrap gap-x-10px gap-y-4px">
                            <li v-for="tech in primaryStack" :key="tech">{{ tech }}</li>
                        </ul>
                        <h2 class="md:text-xl text-lg text-[var(--lightestSlate)] leading-relaxed mb-2">
                            I build and maintain production web applications, APIs, and business systems, with
                            <strong>{{ yearCount }}+ years</strong> of professional software development experience.
                        </h2>
                    </div>
                    <div class="mt-30px flex lg:justify-end justify-center flex-wrap gap-20px items-center">
                        <div>
                            <a
                                href="https://www.linkedin.com/in/jenuelganawed/"
                                target="_blank"
                                class="bg-[var(--primary)] px-25px py-10px rounded-md text-[var(--background)] font-600 opacity-90 hover:opacity-100 flex items-center gap-5px"
                            >
                                <Icon icon="tabler:brand-linkedin-filled" class="text-2xl" />
                                <span> Contact Me </span>
                            </a>
                        </div>
                        <div>
                            <a
                                href="/Jenuel Ganawed - Resume.pdf"
                                target="_blank"
                                class="bg-[var(--primary)] px-25px py-10px rounded-md text-[var(--background)] font-600 opacity-90 hover:opacity-100 cursor-pointer whitespace-nowrap flex items-center gap-5px"
                            >
                                <Icon icon="tabler:file-type-doc" class="text-2xl" />
                                <span> View Resume </span>
                            </a>
                        </div>
                        <YoutubeButton v-if="showYoutubeButton" />
                    </div>

                    <div class="hero-meta-bar mt-22px flex lg:justify-end justify-center flex-wrap gap-10px">
                        <span class="hero-meta-chip hero-meta-chip-highlight">
                            <Icon icon="tabler:world" />
                            Open to fully remote roles
                        </span>
                        <span class="hero-meta-chip">
                            <Icon icon="tabler:map-pin" />
                            Philippines
                        </span>
                        <a href="mailto:me@jenuel.dev" class="hero-meta-chip">
                            <Icon icon="tabler:mail" />
                            me@jenuel.dev
                        </a>
                    </div>
                </div>
            </div>
            <div class="lg:order-2 order-1 z-50 relative">
                <div class="profile-image-cover overflow-hidden rounded-lg">
                    <img
                        class="max-w-300px w-[300px] profile-picture-style"
                        loading="eager"
                        fetchpriority="high"
                        decoding="async"
                        width="300"
                        height="300"
                        src="/profile_image-640.webp"
                        srcset="
                            /profile_image-480.webp  480w,
                            /profile_image-640.webp  640w,
                            /profile_image-768.webp  768w,
                            /profile_image.webp     1024w
                        "
                        sizes="(max-width: 768px) 280px, 300px"
                        alt="Jenuel Ganawed - Profile Picture"
                    />
                </div>
            </div>
            <SvgDecoration
                classNames="absolute md:visible invisible left-[-50px] bottom-[-40px] transform rotate-[-180deg] fill-[var(--primary)] opacity-50"
                :type="1"
            />
            <SvgDecoration
                classNames="absolute md:right-[-56px] md:visible invisible z-20 fill-[var(--primary)] opacity-50"
                :type="2"
            />
        </div>
    </section>
</template>

<style lang="scss">
.a-before-enter {
    opacity: 0;
    transform: translateY(20px);
    transition: 0.3s ease-in;
}

.a-enter {
    opacity: 1;
    transform: translateY(0);
}

.hero-stack {
    @apply list-none p-0 m-0 text-base font-600;
    color: var(--primary);

    li + li::before {
        content: "•";
        margin-right: 10px;
        opacity: 0.55;
    }
}

.hero-meta-chip {
    @apply inline-flex items-center gap-7px px-14px py-7px rounded-full text-sm font-500 no-underline whitespace-nowrap;
    border: 1px solid color-mix(in srgb, var(--primary) 22%, transparent);
    background: color-mix(in srgb, var(--background) 90%, #001e2e);
    color: color-mix(in srgb, var(--lightestSlate) 80%, transparent);
    transition: border-color 0.2s ease, color 0.2s ease;

    svg {
        @apply w-15px h-15px flex-shrink-0;
        color: var(--primary);
    }

    &:hover {
        border-color: color-mix(in srgb, var(--primary) 48%, transparent);
        color: var(--lightestSlate);
    }

    &.hero-meta-chip-highlight {
        border-color: color-mix(in srgb, var(--primary) 55%, transparent);
        background: color-mix(in srgb, var(--primary) 10%, transparent);
        color: var(--primary);
        font-weight: 700;
    }
}
</style>
