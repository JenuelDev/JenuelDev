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
    technologies?: string[];
}

const experiences = Experience as ExperienceItem[];

const timelineIconMap = ['tabler:briefcase', 'tabler:code', 'tabler:rocket', 'tabler:layers', 'tabler:star'];

function getDescriptionPoints(description: string | string[]) {
    return Array.isArray(description) ? description.slice(0, 3) : [description];
}
</script>
<template>
    <section id="experience" v-scrollanimation class="my-work-experience mx-auto pt-10">
        <div class="experience-shell relative">
            <h2
                v-scrollanimation
                class="lg:text-size-52px md:text-size-44px text-size-36px font-600 text-[var(--primary)] tracking-tight mb-15px md:px-10px"
            >
                work experience
            </h2>
            <p
                v-scrollanimation
                class="md:text-size-24px text-size-20px md:px-10px w-full max-w-900px md:leading-relaxed leading-normal relative mb-10"
            >
                A summary of my professional journey and the impact I've created through the roles I've held.
            </p>

            <ul class="modern-timeline mt-10 md:mt-12 px-0">
                <li
                    v-for="(exp, index) in experiences"
                    :key="`${exp.company}-${index}`"
                    v-scrollanimation
                    class="experience-row"
                >
                    <span class="timeline-dot" aria-hidden="true">
                        <Icon class="timeline-dot-icon" :icon="timelineIconMap[index % timelineIconMap.length]" />
                    </span>
                    <article class="experience-card">
                        <div class="experience-logo-tile" aria-hidden="true">
                            <Icon :icon="timelineIconMap[index % timelineIconMap.length]" />
                        </div>
                        <div class="experience-content">
                            <div class="experience-card-top">
                                <div class="experience-card-body">
                                    <h3 class="experience-role lg:text-size-21px md:text-size-20px text-size-19px font-800">
                                        {{ exp.position }}
                                    </h3>
                                    <a
                                        v-if="exp.url"
                                        :href="exp.url"
                                        target="_blank"
                                        rel="noopener noreferrer external"
                                        class="experience-company"
                                    >
                                        {{ exp.company }}
                                    </a>
                                    <p v-else class="experience-company text-decoration-none">
                                        {{ exp.company }}
                                    </p>
                                </div>
                                <p class="experience-period">
                                    <Icon icon="tabler:calendar" />
                                    <span v-html="`${exp.workStart} - ${exp.workUntil}`"></span>
                                </p>
                            </div>
                            <div class="experience-description md:text-size-15px text-size-14px leading-6">
                                <ul class="experience-description-list">
                                    <li v-for="(item, itemIndex) in getDescriptionPoints(exp.des)" :key="itemIndex">
                                        {{ item }}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </article>
                </li>
            </ul>

        </div>
    </section>
</template>

<style lang="scss" scoped>
.my-work-experience {
    max-width: 1160px;
    display: flex;
    flex-direction: column;
    min-height: 50vh;
    padding-inline: 14px;

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

.experience-shell {
    position: relative;
}

.modern-timeline {
    list-style: none;
    max-width: 1000px;
    margin: 0 auto;
    padding: 0;
    position: relative;
    --timeline-dot-size: 42px;
    --timeline-dot-left: 4px;
    --timeline-dot-top: 24px;
    --timeline-center: calc(var(--timeline-dot-left) + (var(--timeline-dot-size) / 2));

}

.experience-row {
    position: relative;
    display: grid;
    grid-template-columns: 52px 1fr;
    gap: 28px;
    align-items: center;
    margin-bottom: 22px;

    &::after {
        content: "";
        position: absolute;
        left: var(--timeline-center);
        top: 50%;
        width: 2px;
        height: calc(100% + 22px);
        transform: translateX(-50%);
        background: color-mix(in srgb, var(--primary) 62%, transparent);
        opacity: 0.76;
    }

    &:last-child {
        margin-bottom: 0;

        &::after {
            display: none;
        }
    }
}

.timeline-dot {
    position: relative;
    z-index: 1;
    display: block;
    width: var(--timeline-dot-size);
    height: var(--timeline-dot-size);
    margin-top: 0;
    margin-left: var(--timeline-dot-left);
    border-radius: 999px;
    border: 1px solid color-mix(in srgb, var(--primary) 70%, transparent);
    background: var(--primary);
    color: var(--background);
    box-shadow: 0 0 0 5px color-mix(in srgb, var(--primary) 10%, transparent);
}

.timeline-dot-icon {
    position: absolute;
    left: 50%;
    top: 50%;
    display: block;
    width: 20px;
    height: 20px;
    transform: translate(-50%, -50%);
}

:deep(.timeline-dot-icon) {
    position: absolute;
    left: 50%;
    top: 50%;
    display: block;
    transform: translate(-50%, -50%);

    svg {
        display: block;
        width: 20px;
        height: 20px;
    }
}

.experience-card {
    position: relative;
    display: grid;
    grid-template-columns: 80px 1fr;
    gap: 24px;
    align-items: flex-start;
    overflow: hidden;
    border: 1px solid color-mix(in srgb, var(--primary) 22%, transparent);
    border-radius: 8px;
    padding: 18px 22px;
    background: color-mix(in srgb, var(--background) 92%, #001e2e);
    transition: transform 0.25s ease, border-color 0.25s ease;

    &:hover {
        transform: translateY(-4px);
        border-color: color-mix(in srgb, var(--primary) 42%, transparent);
        box-shadow: none;
    }
}

.experience-logo-tile,
.experience-card-body,
.experience-description {
    position: relative;
    z-index: 1;
}

.experience-logo-tile {
    display: grid;
    width: 72px;
    height: 72px;
    place-items: center;
    border: 1px solid color-mix(in srgb, var(--primary) 20%, transparent);
    border-radius: 7px;
    background: color-mix(in srgb, var(--background) 84%, #001c2a);
    color: var(--primary);

    svg {
        width: 34px;
        height: 34px;
    }
}

.experience-content {
    position: relative;
    z-index: 1;
}

.experience-card-top {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 18px;
    margin-bottom: 12px;
}

.experience-period {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    margin: 2px 0 0;
    color: var(--primary);
    font-size: 15px;
    font-weight: 800;
    white-space: nowrap;

    svg {
        width: 18px;
        height: 18px;
    }
}

.experience-role {
    margin: 0 0 3px;
    color: var(--primary);
    letter-spacing: 0;
    line-height: 1.15;
}

.experience-company {
    display: inline-block;
    margin-bottom: 0;
    color: color-mix(in srgb, var(--lightestSlate) 92%, transparent);
    font-size: 16px;
    font-weight: 500;
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
        color: color-mix(in srgb, var(--primary) 88%, #ffffff);
    }
}

.experience-description {
    margin: 0;
    color: color-mix(in srgb, var(--lightestSlate) 76%, transparent);
}

.experience-description-list {
    margin: 0;
    padding-left: 0;
    list-style: none;
    display: grid;
    row-gap: 3px;

    li {
        position: relative;
        padding-left: 16px;

        &::before {
            content: "";
            position: absolute;
            left: 0;
            top: 0.72em;
            width: 4px;
            height: 4px;
            border-radius: 999px;
            background: var(--primary);
        }
    }
}

@media (max-width: 767px) {
    .modern-timeline {
        --timeline-dot-size: 30px;
        --timeline-dot-left: 2px;
        --timeline-dot-top: 14px;
    }

    .experience-row {
        grid-template-columns: 36px 1fr;
        gap: 14px;
        margin-bottom: 18px;

        &::after {
            height: calc(100% + 18px);
        }
    }

    .timeline-dot {
        width: 30px;
        height: 30px;
        margin-left: 2px;
        margin-top: 0;

        svg {
            width: 17px;
            height: 17px;
        }
    }

    :deep(.timeline-dot-icon),
    :deep(.timeline-dot-icon svg) {
        width: 17px;
        height: 17px;
    }

    .experience-card {
        grid-template-columns: 1fr;
        gap: 14px;
        padding: 16px;
        border-radius: 14px;
    }

    .experience-logo-tile {
        width: 56px;
        height: 56px;

        svg {
            width: 27px;
            height: 27px;
        }
    }

    .experience-card-top {
        flex-direction: column;
        gap: 8px;
    }

    .experience-role {
        letter-spacing: 0.04em;
    }

    .experience-period,
    .experience-company {
        font-size: 14px;
    }
}

:deep(.present-work) {
    font-weight: 700;
}
</style>
