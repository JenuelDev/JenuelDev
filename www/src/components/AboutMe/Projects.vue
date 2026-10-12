<script setup lang="ts">
import Project from "@/constant/projects";
import { Icon } from "@iconify/vue";
</script>
<template>
    <section id="projects" class="selected-work mx-auto max-w-900px px-10px mb-90px" aria-labelledby="projects-heading">
        <div class="section-index"><span>01 / Selected work</span><span>Independently built & maintained</span></div>
        <div class="section-heading">
            <h2
                id="projects-heading"
                class="lg:text-size-44px md:text-size-38px text-size-28px font-600 text-[var(--primary)] tracking-tight mb-15px"
            >
                Software for <em>everyday life.</em>
            </h2>
            <p class="section-intro">Independent apps I design, build, and maintain across web, mobile, and desktop.</p>
        </div>
        <div class="craft-project-grid">
            <article v-for="(work, index) in Project.works" :id="work.id" :key="work.id" class="case-study">
                <div class="project-card-index">
                    <span>{{ work.overline }}</span
                    ><span>{{ String(index + 1).padStart(2, "0") }}</span>
                </div>
                <div class="project-layout">
                    <div class="project-intro">
                        <header class="project-heading">
                            <img :src="work.logo" alt="" loading="lazy" width="56" height="56" />
                            <div>
                                <p class="project-overline">{{ work.overline }} · {{ work.platforms.join(" / ") }}</p>
                                <h3>{{ work.title }}</h3>
                            </div>
                        </header>
                        <p class="project-summary">{{ work.summary }}</p>
                        <div class="project-links">
                            <a
                                :href="work.imageLink"
                                target="_blank"
                                rel="noopener noreferrer"
                                :aria-label="'Visit ' + work.title + ' product website'"
                            >
                                {{
                                    work.links.find((link) => link.link === work.imageLink)?.tooltip || "Visit product"
                                }}
                                <Icon icon="tabler:arrow-up-right" aria-hidden="true" />
                            </a>
                            <a
                                v-for="link in work.links.filter((link) => link.link !== work.imageLink)"
                                :key="link.link"
                                :href="link.link"
                                :target="link.link.startsWith('ms-windows-store:') ? undefined : '_blank'"
                                rel="noopener noreferrer"
                                :aria-label="work.title + ': ' + link.tooltip"
                            >
                                {{ link.tooltip === "View source on GitHub" ? "View source" : link.tooltip }}
                                <Icon :icon="link.icon || 'tabler:brand-github'" aria-hidden="true" />
                            </a>
                        </div>
                    </div>
                    <a
                        :href="work.imageLink"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="project-screenshot"
                        :aria-label="'Visit ' + work.title + ' product website'"
                    >
                        <img :src="work.img" :alt="work.title + ' application preview'" loading="lazy" />
                    </a>
                </div>
                <ul class="project-features" aria-label="Product capabilities">
                    <li v-for="feature in work.features" :key="feature.title">
                        <Icon :icon="feature.icon" class="feature-icon" aria-hidden="true" />
                        <h4>{{ feature.title }}</h4>
                        <p>{{ feature.description }}</p>
                    </li>
                </ul>
                <div class="project-contribution">
                    <p>{{ work.role }}</p>
                </div>
                <ul class="project-tech" aria-label="Technology stack">
                    <li v-for="tech in work.techs" :key="tech">{{ tech }}</li>
                </ul>
                <details class="project-architecture">
                    <summary>Explore the architecture <Icon icon="tabler:chevron-down" aria-hidden="true" /></summary>
                    <div class="architecture-content">
                        <h4>The challenge</h4>
                        <p>{{ work.problem }}</p>
                        <h4>How it is built</h4>
                        <p>{{ work.implementation }}</p>
                        <a
                            :href="
                                'mailto:me@jenuel.dev?subject=' +
                                encodeURIComponent('Architecture discussion: ' + work.title)
                            "
                        >
                            Discuss the architecture <Icon icon="tabler:mail" aria-hidden="true" />
                        </a>
                    </div>
                </details>
            </article>
        </div>
        <router-link to="/project-archives" class="archive-link"
            >View more projects and open-source work <span aria-hidden="true">→</span></router-link
        >
    </section>
</template>
<style scoped lang="scss">
.craft-project-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
}
.case-study {
    min-width: 0;
    border-top: 1px solid var(--craft-line);
}
.case-study:nth-child(odd) {
    border-right: 1px solid var(--craft-line);
}
.project-card-index {
    display: flex;
    justify-content: space-between;
    padding: 14px 32px;
    font: 11px var(--craft-mono);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    border-bottom: 1px solid var(--craft-line);
}
.project-layout {
    display: flex;
    flex-direction: column;
}
.project-screenshot {
    order: -1;
    display: block;
    width: 100%;
    aspect-ratio: 16 / 9;
    overflow: hidden;
    background: var(--lightBackground);
    border-bottom: 1px solid var(--craft-line);
}
.project-screenshot img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s;
}
.project-screenshot:hover img {
    transform: scale(1.03);
}
.project-intro {
    width: 100%;
    padding: 28px 32px 0;
}
.project-heading {
    display: flex;
    align-items: center;
    gap: 14px;
    margin-bottom: 16px;
}
.project-heading img {
    width: 36px;
    height: 36px;
    border-radius: 6px;
}
.project-heading h3 {
    font: 600 26px var(--craft-heading);
    color: var(--white);
    margin: 0;
    letter-spacing: -0.04em;
}
.project-overline {
    font: 10px var(--craft-mono);
    text-transform: uppercase;
    letter-spacing: 0.04em;
    margin: 0 0 6px;
}
.project-summary {
    font-size: 16px;
    line-height: 1.65;
    margin: 0 0 16px;
}
.project-links {
    display: flex;
    flex-wrap: wrap;
    gap: 6px 18px;
}
.project-links a {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font: 10px var(--craft-mono);
    text-transform: uppercase;
    color: var(--white);
    padding: 8px 0;
}
.project-links a:hover {
    color: var(--primary);
    text-decoration: underline;
}
.project-features {
    list-style: none;
    margin: 24px 32px 0;
    padding: 20px 0;
    border-block: 1px solid var(--craft-line);
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 16px;
}
.feature-icon {
    font-size: 20px;
    margin-bottom: 10px;
    color: var(--white);
}
.project-features h4 {
    color: var(--white);
    font-size: 13px;
    font-weight: 600;
    margin: 0 0 8px;
}
.project-features p,
.project-contribution p,
.architecture-content p {
    font-size: 13px;
    line-height: 1.7;
    margin: 0;
}
.project-contribution {
    padding: 20px 32px 0;
}
.project-tech {
    display: flex;
    flex-wrap: wrap;
    gap: 8px 14px;
    list-style: none;
    padding: 0 32px;
    margin: 20px 0;
    font: 10px var(--craft-mono);
    text-transform: uppercase;
}
.project-architecture {
    margin: 0 32px 24px;
    border-top: 1px solid var(--craft-line);
}
.project-architecture summary {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 44px;
    cursor: pointer;
    font: 10px var(--craft-mono);
    text-transform: uppercase;
    list-style: none;
    color: var(--white);
}
.project-architecture summary::-webkit-details-marker {
    display: none;
}
.project-architecture[open] summary svg {
    transform: rotate(180deg);
}
.architecture-content h4 {
    color: var(--white);
    margin: 14px 0 6px;
}
.architecture-content a {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    margin-top: 18px;
    color: var(--primary);
    font-size: 13px;
}
.archive-link {
    display: block;
    border-top: 1px solid var(--craft-line);
    padding: 24px 32px;
    color: var(--white);
    font: 11px var(--craft-mono);
    text-transform: uppercase;
    letter-spacing: 0.06em;
}
@media (max-width: 700px) {
    .craft-project-grid {
        grid-template-columns: 1fr;
    }
    .case-study:nth-child(odd) {
        border-right: 0;
    }
    .project-card-index,
    .project-intro,
    .project-contribution,
    .archive-link {
        padding-inline: 20px;
    }
    .project-features,
    .project-architecture {
        margin-inline: 20px;
    }
    .project-tech {
        padding-inline: 20px;
    }
    .project-features {
        grid-template-columns: 1fr;
        gap: 20px;
    }
}
</style>
