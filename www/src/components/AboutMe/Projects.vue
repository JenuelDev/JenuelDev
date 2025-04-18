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
</script>
<template>
    <section id="projects" v-scrollanimation class="my-work lg:pt-130px pt-0 mx-auto max-w-[1000px] px-10px">
        <h2
            class="lg:text-size-52px md:text-size-44px text-size-36px font-600 text-[var(--primary)] tracking-tight mb-15px"
        >
            Personal Project
        </h2>
        <p class="md:text-size-24px text-size-20px md:leading-relaxed leading-normal">
            Learning is a journey, not a destination. One effective way to learn is by creating personal projects. I
            decided it would be a fun challenge to design and build my own.
        </p>
        <div style="margin-top: 20px">
            <template v-for="(work, i) in works.works" :key="i">
                <div v-scrollanimation class="work-info mx-0 md:my-30 my-1" style="transition-delay: 500ms">
                    <div class="work-info-details" :class="i % 2 == 0 ? 'left-content' : 'right-content'">
                        <p class="text-[var(--primary)] font-200">{{ work.overline }}</p>
                        <h3 class="md:text-size-28px text-size-25px mb-25px font-600">{{ work.title }}</h3>
                        <div class="info-des-container">
                            <p class="" v-html="work.des"></p>
                        </div>
                        <ul class="info-tech-list" :class="i % 2 == 0 ? '' : 'work-links-right'">
                            <li v-for="tech in work.techs" :key="tech">
                                {{ tech }}
                            </li>
                        </ul>
                        <div class="work-links" :class="i % 2 == 0 ? '' : 'work-links-right'">
                            <div
                                v-for="link in work.links"
                                class="work-links-toggle customTooltip"
                                :gloss="link.tooltip"
                                :key="link.name"
                                @click="openSite(link.link)"
                            >
                                <Icon :icon="link.icon" />
                            </div>
                        </div>
                    </div>
                    <div class="work-info-image" :class="i % 2 == 0 ? 'right-image' : 'left-image'">
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
            .info-overline {
                margin: 10px 0px;
                color: var(--primary);
                font-weight: 400;
            }

            .info-title {
                margin: 0px 0px 20px;
                font-size: clamp(18px, 5vw, 23px);
                color: var(--lightestSlate) !important;
            }

            .info-des-container {
                @apply relative z-10 p-16px bg-[var(--lightBackground)] md:text-size-18px md:leading-snug text-size-16px leading-tight;
            }

            .info-tech-list {
                display: flex;
                position: relative;
                z-index: 10;
                margin-top: 25px;
                margin-bottom: 10px;
                list-style-type: none;

                li {
                    white-space: nowrap;
                    margin-right: 15px;
                }
            }

            .work-links {
                justify-content: flex-start;
                margin-left: 0px;
                margin-right: -10px;
                display: flex;
                align-items: center;
                position: relative;
                margin-top: 10px;
                margin-left: -10px;
                color: var(--lightestSlate);

                .work-links-toggle {
                    padding: 10px;
                    cursor: pointer;

                    .highlight-hover {
                        color: var(--slate) !important;
                    }

                    &:hover {
                        .highlight-hover {
                            color: var(--primary) !important;
                        }
                    }
                }
            }

            .work-links-right {
                justify-content: flex-end !important;
            }

            .work-links-left {
                justify-content: flex-start !important;
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
        padding: 0;

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
            }

            .left-image {
                grid-column: 1 / -1;
                height: 100%;
                opacity: 0.25;
            }
        }
    }
}
</style>
