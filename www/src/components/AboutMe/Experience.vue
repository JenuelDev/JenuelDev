<script setup lang="ts">
import SvgDecoration from '@/components/SvgDecoration/SvgDecoration.vue';
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

const techIconMap: Record<string, string> = {
    Laravel: 'material-icon-theme:laravel',
    'Vue.js (2 & 3)': 'material-icon-theme:vue',
    'Vue.js': 'material-icon-theme:vue',
    TypeScript: 'vscode-icons:file-type-typescript-official',
    'SASS / CSS3': 'skill-icons:sass',
    CSS3: 'skill-icons:css',
    HTML5: 'skill-icons:html',
    'Node.js': 'material-icon-theme:nodejs',
    Python: 'skill-icons:python-dark',
    'C#': 'mdi:language-csharp',
    MySQL: 'skill-icons:mysql-light',
    JavaScript: 'skill-icons:javascript',
    PHP: 'skill-icons:php-dark',
    'Twilio API': 'logos:twilio-icon',
    jQuery: 'logos:jquery',
    Photoshop: 'logos:adobe-photoshop',
    Illustrator: 'logos:adobe-illustrator',
    'Video editing tools': 'mdi:video',
};
</script>
<template>
    <section id="experience" v-scrollanimation class="my-work-experience mx-auto pt-10">
        <div class="experience-shell relative">
            <h2
                v-scrollanimation
                class="lg:text-size-52px md:text-size-44px text-size-36px font-600 text-[var(--primary)] tracking-tight mb-15px md:px-10px"
            >
                work experience
                <SvgDecoration
                    classNames="absolute md:visible invisible right-5 -bottom-9 transform rotate-[90deg] fill-[var(--primary)] opacity-50"
                    :type="1" />
            </h2>
            <p
                v-scrollanimation
                class="md:text-size-24px text-size-20px md:px-10px md:leading-relaxed leading-relaxed relative mb-10"
            >
                As a developer, working is more than just writing code—it’s about continuous learning, problem-solving,
                and making a meaningful impact. It involves growing your skills, collaborating with others, and
                contributing to projects that can shape the way people interact with technology. Beyond just technical
                expertise, it’s about creativity, innovation, and leaving a lasting mark on the world through your work.
                
            </p>
            <ul class="modern-timeline mt-10 md:mt-14">
                <li
                    v-for="(exp, index) in experiences"
                    :key="`${exp.company}-${index}`"
                    v-scrollanimation
                    class="experience-row"
                >
                    <span class="timeline-dot" aria-hidden="true"></span>
                    <article class="experience-card">
                        <p class="experience-period" v-html="`${exp.workStart} - ${exp.workUntil}`"></p>
                        <h3 class="experience-role lg:text-size-30px md:text-size-28px text-size-24px font-700">
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
                        <div
                            v-if="Array.isArray(exp.des)"
                            class="experience-description md:text-size-20px text-size-18px leading-relaxed"
                        >
                            <ul class="experience-description-list">
                                <li v-for="(item, itemIndex) in exp.des" :key="itemIndex">
                                    {{ item }}
                                </li>
                            </ul>
                        </div>
                        <p
                            v-else
                            class="experience-description md:text-size-20px text-size-18px leading-relaxed"
                        >
                            {{ exp.des }}
                        </p>
                        <div v-if="exp.certificate" class="experience-actions">
                            <a
                                class="certificate-link"
                                rel="external noopener"
                                target="_blank"
                                :href="exp.certificate.link"
                            >
                                <span>{{ exp.certificate.label }} </span>
                                <Icon icon="mdi:open-in-new" />
                            </a>
                        </div>

                        <div
                            v-if="exp.technologies && exp.technologies.length"
                            class="experience-technologies mt-5 flex flex-wrap items-center gap-3 md:gap-4"
                        >
                            <Icon
                                v-for="tech in exp.technologies"
                                :key="tech"
                                class="experience-technologies-icon text-3xl"
                                :icon="techIconMap[tech] || 'mdi:code-tags'"
                                :title="tech"
                            />
                        </div>
                    </article>
                </li>
            </ul>

        </div>
    </section>
</template>

<style lang="scss" scoped>
.my-work-experience {
    max-width: 1000px;
    display: flex;
    flex-direction: column;
    min-height: 50vh;

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
    margin: 0;
    padding: 0;
    position: relative;

    &::before {
        content: '';
        position: absolute;
        top: 4px;
        bottom: 4px;
        left: 17px;
        width: 2px;
        background: linear-gradient(180deg, var(--primary), transparent);
        opacity: 0.5;
    }
}

.experience-row {
    display: grid;
    grid-template-columns: 36px 1fr;
    gap: 18px;
    margin-bottom: 24px;
}

.timeline-dot {
    width: 14px;
    height: 14px;
    margin-top: 18px;
    margin-left: 10px;
    border-radius: 999px;
    background: var(--primary);
    box-shadow: 0 0 0 6px color-mix(in srgb, var(--primary) 20%, transparent);
}

.experience-card {
    border: 1px solid color-mix(in srgb, var(--slate) 25%, transparent);
    border-radius: 18px;
    padding: 20px 20px 22px;
    background:
        radial-gradient(circle at 100% 0%, color-mix(in srgb, var(--primary) 14%, transparent), transparent 48%),
        color-mix(in srgb, var(--lightBackground) 92%, transparent);
    transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;

    &:hover {
        transform: translateY(-2px);
        border-color: color-mix(in srgb, var(--primary) 45%, var(--slate));
        box-shadow: 0 14px 30px -20px color-mix(in srgb, var(--primary) 70%, transparent);
    }
}

.experience-period {
    display: inline-flex;
    align-items: center;
    padding: 4px 12px;
    border-radius: 999px;
    margin-bottom: 14px;
    font-size: 14px;
    background: color-mix(in srgb, var(--primary) 14%, var(--lightBackground));
}

.experience-role {
    margin-bottom: 8px;
}

.experience-company {
    display: inline-block;
    margin-bottom: 14px;
    font-weight: 600;
    color: var(--primary);
    opacity: 0.85;
    text-decoration: none;
    transition: opacity 0.2s ease;

    &:hover {
        opacity: 1;
    }
}

.experience-description {
    margin: 0;
}

.experience-description-list {
    margin: 0;
    padding-left: 1.25rem;
    list-style: disc;
    display: grid;
    row-gap: 6px;
}

.experience-actions {
    margin-top: 16px;
}

.experience-technologies {
    margin-top: 18px;
}

.experience-technologies-list {
    padding: 0;
    margin: 0;
}

.experience-technologies-pill {
    padding: 0;
    border-radius: 0;
    border: none;
    background: transparent;
}

.experience-technologies-icon {
    min-width: 32px;
    margin-right: 4px;
}

.certificate-link {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 0;
    border: none;
    border-radius: 0;
    font-weight: 500;
    text-decoration: none;
    color: var(--primary);
    transition: color 0.2s ease, transform 0.2s ease;

    &:hover {
        color: color-mix(in srgb, var(--primary) 90%, #ffffff);
        transform: translateX(1px);
    }
}

@media (max-width: 767px) {
    .modern-timeline::before {
        left: 14px;
    }

    .experience-row {
        grid-template-columns: 30px 1fr;
        gap: 14px;
        margin-bottom: 18px;
    }

    .timeline-dot {
        margin-left: 6px;
        margin-top: 14px;
    }

    .experience-card {
        padding: 16px;
        border-radius: 14px;
    }
}

:deep(.present-work) {
    font-weight: 700;
}
</style>
