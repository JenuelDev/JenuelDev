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
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-22px mt-42px">
            <template v-for="(code, index) in CodeChallenge.challenges" :key="index">
                <div v-scrollanimation :style="'transition-delay:' + index * 100 + 'ms'">
                    <div class="code-item">
                        <div class="code-item-inner">
                            <header class="code-card-header">
                                <div class="code-card-copy">
                                    <div class="code-title-row">
                                        <div class="code-icon-tile" aria-hidden="true">
                                            <Icon icon="material-symbols:folder-open" />
                                        </div>
                                        <h3 class="code-title md:text-size-21px text-size-19px font-800">
                                            {{ code.title }}
                                        </h3>
                                    </div>
                                    <div class="code-description md:text-size-15px text-size-14px leading-6"
                                        v-html="code.des"></div>
                                </div>
                                <div class="item-links">
                                    <button
                                        class="item-links-toggle customTooltip"
                                        :gloss="link.tooltip"
                                        v-for="link in code.links"
                                        :key="link.link"
                                        type="button"
                                        @click="openSite(link.link)"
                                    >
                                        <Icon :icon="link.icon" />
                                    </button>
                                </div>
                            </header>

                            <footer class="code-techs">
                                <ul>
                                    <li v-for="tech in code.techs" :key="tech.name">
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
    @apply max-w-[1100px] mx-auto my-100px px-14px;

    &.a-before-enter {
        opacity: 0;
        transform: translateY(20px);
        transition: 0.3s ease-in;
    }

    &.a-enter {
        opacity: 1;
        transform: translateY(0);
    }

        .code-item {
            position: relative;
            visibility: visible;
            overflow: hidden;
            border: 1px solid color-mix(in srgb, var(--primary) 22%, transparent);
            border-radius: 8px;
            padding: 18px 22px;
            height: 100%;
            z-index: 1;
            background: color-mix(in srgb, var(--background) 92%, #001e2e);
            transition: transform 0.25s ease, border-color 0.25s ease;

            .code-title-row {
                display: flex;
                align-items: center;
                gap: 16px;
                margin-bottom: 14px;
            }

            .code-icon-tile {
                display: grid;
                width: 58px;
                height: 58px;
                flex: 0 0 auto;
                place-items: center;
                border: 1px solid color-mix(in srgb, var(--primary) 20%, transparent);
                border-radius: 7px;
                background: color-mix(in srgb, var(--background) 84%, #001c2a);
                color: var(--primary);

                svg {
                    width: 29px;
                    height: 29px;
                }
            }

            .code-item-inner {
                display: flex;
                justify-content: space-between;
                flex-direction: column;
                height: 100%;
                min-width: 0;

                .code-card-header {
                    display: flex;
                    flex-direction: column;
                    align-items: stretch;
                    justify-content: space-between;
                    gap: 14px;
                }

                .code-card-copy {
                    min-width: 0;
                }

                .code-title {
                    margin: 0;
                    color: var(--primary);
                    line-height: 1.15;
                }

                .code-description {
                    max-width: 760px;
                    color: color-mix(in srgb, var(--lightestSlate) 76%, transparent);

                    p {
                        margin: 0;
                    }
                }

                .item-links {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    color: var(--primary);

                    .item-links-toggle {
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
                            width: 20px;
                            height: 20px;
                        }

                        &:hover {
                            transform: translateY(-2px);
                            border-color: color-mix(in srgb, var(--primary) 55%, transparent);
                            background: color-mix(in srgb, var(--primary) 8%, transparent);
                        }
                    }
                }
            }

            .code-techs {
                margin-top: 18px;

                ul {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 8px;
                    padding: 0;
                    margin: 0;
                    list-style: none;
                }

                li {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    padding: 5px 9px;
                    border: 1px solid color-mix(in srgb, var(--primary) 18%, transparent);
                    border-radius: 999px;
                    color: color-mix(in srgb, var(--lightestSlate) 78%, transparent);
                    font-size: 13px;
                    line-height: 1;

                    svg {
                        color: var(--primary);
                    }
                }
            }

            &:hover {
                transform: translateY(-4px);
                border-color: color-mix(in srgb, var(--primary) 42%, transparent);
            }
        }
}

@media (max-width: 767px) {
    .code-challenge {
        .code-item {
            padding: 16px;
            border-radius: 14px;

            .code-title-row {
                gap: 12px;
                align-items: flex-start;
            }

            .code-icon-tile {
                width: 56px;
                height: 56px;

                svg {
                    width: 27px;
                    height: 27px;
                }
            }
        }
    }
}
</style>
