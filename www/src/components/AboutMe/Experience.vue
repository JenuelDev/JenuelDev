<script setup lang="ts">
import { Icon } from "@iconify/vue";
import Experience from "@/constant/experiences/index";

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
    technologies?: string[];
    url?: string;
    certificate?: ExperienceCertificate;
}

const experiences = Experience as ExperienceItem[];

function getDescriptionPoints(description: string | string[]) {
    return Array.isArray(description) ? description : [description];
}

function isCurrentRole(exp: ExperienceItem) {
    return exp.workUntil.toLowerCase().includes("present");
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
                Experience <em>beyond the launch.</em>
            </h2>
            <p v-scrollanimation class="experience-intro">
                Building and supporting production software since 2018, primarily in Laravel and Vue, for teams that
                needed systems to keep working long after launch.
            </p>
        </header>

        <ol class="experience-timeline">
            <li
                v-for="(exp, index) in experiences"
                :key="`${exp.company}-${index}`"
                v-scrollanimation
                class="experience-item"
                :class="{ 'is-current': isCurrentRole(exp) }"
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

                    <ul class="experience-summary">
                        <li v-for="(item, itemIndex) in getDescriptionPoints(exp.des)" :key="itemIndex">
                            {{ item }}
                        </li>
                    </ul>

                    <ul v-if="exp.technologies?.length" class="experience-tech">
                        <li v-for="tech in exp.technologies" :key="tech">{{ tech }}</li>
                    </ul>

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

<style scoped lang="scss">
.experience-timeline {
    list-style: none;
    padding: 0;
    margin: 0;
}
.experience-company {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    margin-top: 12px;
    font-size: 14px;
}
.experience-summary {
    padding: 0;
    margin: 20px 0;
    list-style: none;
    font-size: 15px;
    line-height: 1.7;
}
.experience-summary li {
    margin-bottom: 10px;
}
.experience-tech {
    list-style: none;
    padding: 0;
    margin: 20px 0;
    display: flex;
    flex-wrap: wrap;
    gap: 10px 18px;
    font: 11px var(--craft-mono);
}
.experience-tech li {
    overflow-wrap: anywhere;
}
.experience-certificate {
    display: inline-flex;
    gap: 8px;
    align-items: center;
    color: var(--primary);
    font: 11px var(--craft-mono);
    line-height: 1.6;
}
.experience-company:hover,
.experience-certificate:hover {
    text-decoration: underline;
}
</style>
