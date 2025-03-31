<script setup lang="ts">
import CodeChallenge from '@/constant/code-challenges-page/index';
import { Icon } from "@iconify/vue"

function openSite(site: string) {
    window.open(site, '_blank');
}
</script>
<template>
    <section v-scrollanimation class="code-challenge">
        <h2
            class="lg:text-size-52px md:text-size-44px text-size-36px font-600 text-[var(--primary)] tracking-tight mb-15px md:px-10px">
            others
        </h2>
        <p class="md:text-size-24px text-size-20px md:px-10px w-[100%] md:leading-relaxed leading-normal">
            {{ CodeChallenge.des }}
        </p>
        <div class="code-grid">
            <template v-for="(code, index) in CodeChallenge.challenges" :key="index">
                <div v-scrollanimation :style="'transition-delay:' + index * 100 + 'ms'">
                    <div class="code-item">
                        <div class="code-item-inner">
                            <header>
                                <div class="item-top">
                                    <div class="text-[var(--primary)] text-7xl">
                                        <Icon icon="material-symbols:folder-open" />
                                    </div>
                                    <div class="item-links">
                                        <div class="item-links-toggle customTooltip" :gloss="link.tooltip"
                                            v-for="link in code.links" :key="link.link" @click="openSite(link.link)">
                                            <Icon :icon="link.icon" class="text-3xl" />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h3 class="md:text-size-24px text-size-22 font-700 mt-20px text-[var(--primary)]">{{
                                        code.title }}</h3>
                                    <div class="md:text-size-20px text-size-18 md:leading-snug leading-tight mt-10px"
                                        v-html="code.des"></div>
                                </div>
                            </header>

                            <footer class="mt-30px">
                                <ul class="flex gap-10px flex-wrap">
                                    <li class="flex items-center gap-5px" v-for="tech in code.techs" :key="tech.name">
                                        <Icon :icon="tech.icon" />
                                        {{ tech.name }}
                                    </li>
                                </ul>
                            </footer>
                        </div>
                    </div>
                </div>
            </template>
        </div>
    </section>
</template>

<style lang="scss">
.code-challenge {
    @apply max-w-[1000px] mx-auto my-100px;

    &.a-before-enter {
        opacity: 0;
        transform: translateY(20px);
        transition: 0.3s ease-in;
    }

    &.a-enter {
        opacity: 1;
        transform: translateY(0);
    }

    .code-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        position: relative;
        margin-top: 50px;
        gap: 20px;

        .a-before-enter {
            opacity: 0;
            transform: translateY(20px);
            transition: 0.2s ease-in-out;
        }

        .a-enter {
            opacity: 1;
            transform: translateY(0);
        }

        .code-item {
            visibility: visible;
            box-shadow: 0 10px 30px -15px var(--navy-shadow);
            border-radius: var(--border-radius);
            transition: 0.2s;
            height: 100%;
            z-index: 1;
            background-color: var(--lightBackground);

            .code-item-inner {
                display: flex;
                justify-content: space-between;
                flex-direction: column;
                padding: 2rem 1.75rem;
                height: 100%;

                header {
                    .item-top {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;

                        .item-links {
                            display: flex;
                            margin-right: -15px;
                            color: var(--lightSlate) !important;

                            .item-links-toggle {
                                padding: 0px 5px;
                                cursor: pointer;

                                .highlight-hover {
                                    color: var(--lightSlate) !important;
                                }

                                &:hover {
                                    .highlight-hover {
                                        color: var(--primary) !important;
                                    }
                                }
                            }
                        }
                    }
                }
            }

            &:hover {
                transform: translate(0px, -5px);
                box-shadow: var(--black-shadow);
                background-color: var(--lightBackground);
            }
        }
    }
}
</style>
