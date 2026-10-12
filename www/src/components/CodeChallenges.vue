<script setup lang="ts">
import archive from "@/constant/code-challenges-page";
import type { CODE_CHALLENGE } from "@/types/type";
import { Icon } from "@iconify/vue";
import { computed } from "vue";
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
function primaryLink(code: CODE_CHALLENGE) {
    return code.links?.find((link) => link.icon === "tabler:external-link")?.link ?? code.links?.[0]?.link;
}
</script>
<template>
    <section class="code-challenge" aria-label="Archived projects">
        <header v-if="showHeading" class="archive-heading">
            <h2>{{ title }}</h2>
            <p>{{ description ?? archive.des }}</p>
        </header>
        <div class="archive-grid">
            <article v-for="(code, index) in visibleChallenges" :key="code.title" class="archive-card">
                <div class="archive-card-index">
                    <span>Project / {{ code.techs[0]?.name || "Experiment" }}</span
                    ><span>{{ String(index + 1).padStart(2, "0") }}</span>
                </div>
                <div class="archive-card-body">
                    <Icon :icon="code.headIcon || 'tabler:folder'" class="archive-card-icon" aria-hidden="true" />
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
                    <ul class="archive-tech" aria-label="Technology stack">
                        <li v-for="tech in code.techs" :key="tech.name">{{ tech.name }}</li>
                    </ul>
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
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1px;
    background: var(--craft-line);
    border-bottom: 1px solid var(--craft-line);
}
.archive-card {
    min-width: 0;
    background: var(--background);
}
.archive-card-index {
    display: flex;
    justify-content: space-between;
    gap: 12px;
    padding: 14px 28px;
    border-bottom: 1px solid var(--craft-line);
    font: 10px var(--craft-mono);
    letter-spacing: 0.06em;
    text-transform: uppercase;
}
.archive-card-body {
    display: flex;
    flex-direction: column;
    padding: 32px 28px;
    min-height: 340px;
    height: calc(100% - 42px);
}
.archive-card-icon {
    color: var(--primary);
    font-size: 28px;
    margin-bottom: 26px;
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
    gap: 12px 20px;
    margin-top: auto;
    padding-bottom: 24px;
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
    gap: 10px 16px;
    padding: 20px 0 0;
    margin: 0;
    border-top: 1px solid var(--craft-line);
    font: 10px var(--craft-mono);
    text-transform: uppercase;
    line-height: 1.5;
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
@media (max-width: 1000px) {
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
