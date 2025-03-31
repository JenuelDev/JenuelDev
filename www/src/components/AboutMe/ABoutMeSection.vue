<script setup lang="ts">
import SvgDecoration from './../SvgDecoration/SvgDecoration.vue';
import { Icon } from '@iconify/vue';

const yearCount = () => {
    return new Date().getFullYear() - 2017;
};
</script>
<template>
    <section v-scrollanimation
        class="mx-auto mb-100px flex flex-col items-center max-w-[900px] visible opacity-100 z-10 px-10px lg:mt-130px">
        <div class="flex lg:flex-row flex-col items-center gap-[50px] relative">
            <div class="lg:order-1 order-2">
                <div class="lg:text-right text-center max-w-500px">
                    <div>
                        <h3 class="md:text-3xl text-2xl font-500"> Hi! I’m Jenuel, and I'm a</h3>
                        <h1 class="md:text-5xl text-3xl font-600 text-[var(--primary)] tracking-tight">
                            Software Developer
                        </h1>
                        <h2 class="md:text-3xl text-2xl text-[var(--lightestSlate)] tracking-tight">
                            I create web apps that are engaging, accessible and scalable.
                        </h2>
                    </div>
                    <div class="mt-30px flex lg:justify-end justify-center flex-wrap gap-20px items-center">
                        <div>
                            <router-link to="/contact"
                                class="bg-[var(--primary)] px-25px py-10px rounded-md text-[var(--background)] font-600 opacity-90 hover:opacity-100 flex items-center gap-5px">
                                <Icon icon="tabler:mail" size="20" />
                                <span> Get In Touch </span>
                            </router-link>
                        </div>
                        <div>
                            <a href="https://drive.google.com/file/d/1CEMto0ubGMVBJNCLq-QQN8-aFsYUo2Dd/view?usp=sharing"
                                target="_blank"
                                class="bg-[var(--primary)] px-25px py-10px rounded-md text-[var(--background)] font-600 opacity-90 hover:opacity-100 cursor-pointer whitespace-nowrap flex items-center gap-5px">
                                <Icon icon="tabler:file-type-doc" size="20" />
                                <span> Resume </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="lg:order-2 order-1 z-50 relative">
                <div class="overflow-hidden rounded-lg">
                    <div style="position: relative; overflow: hidden">
                        <img class="max-w-300px w-[100%] w-[300px] profile-picture-style" loading="lazy" width="300px"
                            src="./../../assets/images/profileImage.webp" alt="Jenuel Ganawed - Profile Picture" />
                    </div>
                </div>
            </div>
            <SvgDecoration
                classNames="absolute md:visible invisible left-[-50px] bottom-[-40px] transform rotate-[-180deg] fill-[var(--primary)] opacity-50"
                :type="1" />
            <SvgDecoration
                classNames="absolute md:right-[-56px] md:visible invisible z-20 fill-[var(--primary)] opacity-50"
                :type="2" />
        </div>
        <div
            class="md:text-size-24px text-size-20px md:px-10px w-[100%] max-w-[770px] pt-100px md:leading-relaxed leading-relaxed relative">
            <p class="mb-30px">
                My name is Jenuel Ganawed or call me BroJenuel. I’m a developer with a full-stack background and a keen
                eye for good design. I love to make complex things
                simple and joy to use. Currently, I focus on building web apps with VueJs(v2)(v3) and Laravel.
            </p>
            <p class="mb-30px">
                Over the past {{ yearCount() }} years, I’ve gained experience across some aspects of the application
                lifecycle, including frontend, backend, and dev-ops.
                It allows me to take full ownership of a project from design to implementation and deployment.
            </p>
            <SvgDecoration
                classNames="absolute lg:-right-30 -right-20 top-90 md:block hidden z-20 fill-[var(--primary)] opacity-50"
                :type="3" />
        </div>
    </section>
</template>

<style lang="scss">
.about-me {
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
</style>
