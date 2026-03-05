<script setup lang="ts">
import SvgDecoration from "./../SvgDecoration/SvgDecoration.vue";
import YoutubeButton from "@/components/Button/YoutubeButton.vue";
import { Icon } from "@iconify/vue";

const yearCount = () => {
    return new Date().getFullYear() - 2018;
};
</script>
<template>
    <section class="mx-auto mb-100px flex flex-col items-center max-w-900px visible px-10px lg:mt-130px">
        <div class="flex lg:flex-row flex-col items-center gap-50px relative">
            <div class="lg:order-1 order-2">
                <div class="lg:text-right text-center max-w-500px">
                    <div>
                        <h3 class="md:text-3xl text-2xl font-500 mb-2">Hi! I’m Jenuel, & I'm a</h3>
                        <h1 class="md:text-5xl text-3xl font-600 text-[var(--primary)] mb-2">Software Developer</h1>
                        <h2 class="md:text-3xl text-2xl text-[var(--lightestSlate)] mb-2">
                            I create web apps that are engaging, accessible and scalable.
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
                                <span> Get In Touch </span>
                            </a>
                        </div>
                        <div>
                            <a
                                href="/Jenuel Ganawed - Resume.pdf"
                                target="_blank"
                                class="bg-[var(--primary)] px-25px py-10px rounded-md text-[var(--background)] font-600 opacity-90 hover:opacity-100 cursor-pointer whitespace-nowrap flex items-center gap-5px"
                            >
                                <Icon icon="tabler:file-type-doc" class="text-2xl" />
                                <span> Resume </span>
                            </a>
                        </div>
                        <YoutubeButton />
                    </div>
                </div>
            </div>
            <div class="lg:order-2 order-1 z-50 relative">
                <div class="overflow-hidden rounded-lg">
                    <div style="position: relative; overflow: hidden">
                        <img
                            class="max-w-300px w-[100%] w-[300px] profile-picture-style"
                            loading="eager"
                            fetchpriority="high"
                            decoding="async"
                            width="300px"
                            height="300px"
                            src="/profile_image-768.webp"
                            srcset="/profile_image-480.webp 480w, /profile_image-768.webp 768w, /profile_image.webp 1024w"
                            sizes="(max-width: 768px) 280px, 300px"
                            alt="Jenuel Ganawed - Profile Picture"
                        />
                    </div>
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
        <div
            v-scrollanimation
            class="md:text-2xl text-xl md:px-10px w-[100%] max-w-[770px] pt-100px md:leading-relaxed leading-relaxed relative"
            style="transition-delay: 100ms"
        >
            <p class="mb-30px">
                In 2016, I made a pivotal career shift from criminology to Information Technology. That transition
                introduced me to software development and set the direction for the work I do today.
            </p>
            <p class="mb-30px">
                With over <strong>{{ yearCount() }} years of experience as a software developer</strong>, I have grown
                in fast-paced environments, collaborated with talented engineers, and contributed to impactful
                projects.
            </p>
            <p class="mb-30px">
                <strong>Attention to detail is a core principle</strong>, from writing efficient code to refining user
                interactions. This mindset helps deliver digital experiences that are scalable, engaging, and
                accessible.
            </p>
            <p class="mb-30px">
                Outside of coding, I enjoy playing guitar, reading, walking, home workouts, good food, and continuous
                learning.
            </p>
            <SvgDecoration
                classNames="absolute lg:-right-30 -right-20 top-90 md:block hidden z-20 fill-[var(--primary)] opacity-50"
                :type="3"
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
</style>
