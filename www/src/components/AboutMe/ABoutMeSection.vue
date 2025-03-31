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
                        <h3 class="md:text-3xl text-2xl font-500 mb-2"> Hi! I’m Jenuel, and I'm a</h3>
                        <h1 class="md:text-5xl text-3xl font-600 text-[var(--primary)] mb-2">
                            Software Developer
                        </h1>
                        <h2 class="md:text-3xl text-2xl text-[var(--lightestSlate)] mb-2">
                            I create web apps that are engaging, accessible and scalable.
                        </h2>
                    </div>
                    <div class="mt-30px flex lg:justify-end justify-center flex-wrap gap-20px items-center">
                        <div>
                            <router-link to="/contact"
                                class="bg-[var(--primary)] px-25px py-10px rounded-md text-[var(--background)] font-600 opacity-90 hover:opacity-100 flex items-center gap-5px">
                                <Icon icon="tabler:mail" class="text-2xl" />
                                <span> Get In Touch </span>
                            </router-link>
                        </div>
                        <div>
                            <a href="https://drive.google.com/file/d/1CEMto0ubGMVBJNCLq-QQN8-aFsYUo2Dd/view?usp=sharing"
                                target="_blank"
                                class="bg-[var(--primary)] px-25px py-10px rounded-md text-[var(--background)] font-600 opacity-90 hover:opacity-100 cursor-pointer whitespace-nowrap flex items-center gap-5px">
                                <Icon icon="tabler:file-type-doc" class="text-2xl" />
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
            class="md:text-2xl text-xl md:px-10px w-[100%] max-w-[770px] pt-100px md:leading-relaxed leading-relaxed relative">
            <p class="mb-30px">
                Back in 2016, I decided to make a big change, switching from studying criminology to diving into the
                exciting world of Information Technology. That's when I discovered my passion for software development.
            </p>
            <p class="mb-30px">
                Now, with over <strong>{{ yearCount() }} years of experience as a software developer</strong>, I've had
                the chance to
                work in a constantly changing field, collaborating with other coding enthusiasts and contributing to
                some amazing projects.
            </p>
            <p class="mb-30px">
                <strong>I'm all about the details</strong>, whether it's writing efficient code or perfecting a recipe.
                I believe that paying attention to the little things is key to building scalable, engaging, and
                accessible digital experiences.
            </p>
            <p class="mb-30px">
                When I'm not coding, I like to mix things up. You might find me strumming my guitar (I'm no rockstar,
                but it's fun!), reading a good book, going for walks, doing home workouts, enjoying a good meal, or
                learning something new.
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
