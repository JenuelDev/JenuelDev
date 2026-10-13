<script setup lang="ts">
import archive from "@/constant/code-challenges-page";
import type { CODE_CHALLENGE } from "@/types/type";
import { Icon } from "@iconify/vue";
import { computed } from "vue";
import { archivePresentation, primaryArchiveLink } from "@/constant/archive-presentation";
const props = withDefaults(
    defineProps<{ limit?: number; title?: string; description?: string; showHeading?: boolean }>(),
    {
        limit: 6,
        title: "Experiments & archive",
        showHeading: true,
    },
);
const visibleChallenges = computed(() => (props.limit ? archive.challenges.slice(0, props.limit) : archive.challenges));
const hasMore = computed(() => props.limit > 0 && archive.challenges.length > props.limit);
const projects = computed(() =>
    visibleChallenges.value.map((code, index) => ({ code, visual: archivePresentation(code, index) })),
);
function primaryLink(code: CODE_CHALLENGE) {
    return primaryArchiveLink(code);
}
</script>
<template>
    <section class="code-challenge" aria-label="Archived projects">
        <header v-if="showHeading" class="archive-heading">
            <h2>{{ title }}</h2>
            <p>{{ description ?? archive.des }}</p>
        </header>
        <div class="archive-grid">
            <article
                v-for="({ code, visual }, index) in projects"
                :id="visual.id"
                :key="visual.id"
                class="archive-card"
                :style="{ '--project-accent': visual.accent }"
            >
                <div class="archive-card-index">
                    <span class="archive-number">{{ String(index + 1).padStart(2, "0") }}</span>
                    <span class="archive-category">{{ visual.category }}</span>
                </div>
                <a
                    :href="primaryLink(code)"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="archive-preview"
                    :aria-label="`Explore ${code.title}`"
                    tabindex="-1"
                >
                    <img
                        v-if="visual.image"
                        :src="visual.image"
                        :alt="`${code.title} project preview`"
                        loading="lazy"
                        width="640"
                        height="360"
                    />
                    <div v-else class="archive-illustration" aria-hidden="true">
                        <span class="archive-illustration-index">{{ String(index + 1).padStart(2, "0") }}</span>
                        <img v-if="visual.logo" :src="visual.logo" alt="" loading="lazy" />
                        <Icon v-else :icon="visual.icon" />
                        <span class="archive-illustration-label">{{ visual.category }}</span>
                    </div>
                </a>
                <div class="archive-card-body">
                    <div class="archive-card-icon" aria-hidden="true">
                        <img v-if="visual.logo" :src="visual.logo" alt="" loading="lazy" width="64" height="64" />
                        <Icon v-else :icon="visual.icon" />
                    </div>
                    <h2>
                        <a
                            v-if="primaryLink(code)"
                            :href="primaryLink(code)"
                            target="_blank"
                            rel="noopener noreferrer"
                            >{{ code.title }}</a
                        ><template v-else>{{ code.title }}</template>
                    </h2>
                    <div class="archive-description" v-html="code.des"></div>
                    <ul class="archive-tech" aria-label="Technology stack">
                        <li v-for="tech in code.techs" :key="tech.name">{{ tech.name }}</li>
                    </ul>
                    <div class="archive-links">
                        <a
                            v-for="link in code.links"
                            :key="link.link"
                            :href="link.link"
                            target="_blank"
                            rel="noopener noreferrer"
                            :aria-label="`${code.title}: ${link.tooltip}`"
                            ><Icon :icon="link.icon" aria-hidden="true" /> {{ link.tooltip }}
                            <Icon icon="tabler:arrow-up-right" aria-hidden="true"
                        /></a>
                    </div>
                </div>
            </article>
        </div>
        <router-link v-if="hasMore" to="/project-archives" class="archive-all"
            >View all projects <Icon icon="tabler:arrow-right"
        /></router-link>
    </section>
</template>
<style scoped lang="scss">
.archive-heading {
    padding: 40px;
}
.archive-heading h2 {
    color: var(--white);
    font-size: 40px;
}
.archive-grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 1px;
    background: var(--craft-line);
    border-bottom: 1px solid var(--craft-line);
}
.archive-card {
    min-width: 0;
    background: var(--background);
    display: flex;
    flex-direction: column;
    border-top: 2px solid transparent;
    transition: border-color 220ms ease;
    &:hover,
    &:focus-within {
        border-top-color: var(--project-accent);
    }
}
.archive-card-index {
    display: flex;
    justify-content: space-between;
    gap: 12px;
    padding: 12px 24px;
    border-bottom: 1px solid var(--craft-line);
    font: 10px var(--craft-mono);
    letter-spacing: 0.06em;
    text-transform: uppercase;
}
.archive-number {
    padding: 4px 8px;
    background: var(--project-accent);
    color: #121316;
}
.archive-category {
    min-width: 0;
    align-self: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.archive-preview {
    display: block;
    aspect-ratio: 16/10;
    overflow: hidden;
    background: var(--lightBackground);
    border-bottom: 1px solid var(--craft-line);
    > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 600ms ease;
    }
}
.archive-card:hover .archive-preview > img {
    transform: scale(1.04);
}
.archive-illustration {
    position: relative;
    height: 100%;
    display: grid;
    place-items: center;
    overflow: hidden;
    color: var(--project-accent);
    background: radial-gradient(
        ellipse at center,
        color-mix(in srgb, var(--project-accent) 18%, transparent),
        transparent 75%
    );
    > svg,
    > img {
        width: 72px;
        height: 72px;
        z-index: 1;
    }
    > img {
        border-radius: 16px;
    }
}
.archive-illustration-index {
    position: absolute;
    right: 14px;
    top: -24px;
    opacity: 0.07;
    font: 700 180px var(--craft-heading);
}
.archive-illustration-label {
    position: absolute;
    bottom: 22px;
    font: 10px var(--craft-mono);
    letter-spacing: 0.12em;
    text-transform: uppercase;
}
.archive-card-body {
    display: flex;
    flex-direction: column;
    padding: 0 24px 28px;
    flex: 1;
}
.archive-card-icon {
    position: relative;
    width: 64px;
    height: 64px;
    display: grid;
    place-items: center;
    margin: -32px 0 20px;
    border-radius: 14px;
    background: var(--project-accent);
    color: #121316;
    font-size: 34px;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: inherit;
    }
}
h2 {
    margin: 0 0 16px;
    font: 600 24px/1.2 var(--craft-heading);
    letter-spacing: -0.035em;
    color: var(--white);
    overflow-wrap: anywhere;
}
h2 a {
    color: inherit;
}
h2 a:hover {
    color: var(--primary);
}
.archive-description {
    font-size: 15px;
    line-height: 1.7;
    margin-bottom: 24px;
    overflow-wrap: anywhere;
}
.archive-description :deep(p) {
    margin: 0;
}
.archive-description :deep(a) {
    color: var(--primary);
}
.archive-links {
    display: flex;
    flex-wrap: wrap;
    gap: 12px 16px;
    margin-top: auto;
    padding-top: 26px;
}
.archive-links a {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    color: var(--white);
    font: 10px var(--craft-mono);
    text-transform: uppercase;
    line-height: 1.6;
}
.archive-links a:hover {
    color: var(--primary);
}
.archive-links svg {
    flex-shrink: 0;
}
.archive-tech {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    padding: 0;
    margin: 0 0 4px;
    font: 9px var(--craft-mono);
    text-transform: uppercase;
    line-height: 1.5;
    li {
        padding: 3px 6px;
        border: 1px solid var(--craft-line);
    }
}
.archive-all {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 24px 28px;
    color: var(--white);
    font: 11px var(--craft-mono);
    text-transform: uppercase;
}
@media (max-width: 1100px) {
    .archive-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
}
@media (max-width: 600px) {
    .archive-grid {
        grid-template-columns: 1fr;
    }
    .archive-card-index,
    .archive-card-body {
        padding-inline: 20px;
    }
    .archive-card-body {
        min-height: 0;
    }
}
</style>
