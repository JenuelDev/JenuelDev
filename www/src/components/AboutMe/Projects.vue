<script setup lang="ts">
import Project from "@/constant/projects";
import { Icon } from "@iconify/vue";
</script>
<template>
    <section id="projects" class="selected-work mx-auto max-w-900px px-10px mb-90px" aria-labelledby="projects-heading">
        <h2
            id="projects-heading"
            class="lg:text-size-44px md:text-size-38px text-size-28px font-600 text-[var(--primary)] tracking-tight mb-15px"
        >
            products i've built
        </h2>
        <p class="section-intro">
            Independent apps I design, build, and maintain across web, mobile, and desktop.
        </p>
        <article v-for="work in Project.works" :id="work.id" :key="work.id" class="case-study">
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
                            {{ work.links.find((link) => link.link === work.imageLink)?.tooltip || "Visit product" }}
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
        <router-link to="/project-archives" class="archive-link"
            >View more projects and open-source work <span aria-hidden="true">→</span></router-link
        >
    </section>
</template>
<style scoped lang="scss">
.selected-work {
    letter-spacing: 0;
}
.section-intro {
    max-width: 700px;
    line-height: 1.7;
    margin-bottom: 28px;
}
.case-study {
    margin: 0 0 28px;
    padding: 28px;
    border: 1px solid color-mix(in srgb, var(--primary) 28%, transparent);
    border-radius: 16px;
    background: var(--lightBackground);
}
.project-heading {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 24px;
    img {
        width: 56px;
        height: 56px;
        object-fit: contain;
        border-radius: 12px;
        flex-shrink: 0;
    }
    h3 {
        margin: 0;
        color: var(--lightestSlate);
        font-size: 28px;
    }
}
.project-overline {
    color: var(--primary);
    font-size: 13px;
    margin: 0 0 4px;
}
.project-layout {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1.2fr);
    gap: 28px;
    align-items: center;
}
.project-summary {
    font-size: 17px;
    line-height: 1.7;
    margin: 0 0 24px;
}
.project-features {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 20px;
    padding: 24px 0;
    margin: 28px 0 24px;
    list-style: none;
    border-top: 1px solid color-mix(in srgb, var(--primary) 18%, transparent);
    border-bottom: 1px solid color-mix(in srgb, var(--primary) 18%, transparent);
    li {
        min-width: 0;
    }
}
.feature-icon {
    font-size: 24px;
    color: var(--primary);
    margin-bottom: 10px;
}
.case-study h4 {
    color: var(--lightestSlate);
    font-size: 15px;
    font-weight: 700;
    margin: 0 0 8px;
}
.project-features p,
.project-contribution p,
.architecture-content p {
    font-size: 15px;
    line-height: 1.7;
    margin: 0;
}
.project-screenshot {
    display: block;
    border-radius: 10px;
    overflow: hidden;
    border: 1px solid color-mix(in srgb, var(--primary) 20%, transparent);
    img {
        width: 100%;
        height: auto;
        display: block;
    }
}
.project-tech {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    list-style: none;
    padding: 0;
    margin: 24px 0;
    li {
        padding: 5px 10px;
        border-radius: 6px;
        background: color-mix(in srgb, var(--primary) 9%, transparent);
        color: var(--lightestSlate);
        font-size: 13px;
    }
}
.project-links {
    display: flex;
    flex-wrap: wrap;
    gap: 12px 24px;
    a {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        min-height: 44px;
        color: var(--primary);
        font-size: 14px;
        font-weight: 600;
        text-decoration: none;
        text-underline-offset: 4px;

        &:hover,
        &:focus-visible {
            text-decoration: underline;
        }
    }
}
.case-study a:focus-visible,
.project-architecture summary:focus-visible {
    outline: 2px solid var(--primary);
    outline-offset: 5px;
}
.project-architecture {
    border-top: 1px solid color-mix(in srgb, var(--primary) 18%, transparent);
    summary {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        min-height: 48px;
        color: var(--primary);
        font-size: 14px;
        font-weight: 600;
        cursor: pointer;
        list-style: none;
        &::-webkit-details-marker {
            display: none;
        }
    }
    &[open] summary svg {
        transform: rotate(180deg);
    }
}
.architecture-content {
    padding: 8px 0;
    p {
        margin-bottom: 20px;
    }
    a {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        min-height: 44px;
        color: var(--primary);
        font-size: 14px;
        font-weight: 600;
    }
}
.archive-link {
    color: var(--primary);
    display: inline-block;
    padding: 12px 0;
}
@media (max-width: 768px) {
    .project-layout {
        grid-template-columns: 1fr;
    }
    .case-study {
        padding: 20px;
    }
}
@media (max-width: 425px) {
    .project-features {
        grid-template-columns: 1fr;
        gap: 24px;
    }
    .case-study {
        padding: 16px;
    }
    .project-heading h3 {
        font-size: 23px;
    }
}
</style>
