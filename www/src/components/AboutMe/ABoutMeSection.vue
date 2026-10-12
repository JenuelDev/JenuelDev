<script setup lang="ts">
import { career } from "@/constant/career";
import SvgDecoration from "./../SvgDecoration/SvgDecoration.vue";
import YoutubeButton from "@/components/Button/YoutubeButton.vue";
import { Icon } from "@iconify/vue";

const showYoutubeButton = false;
const showAvailability = false;
</script>
<template>
    <section id="about-me" class="mx-auto mb-100px flex flex-col items-center max-w-900px visible px-10px lg:mt-130px">
        <div class="flex lg:flex-row flex-col items-center gap-50px relative">
            <div class="order-1">
                <div class="lg:text-right text-center max-w-520px">
                    <div>
                        <p class="md:text-2xl text-xl font-500 mb-2">Hi, I'm Jenuel</p>
                        <h1 class="md:text-5xl text-3xl font-600 text-[var(--primary)] mb-3">
                            <span class="sr-only">Jenuel Ganawed: </span>Senior Full-Stack Developer
                        </h1>
                        <p class="md:text-xl text-lg text-[var(--lightestSlate)] leading-relaxed mb-2">
                            I build and maintain software applications, with professional experience since
                            <strong>2018</strong>.
                        </p>
                    </div>
                    <div class="mt-30px flex lg:justify-end justify-center flex-wrap gap-20px items-center">
                        <div>
                            <a
                                :href="career.emailHref"
                                class="bg-[var(--primary)] px-25px py-10px rounded-md text-[var(--background)] font-600 opacity-90 hover:opacity-100 flex items-center gap-5px"
                            >
                                <Icon icon="tabler:mail" class="text-2xl" />
                                <span> Discuss a role </span>
                            </a>
                        </div>
                        <div>
                            <a
                                href="/Jenuel Ganawed - Resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="bg-[var(--primary)] px-25px py-10px rounded-md text-[var(--background)] font-600 opacity-90 hover:opacity-100 cursor-pointer whitespace-nowrap flex items-center gap-5px"
                            >
                                <Icon icon="tabler:file-type-doc" class="text-2xl" />
                                <span> View Resume </span>
                            </a>
                        </div>
                        <a href="#projects" class="hero-work-link"
                            >Explore my products <span aria-hidden="true">↓</span></a
                        >
                        <YoutubeButton v-if="showYoutubeButton" />
                    </div>

                    <div class="hero-meta-bar mt-22px flex lg:justify-end justify-center flex-wrap gap-10px">
                        <span v-if="showAvailability" class="hero-availability">
                            <Icon icon="tabler:world" />
                            {{ career.availability }}
                        </span>
                        <span class="hero-meta-chip">
                            <Icon icon="tabler:map-pin" />
                            Philippines · UTC+8
                        </span>
                        <a
                            href="https://www.linkedin.com/in/jenuelganawed/"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="hero-meta-chip"
                        >
                            <Icon icon="tabler:brand-linkedin" />
                            LinkedIn
                        </a>
                    </div>
                </div>
            </div>
            <div class="order-2 z-50 relative hero-portrait">
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
                        sizes="(max-width: 1023px) 160px, 300px"
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

.hero-meta-chip {
    @apply inline-flex items-center gap-7px px-14px py-7px rounded-full text-sm font-500 no-underline whitespace-nowrap;
    border: 1px solid color-mix(in srgb, var(--primary) 22%, transparent);
    background: color-mix(in srgb, var(--background) 90%, #001e2e);
    color: color-mix(in srgb, var(--lightestSlate) 80%, transparent);
    transition:
        border-color 0.2s ease,
        color 0.2s ease;

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
.hero-availability {
    display: inline-flex;
    align-items: center;
    justify-content: inherit;
    gap: 8px;
    width: 100%;
    color: var(--lightestSlate);
    font-size: 14px;
    line-height: 1.6;
}
.hero-availability svg {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
}
.hero-work-link {
    color: var(--primary);
    font-weight: 600;
    padding: 8px 0;
}
@media (max-width: 1023px) {
    .hero-portrait img {
        width: 160px;
        height: 160px;
    }
}
</style>
