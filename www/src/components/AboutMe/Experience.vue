<script setup lang="ts">
import { Icon } from '@iconify/vue';
import Experience from '@/constant/experiences/index';

interface ExperienceCertificate {
    link: string;
    label: string;
}

interface ExperienceItem {
    position: string;
    company: string;
    workStart: string;
    workUntil: string;
    des: string | string[];
    url?: string;
    certificate?: ExperienceCertificate;
}

const experiences = Experience as ExperienceItem[];

function getDescriptionPoints(description: string | string[]) {
    return Array.isArray(description) ? description.slice(0, 2) : [description];
}

function isCurrentRole(exp: ExperienceItem) {
    return exp.workUntil.toLowerCase().includes('present');
}
</script>

<template>
    <section id="experience" v-scrollanimation class="work-experience mx-auto mb-90px">
        <header class="experience-heading">
            <p v-scrollanimation class="experience-eyebrow">career history</p>
            <h2
                v-scrollanimation
                class="lg:text-size-44px md:text-size-38px text-size-28px font-600 text-[var(--primary)] tracking-tight"
            >
                work experience
            </h2>
            <figure v-scrollanimation class="experience-quote">
                <blockquote>
                    &ldquo;One must learn by doing the thing, for though you think you know it, you have no
                    certainty until you try.&rdquo;
                </blockquote>
                <figcaption>Sophocles</figcaption>
            </figure>
        </header>

        <ol class="experience-timeline">
            <li
                v-for="(exp, index) in experiences"
                :key="`${exp.company}-${index}`"
                v-scrollanimation
                class="experience-item"
                :class="{ 'is-current': isCurrentRole(exp), 'is-flipped': index % 2 === 1 }"
            >
                <p class="experience-date">
                    <span v-html="`${exp.workStart} - ${exp.workUntil}`"></span>
                </p>

                <span class="experience-track" aria-hidden="true"></span>

                <article class="experience-entry">
                    <h3 class="experience-role">
                        {{ exp.position }}
                    </h3>
                    <a
                        v-if="exp.url"
                        :href="exp.url"
                        target="_blank"
                        rel="noopener noreferrer external"
                        class="experience-company"
                    >
                        <span>{{ exp.company }}</span>
                        <Icon icon="tabler:external-link" aria-hidden="true" />
                    </a>
                    <p v-else class="experience-company">
                        {{ exp.company }}
                    </p>

                    <div class="experience-summary">
                        <p v-for="(item, itemIndex) in getDescriptionPoints(exp.des)" :key="itemIndex">
                            {{ item }}
                        </p>
                    </div>

                    <a
                        v-if="exp.certificate"
                        :href="exp.certificate.link"
                        target="_blank"
                        rel="noopener noreferrer external"
                        class="experience-certificate"
                    >
                        <Icon icon="tabler:certificate" aria-hidden="true" />
                        <span>{{ exp.certificate.label }}</span>
                    </a>
                </article>
            </li>
        </ol>
    </section>
</template>

<style lang="scss" scoped>
.work-experience {
    max-width: 900px;
    min-height: 50vh;
    padding-inline: 10px;

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

.experience-heading {
    max-width: 720px;
    margin: 0 auto 60px;
    text-align: center;

    h2 {
        margin: 7px 0 12px;
    }
}

.experience-eyebrow {
    margin: 0;
    color: color-mix(in srgb, var(--lightestSlate) 72%, transparent);
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0.16em;
    text-transform: uppercase;
}

.experience-quote {
    max-width: 600px;
    margin: 18px auto 0;

    blockquote {
        margin: 0;
        text-wrap: balance;
        color: color-mix(in srgb, var(--lightestSlate) 78%, transparent);
        font-size: 19px;
        font-style: italic;
        line-height: 1.6;
    }

    figcaption {
        margin-top: 12px;
        color: color-mix(in srgb, var(--lightestSlate) 52%, transparent);
        font-size: 12px;
        font-weight: 600;
        letter-spacing: 0.14em;
        text-transform: uppercase;

        &::before {
            content: "— ";
        }
    }
}

.experience-timeline {
    margin: 0;
    padding: 0;
    list-style: none;
}

/*
 * Each entry is its own segment: a pill centred on the axis with a short rule
 * hanging beneath it, and the copy sitting to one side of that rule.
 */
.experience-item {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 1px minmax(0, 1fr);
    grid-template-rows: auto auto;
    column-gap: 56px;

    & + .experience-item {
        margin-top: 34px;
    }

    &.a-before-enter {
        opacity: 0;
        transform: translateY(20px);
        transition: 0.35s ease-in;
    }

    &.a-enter {
        opacity: 1;
        transform: translateY(0);
    }
}

.experience-date {
    grid-column: 2;
    grid-row: 1;
    justify-self: center;
    margin: 0;
    border-radius: 999px;
    padding: 7px 15px;
    background: color-mix(in srgb, var(--lightestSlate) 26%, transparent);
    color: color-mix(in srgb, var(--lightestSlate) 92%, transparent);
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0.04em;
    line-height: 1;
    white-space: nowrap;
}

.experience-track {
    grid-column: 2;
    grid-row: 2;
    width: 1px;
    margin-top: 18px;
    background: color-mix(in srgb, var(--lightestSlate) 24%, transparent);
}

.experience-entry {
    grid-column: 3;
    grid-row: 2;
    justify-self: start;
    max-width: 360px;
    padding: 46px 0 44px;
    text-align: left;
}

.experience-role {
    margin: 0;
    color: color-mix(in srgb, var(--lightestSlate) 72%, transparent);
    font-size: 15px;
    font-weight: 700;
    letter-spacing: 0.08em;
    line-height: 1.3;
    text-transform: uppercase;
}

.experience-company {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    margin: 8px 0 0;
    color: color-mix(in srgb, var(--lightestSlate) 60%, transparent);
    font-size: 14px;
    font-weight: 600;
    text-decoration: none;
    transition: color 0.2s ease;

    svg {
        width: 14px;
        height: 14px;
    }

    &:hover {
        color: var(--primary);
    }
}

.experience-summary {
    margin-top: 18px;
    color: color-mix(in srgb, var(--lightestSlate) 62%, transparent);
    font-size: 15px;
    line-height: 1.65;

    p {
        margin: 0 0 10px;

        &:last-child {
            margin-bottom: 0;
        }
    }
}

.experience-certificate {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    margin-top: 16px;
    color: var(--primary);
    font-size: 12px;
    font-weight: 600;
    text-decoration: none;

    svg {
        width: 16px;
        height: 16px;
    }

    &:hover span {
        text-decoration: underline;
        text-underline-offset: 3px;
    }
}

/* Copy flips to the left of the rule on every other entry. */
.experience-item.is-flipped .experience-entry {
    grid-column: 1;
    justify-self: end;
    text-align: right;
}

/* The role held today is the only one that carries the accent colour. */
.experience-item.is-current {
    .experience-date {
        background: var(--primary);
        color: var(--background);
    }

    .experience-track {
        background: var(--primary);
    }

    .experience-role {
        color: var(--primary);
    }

    .experience-company {
        color: color-mix(in srgb, var(--lightestSlate) 88%, transparent);
    }

    .experience-summary {
        color: color-mix(in srgb, var(--lightestSlate) 78%, transparent);
    }
}

@media (max-width: 767px) {
    .experience-heading {
        margin-bottom: 44px;
        text-align: left;
    }

    .experience-item {
        grid-template-columns: 1px minmax(0, 1fr);
        column-gap: 24px;

        & + .experience-item {
            margin-top: 26px;
        }
    }

    .experience-date {
        grid-column: 1 / -1;
        justify-self: start;
        margin-left: -1px;
    }

    .experience-track {
        grid-column: 1;
    }

    .experience-entry,
    .experience-item.is-flipped .experience-entry {
        grid-column: 2;
        justify-self: start;
        max-width: none;
        padding: 30px 0 32px;
        text-align: left;
    }
}

:deep(.present-work) {
    font-weight: inherit;
}
</style>
