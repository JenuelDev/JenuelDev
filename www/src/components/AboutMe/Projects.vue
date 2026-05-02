<script setup lang="ts">
import CodeChallenge from "@/components/CodeChallenges.vue";
import Project from "@/constant/projects";
import { useStore } from "@/stores/store";
import { onMounted } from "vue";
import { Icon } from "@iconify/vue";

const store = useStore();
onMounted(() => {
    store.workShow = true;
});

const works = Project;

function openSite(site: string) {
    window.open(site, "_blank");
}

const techIconMap: Record<string, string> = {
    electron: 'mdi:electron-framework',
    'electron.builder': 'mdi:electron-framework',
    vue: 'material-icon-theme:vue',
    vue3: 'material-icon-theme:vue',
    vuejs: 'material-icon-theme:vue',
    nuxt: 'vscode-icons:file-type-nuxt',
    'nuxt js': 'vscode-icons:file-type-nuxt',
    react: 'vscode-icons:file-type-reactjs',
    javascript: 'skill-icons:javascript',
    typescript: 'vscode-icons:file-type-typescript-official',
    firebase: 'skill-icons:firebase-light',
    unocss: 'material-icon-theme:unocss',
    windicss: 'material-icon-theme:windicss',
    tailwindcss: 'devicon:tailwindcss',
    vuepress: 'material-icon-theme:vue',
    api: 'tabler:api',
    pwa: 'tabler:device-mobile-check',
    'html/css': 'skill-icons:html',
    html: 'skill-icons:html',
    css: 'skill-icons:css',
    sass: 'skill-icons:sass',
    php: 'skill-icons:php-dark',
    laravel: 'material-icon-theme:laravel',
    nodejs: 'material-icon-theme:nodejs',
    mongodb: 'skill-icons:mongodb',
    mysql: 'skill-icons:mysql-light',
};

function getTechIcon(tech: string): string {
    return techIconMap[tech.toLowerCase()] ?? 'tabler:code';
}

</script>
<template>
    <section id="projects" v-scrollanimation class="my-work mx-auto max-w-900px px-10px mb-90px">
        <h2
            class="lg:text-size-44px md:text-size-38px text-size-28px font-600 text-[var(--primary)] tracking-tight mb-15px"
        >
            projects
        </h2>
        <p class="text-lg leading-7">
            Learning is a journey, not a destination. One of the most effective ways to grow is by building personal
            projects. I decided to challenge myself by designing and developing my own. These "hobby" projects matter to
            me because they push me to keep learning, stay up to date, and sharpen my skills. In reality, they are far
            more than just hobbies., they are a vital part of my growth as a developer.
        </p>
        <div style="margin-top: 20px">
            <template v-for="(work, i) in works.works" :key="i">
                <div v-scrollanimation class="work-info mx-0 md:my-30 my-1" style="transition-delay: 500ms">
                    <div class="work-info-details" :class="(i as number) % 2 == 0 ? 'left-content' : 'right-content'">
                        <p class="project-overline text-[var(--primary)] font-600">{{ work.overline }}</p>
                        <h3 class="project-title text-xl font-700">{{ work.title }}</h3>
                        <div class="info-des-container">
                            <p v-html="work.des"></p>
                            <ul class="info-tech-list" :class="(i as number) % 2 == 0 ? '' : 'work-links-right'">
                                <li v-for="tech in work.techs" :key="tech">
                                    <Icon :icon="getTechIcon(tech)" class="tech-icon" />
                                    {{ tech }}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="work-info-image" :class="(i as number) % 2 == 0 ? 'right-image' : 'left-image'">
                        <div class="work-info-image-link" @click="openSite(work.imageLink)">
                            <div class="image-wrapping">
                                <div class="front-filter"></div>
                                <img loading="lazy" :src="work.img" :alt="`${work.title} - Image`" />
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </div>
    </section>
    <CodeChallenge />
</template>

<style lang="scss">
.my-work {
    &.a-before-enter {
        opacity: 0;
        transform: translateY(20px);
        transition: 0.3s ease-in;
    }

    &.a-enter {
        opacity: 1;
        transform: translateY(0);
    }

    .work-info {
        visibility: visible;
        opacity: 1;
        display: grid;
        gap: 10px;
        grid-template-columns: repeat(12, 1fr);
        -webkit-box-align: center;
        align-items: center;

        &.a-before-enter {
            opacity: 0;
            transform: translateY(20px);
            transition: 0.2s ease-in-out 400ms;
        }

        &.a-enter {
            opacity: 1;
            transform: translateY(0);
        }

        .left-content {
            position: relative;
            grid-area: 2 / 2 / 1 / 7;
        }

        .right-image {
            position: relative;
            grid-area: 1/6/-1/-1;
        }

        .right-content {
            position: relative;
            grid-area: 1/7/-1/-2;
            text-align: right;
        }

        .left-image {
            position: relative;
            grid-area: 1 / 1 / 1 / 8;
        }

        .work-info-details {
            .project-overline {
                margin: 0 0 8px;
                letter-spacing: 0;
            }

            .project-title {
                margin: 0 0 18px;
                color: color-mix(in srgb, var(--lightestSlate) 94%, transparent);
                letter-spacing: 0;
                line-height: 1.15;
            }

            .info-des-container {
                position: relative;
                z-index: 10;
                border: 1px solid color-mix(in srgb, var(--primary) 22%, transparent);
                border-radius: 8px;
                padding: 20px;
                background: color-mix(in srgb, var(--background) 92%, #001e2e);
                color: color-mix(in srgb, var(--lightestSlate) 76%, transparent);
                line-height: 1.55;

                p {
                    margin: 0 0 18px;
                }
            }

            .info-tech-list {
                display: flex;
                flex-wrap: wrap;
                gap: 8px;
                margin: 0 0 14px;
                padding: 0;
                list-style: none;

                li {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    padding: 5px 11px;
                    border: 1px solid color-mix(in srgb, var(--primary) 22%, transparent);
                    border-radius: 999px;
                    background: color-mix(in srgb, var(--primary) 6%, transparent);
                    color: color-mix(in srgb, var(--lightestSlate) 82%, transparent);
                    font-size: 13px;
                    white-space: nowrap;
                    line-height: 1;

                    .tech-icon {
                        width: 15px;
                        height: 15px;
                        flex-shrink: 0;
                    }
                }

                &.work-links-right {
                    justify-content: flex-end;
                }
            }

            .work-links {
                display: flex;
                align-items: center;
                gap: 8px;

                &.work-links-right {
                    justify-content: flex-end;
                }

                .work-links-toggle {
                    display: grid;
                    width: 34px;
                    height: 34px;
                    place-items: center;
                    border: 1px solid color-mix(in srgb, var(--primary) 32%, transparent);
                    border-radius: 6px;
                    background: transparent;
                    color: var(--primary);
                    cursor: pointer;
                    transition: border-color 0.2s ease, background 0.2s ease, transform 0.2s ease;

                    svg {
                        width: 18px;
                        height: 18px;
                    }

                    &:hover {
                        transform: translateY(-2px);
                        border-color: color-mix(in srgb, var(--primary) 55%, transparent);
                        background: color-mix(in srgb, var(--primary) 8%, transparent);
                    }
                }
            }
        }

        .work-info-image {
            transition: var(--transition);

            .work-info-image-link {
                width: 90%;
                background-color: var(--image-cover);
                border-radius: var(--border-radius);
                vertical-align: middle;
                cursor: pointer;
                transition: 0.25s !important;

                &::before {
                    content: "";
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    top: 0px;
                    left: 0px;
                    right: 0px;
                    bottom: 0px;
                    z-index: 3;
                    transition: var(--transition);
                    background-color: var(--navy);
                    mix-blend-mode: screen;
                }

                .image-wrapping {
                    position: relative;
                    overflow: hidden;
                    border-radius: var(--border-radius);
                    mix-blend-mode: multiply;
                    filter: grayscale(100%) contrast(1) brightness(90%);

                    .front-filter {
                        width: 100%;
                        padding-bottom: 62.2857%;
                    }

                    img {
                        position: absolute;
                        top: 0px;
                        left: 0px;
                        height: 100%;
                        object-fit: cover;
                        object-position: center center;
                        vertical-align: middle;
                    }
                }

                &:hover {
                    background-color: rgba(0, 0, 0, 0);

                    .image-wrapping {
                        filter: grayscale(0%) contrast(1) brightness(90%);
                    }
                }
            }
        }
    }
}

@media only screen and (max-width: 768px) {
    .my-work {
        padding-inline: 10px;

        .work-info {
            display: grid;
            gap: 10px;
            grid-template-columns: repeat(12, 1fr);
            -webkit-box-align: center;
            align-items: center;

            .left-content {
                grid-column: 1 / -1;
                padding: 40px 40px 30px;
                z-index: 5;
            }

            .right-image {
                grid-column: 1 / -1;
                height: 100%;
                opacity: 0.25;
            }

            .right-content {
                grid-column: 1 / -1;
                padding: 40px 40px 30px;
                z-index: 5;
                text-align: left;

                .info-tech-list,
                .work-links {
                    justify-content: flex-start !important;
                }
            }

            .left-image {
                grid-column: 1 / -1;
                height: 100%;
                opacity: 0.25;
            }

            .work-info-details {
                .info-des-container {
                    padding: 18px;
                    line-height: 1.5;
                }
            }
        }
    }
}
</style>
