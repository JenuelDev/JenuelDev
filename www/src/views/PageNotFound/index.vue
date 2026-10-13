<script setup lang="ts">
import CraftPage from "@/components/CraftPage.vue";
import { useRoute } from "vue-router";
import { computed } from "vue";
const route = useRoute();
const blogUrl = computed(() => `https://blog.jenuel.dev${route.path}`);
const isBlogUrl = computed(() => route.path.includes("blog"));
</script>
<template>
    <CraftPage
        label="404 / Page not found"
        title="Page not found"
        description="The page you are looking for could not be found. Return home to explore my work, or get in touch."
        meta="Let's find your way back"
    >
        <template #title>A little <em>off the map.</em></template>
        <div class="craft-actions not-found-actions">
            <router-link to="/" class="craft-button">Back to home</router-link>
            <router-link to="/contact" class="craft-button craft-button-outline">Get in touch</router-link>
        </div>
        <p v-if="isBlogUrl" class="not-found-blog">
            Looking for an article? <a :href="blogUrl">Try this on the blog ↗</a>
        </p>
        <details class="not-found-note">
            <summary>A note on figuring things out</summary>
            <div class="craft-prose">
                <h2 class="md:text-5xl text-3xl font-semibold mb-6">Programming</h2>
                <p class="md:text-2xl text-xl mb-6">
                    Programming isn't about what you know; it's about what you can figure out. While having a strong
                    foundation and technical knowledge is helpful, the real essence of programming lies in
                    problem-solving and adaptability. Technology evolves rapidly, and no one can know everything at all
                    times. New tools, frameworks, and languages are constantly emerging, and even seasoned developers
                    regularly encounter problems they've never seen before. In these moments, what truly matters isn't
                    how much you know off the top of your head, but how well you can break down a problem, search for
                    solutions, and piece together an answer. It's about staying curious, asking the right questions, and
                    being comfortable with not knowing everything.
                </p>
                <p class="md:text-2xl text-xl mb-6">
                    The ability to figure things out, whether by reading documentation, exploring Stack Overflow, or
                    experimenting with code, is what separates good programmers from great ones. It's not about
                    memorizing every function or command, but about building the confidence and mindset to approach
                    unfamiliar territory with determination and a willingness to learn. This is why persistence and
                    patience are just as important as technical skill. Even the most experienced developers Google
                    things daily, hit roadblocks, and write code that doesn't work on the first try. What makes them
                    successful is their mindset: a relentless drive to solve problems, learn from mistakes, and keep
                    going until they find a solution.
                </p>
                <p class="md:text-2xl text-xl mb-6">
                    In this sense, programming is more like a journey of discovery than a test of knowledge. It's a
                    creative process, where understanding how to think like a problem solver is far more powerful than
                    simply recalling facts. So if you're new to programming and feel overwhelmed by everything you don’t
                    know, remember that it's okay. The key is not to know it all, but to believe that you can figure it
                    out, one step at a time.
                </p>
            </div>
        </details>
    </CraftPage>
</template>
<style scoped lang="scss">
.not-found-actions {
    justify-content: flex-start;
}
.not-found-blog {
    margin-top: 32px;
}
.not-found-blog a {
    color: var(--primary);
}
.not-found-note {
    margin-top: 48px;
    border-top: 1px solid var(--craft-line);
}
.not-found-note summary {
    padding: 24px 0;
    color: var(--lightSlate);
    cursor: pointer;
    font: 11px var(--craft-mono);
    text-transform: uppercase;
}
</style>
