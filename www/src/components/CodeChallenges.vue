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
            class="lg:text-size-44px md:text-size-38px text-size-28px font-600 text-[var(--primary)] tracking-tight mb-15px md:px-10px">
            others
        </h2>
        <p class="text-lg md:px-10px w-[100%] leading-7">
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
                                        <h3 class="code-title text-xl font-800">
                                            {{ code.title }}
                                        </h3>
                                    </div>
                                    <div class="code-description text-base leading-6"
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
            @apply relative overflow-hidden rounded-8px px-22px py-18px h-full z-1;
            border: 1px solid color-mix(in srgb, var(--primary) 22%, transparent);
            background: color-mix(in srgb, var(--background) 92%, #001e2e);
            transition: transform 0.25s ease, border-color 0.25s ease;
            visibility: visible;

            .code-title-row {
                @apply flex items-center gap-16px mb-14px;
            }

            .code-icon-tile {
                @apply grid w-58px h-58px flex-none place-items-center rounded-7px;
                border: 1px solid color-mix(in srgb, var(--primary) 20%, transparent);
                background: color-mix(in srgb, var(--background) 84%, #001c2a);
                color: var(--primary);

                svg {
                    @apply w-29px h-29px;
                }
            }

            .code-item-inner {
                @apply flex justify-between flex-col h-full min-w-0;

                .code-card-header {
                    @apply flex flex-col items-stretch justify-between gap-14px;
                }

                .code-card-copy {
                    @apply min-w-0;
                }

                .code-title {
                    @apply m-0;
                    color: var(--primary);
                    line-height: 1.15;
                }

                .code-description {
                    @apply max-w-760px;
                    color: color-mix(in srgb, var(--lightestSlate) 76%, transparent);

                    p {
                        @apply m-0;
                    }
                }

                .item-links {
                    @apply inline-flex items-center gap-8px;
                    color: var(--primary);

                    .item-links-toggle {
                        @apply grid w-34px h-34px place-items-center rounded-6px cursor-pointer;
                        border: 1px solid color-mix(in srgb, var(--primary) 32%, transparent);
                        background: transparent;
                        color: var(--primary);
                        transition: border-color 0.2s ease, background 0.2s ease, transform 0.2s ease;

                        svg {
                            @apply w-20px h-20px;
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
                @apply mt-18px;

                ul {
                    @apply flex flex-wrap gap-8px p-0 m-0 list-none;
                }

                li {
                    @apply inline-flex items-center gap-6px px-9px py-5px rounded-full text-size-13px leading-none;
                    border: 1px solid color-mix(in srgb, var(--primary) 18%, transparent);
                    color: color-mix(in srgb, var(--lightestSlate) 78%, transparent);

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
            @apply p-16px rounded-14px;

            .code-title-row {
                @apply gap-12px items-start;
            }

            .code-icon-tile {
                @apply w-56px h-56px;

                svg {
                    @apply w-27px h-27px;
                }
            }
        }
    }
}
</style>
