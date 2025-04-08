<script setup lang="ts">
import { Icon } from "@iconify/vue"
import { computed } from "vue";


const isUrlABlogUrl = computed(() => {
    const url = window.location.href;
    return url.includes("blog");
});
const urlPathName = window.location.pathname;
</script>
<template>
    <div v-scrollanimation class="min-h-100vh md:mt-30 mt-10 max-w-1200px mx-auto">
        <div class="text-center">
            <div class="flex items-center justify-center mb-6 gap-3 flex-wrap">
                <div class="text-2xl text-xl ">
                    <span class="text-[var(--primary)] font-bold">Oops 😢</span>, Page Not Found.
                </div>
                <div class="flex items-center gap-2 flex-wrap">
                    <a href="https://www.linkedin.com/in/jenuelganawed/" target="_blank"
                        class="bg-[var(--primary)] px-5px py-2px rounded-md text-[var(--background)] font-600 opacity-90 hover:opacity-100 flex items-center gap-5px">
                        <Icon icon="tabler:brand-linkedin-filled" class="text-xl" />
                        <span> Get In Touch </span>
                    </a>
                    <RouterLink to="/"
                        class="bg-[var(--primary)] px-5px py-2px rounded-md text-[var(--background)] font-600 opacity-90 hover:opacity-100 flex items-center gap-5px">
                        <Icon icon="tabler:home-filled" class="text-xl" />
                        <span> Home </span>
                    </RouterLink>
                </div>
            </div>
            <div v-if="isUrlABlogUrl" class="mb-10 text-xl">
                🤔 Did you mean this <a :href="`https://blog.jenuel.dev${urlPathName}`" class="text-[var(--primary)]"
                    title="Blog - Jenuel Dev">{{ `https://blog.jenuel.dev${urlPathName}` }}</a>
            </div>
            <h1 class="md:text-5xl text-3xl font-semibold mb-6">
                Programming
            </h1>
            <p class="md:text-2xl text-xl mb-6">
                Programming isn't about what you know; it's about what you can figure out. While having a strong
                foundation and technical knowledge is helpful, the real essence of programming lies in problem-solving
                and adaptability. Technology evolves rapidly, and no one can know everything at all times. New tools,
                frameworks, and languages are constantly emerging, and even seasoned developers regularly encounter
                problems they've never seen before. In these moments, what truly matters isn't how much you know off the
                top of your head, but how well you can break down a problem, search for solutions, and piece together an
                answer. It's about staying curious, asking the right questions, and being comfortable with not knowing
                everything.
            </p>
            <p class="md:text-2xl text-xl mb-6">
                The ability to figure things out—whether by reading documentation, exploring Stack Overflow, or
                experimenting with code—is what separates good programmers from great ones. It's not about memorizing
                every function or command, but about building the confidence and mindset to approach unfamiliar
                territory with determination and a willingness to learn. This is why persistence and patience are just
                as important as technical skill. Even the most experienced developers Google things daily, hit
                roadblocks, and write code that doesn't work on the first try. What makes them successful is their
                mindset: a relentless drive to solve problems, learn from mistakes, and keep going until they find a
                solution.
            </p>
            <p class="md:text-2xl text-xl mb-6">
                In this sense, programming is more like a journey of discovery than a test of knowledge. It's a creative
                process, where understanding how to think like a problem solver is far more powerful than simply
                recalling facts. So if you're new to programming and feel overwhelmed by everything you don’t know,
                remember that it's okay. The key is not to know it all, but to believe that you can figure it out, one
                step at a time.
            </p>

        </div>
    </div>
</template>