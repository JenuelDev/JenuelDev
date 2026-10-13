<script setup lang="ts">
import CraftPage from "@/components/CraftPage.vue";
import CodeChallenges from "@/components/CodeChallenges.vue";
import archive from "@/constant/code-challenges-page";
import { archivePresentation } from "@/constant/archive-presentation";
import { Icon } from "@iconify/vue";
import ScrollSectionRail from "@/components/ScrollSectionRail.vue";
import { onMounted, onUnmounted, ref } from "vue";

const projects = archive.challenges.map((project, index) => ({ project, visual: archivePresentation(project, index) }));
const sections = [
    { id: "archive-intro", label: "Project archive" },
    { id: "project-lineup", label: "The lineup" },
    { id: "archive-next", label: "Keep exploring" },
];
const activeSection = ref("archive-intro");
let frame = 0;
function updateSection() {
    frame = 0;
    const viewingLine = Math.max(64, window.innerHeight * 0.25);
    let current = "archive-intro";
    for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element && element.getBoundingClientRect().top <= viewingLine) current = section.id;
    }
    activeSection.value = current;
}
function scheduleUpdate() {
    if (!frame) frame = requestAnimationFrame(updateSection);
}
onMounted(() => {
    updateSection();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
});
onUnmounted(() => {
    cancelAnimationFrame(frame);
    window.removeEventListener("scroll", scheduleUpdate);
    window.removeEventListener("resize", scheduleUpdate);
});
</script>
<template>
    <div class="archive-route">
        <CraftPage
            class="archive-page"
            heading-id="archive-intro"
            label="01 / Project archive"
            title="Experiments & archive"
            :description="archive.des"
            :meta="`${archive.challenges.length} projects & experiments`"
            flush
        >
            <template #title>Small projects. <span class="archive-title-accent">Big curiosity.</span></template>
            <template #intro>
                <div class="archive-intro-actions">
                    <router-link :to="{ path: '/project-archives', hash: '#project-lineup' }" class="craft-button">
                        <Icon icon="tabler:apps" /> Explore the projects
                    </router-link>
                    <a
                        href="https://github.com/JenuelDev"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="craft-button craft-button-outline"
                    >
                        <Icon icon="tabler:brand-github" /> Browse on GitHub
                    </a>
                    <router-link to="/" class="craft-button craft-button-outline"
                        ><Icon icon="tabler:arrow-left" /> Back to home</router-link
                    >
                </div>
                <p class="archive-intro-note">
                    Explore the tools, browse the source, and see what each project is built with.
                </p>
                <nav class="archive-icon-strip" aria-label="Jump to a project">
                    <router-link
                        v-for="{ project, visual } in projects"
                        :key="visual.id"
                        :to="{ path: '/project-archives', hash: `#${visual.id}` }"
                        :aria-label="`Jump to ${project.title}`"
                        :style="{ '--project-accent': visual.accent }"
                    >
                        <span class="archive-strip-icon">
                            <img v-if="visual.logo" :src="visual.logo" alt="" width="64" height="64" />
                            <Icon v-else :icon="visual.icon" aria-hidden="true" />
                        </span>
                        <span class="archive-strip-name">{{ project.title }}</span>
                    </router-link>
                </nav>
            </template>
            <section id="project-lineup" class="archive-lineup" aria-label="Project lineup">
                <div class="section-index"><span>02 / The lineup</span><span>Pick a project to explore</span></div>
                <CodeChallenges :limit="0" :show-heading="false" />
            </section>
            <section id="archive-next" class="archive-next" aria-labelledby="archive-next-heading">
                <div class="section-index">
                    <span>03 / Keep exploring</span><span>From experiments to products</span>
                </div>
                <div class="archive-next-body">
                    <h2 id="archive-next-heading">There's more <em>in the making.</em></h2>
                    <p>See the products I build and maintain, or follow my work and experiments on GitHub.</p>
                    <div class="archive-intro-actions">
                        <router-link :to="{ path: '/', hash: '#projects' }" class="craft-button"
                            >View selected work <Icon icon="tabler:arrow-right"
                        /></router-link>
                        <a
                            href="https://github.com/JenuelDev"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="craft-button craft-button-outline"
                            >Follow on GitHub <Icon icon="tabler:arrow-up-right"
                        /></a>
                    </div>
                </div>
            </section>
        </CraftPage>
        <ScrollSectionRail path="/project-archives" :sections="sections" :active-section="activeSection" />
    </div>
</template>

<style scoped lang="scss">
.archive-page :deep(.craft-page-back) {
    display: none;
}
.archive-page :deep(.craft-page-heading) {
    padding-top: 80px;
}
.archive-title-accent {
    color: var(--primary);
}
.archive-intro-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 32px;
}
.archive-intro-note {
    margin: 22px 0 0;
    font-size: 15px;
    line-height: 1.7;
}
.archive-icon-strip {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(56px, 1fr));
    gap: 20px 14px;
    margin-top: 48px;
    a {
        display: flex;
        flex-direction: column;
        align-items: center;
        min-width: 0;
        gap: 10px;
        color: var(--lightSlate);
    }
    a:hover,
    a:focus-visible {
        color: var(--white);
    }
}
.archive-strip-icon {
    display: grid;
    place-items: center;
    width: min(64px, 100%);
    aspect-ratio: 1;
    border-radius: 14px;
    color: #121316;
    background: var(--project-accent);
    transition: transform 220ms ease;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: inherit;
    }
    svg {
        font-size: 32px;
    }
}
.archive-icon-strip a:hover .archive-strip-icon {
    transform: translateY(-4px);
}
.archive-strip-name {
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 10px;
}
.archive-lineup,
.archive-next {
    position: relative;
}
.archive-lineup::before,
.archive-next::before {
    content: "+";
    position: absolute;
    top: -9px;
    left: -5px;
    color: var(--lightSlate);
    font: 14px var(--craft-mono);
    pointer-events: none;
}
.archive-lineup::after,
.archive-next::after {
    content: "+";
    position: absolute;
    top: -9px;
    right: -5px;
    color: var(--lightSlate);
    font: 14px var(--craft-mono);
    pointer-events: none;
}
.archive-next {
    border-top: 1px solid var(--craft-line);
}
.archive-next-body {
    padding: 80px 40px;
    h2 {
        margin: 0 0 24px;
        color: var(--white);
        font: 600 clamp(32px, 4vw, 56px) / 1.1 var(--craft-heading);
        letter-spacing: -0.045em;
    }
    p {
        max-width: 640px;
        font-size: 18px;
        line-height: 1.7;
    }
}
@media (max-width: 800px) {
    .archive-page :deep(.craft-page-heading) {
        padding-top: 48px;
    }
    .archive-next-body {
        padding: 56px 20px;
    }
    .archive-icon-strip {
        grid-template-columns: repeat(auto-fit, minmax(56px, 1fr));
        gap: 20px 12px;
    }
}
</style>
