<script setup lang="ts">
import { Icon } from "@iconify/vue";
</script>

<template>
    <section class="mx-auto w-full max-w-900px px-10px mb-90px">
        <div v-scrollanimation class="cta-card relative overflow-hidden">
            <div class="cta-card-inner px-22px py-56px sm:px-44px md:py-62px lg:px-70px flex flex-col items-center text-center relative overflow-hidden">
                <div class="cta-glow" aria-hidden="true"></div>
                <div class="cta-dots cta-dots-left" aria-hidden="true"></div>
                <div class="cta-dots cta-dots-right" aria-hidden="true"></div>
                <div class="cta-corner cta-corner-left" aria-hidden="true">
                    <span></span>
                    <i></i>
                </div>
                <div class="cta-corner cta-corner-right" aria-hidden="true">
                    <span></span>
                    <i></i>
                </div>

                <div class="cta-content flex flex-col items-center">
                    <div class="cta-badge inline-flex items-center gap-9px px-16px py-7px rounded-6px text-[var(--primary)] text-base font-800 uppercase mb-26px">
                        <span class="cta-dot-pulse w-8px h-8px rounded-full bg-[var(--primary)] inline-block"></span>
                        Available for work
                    </div>

                    <h2 class="lg:text-size-44px md:text-size-38px text-size-28px font-700 mb-14px leading-tight max-w-760px">
                        Hiring a senior
                        <span class="text-[var(--primary)] font-400">full-stack developer?</span>
                    </h2>

                    <p class="text-[var(--lightestSlate)] max-w-540px mb-32px leading-7">
                        Eight years of Laravel, Vue, and TypeScript, most of it spent keeping production systems
                        running. I'm glad to walk through the decisions behind anything on this page.
                    </p>

                    <div class="cta-actions flex flex-wrap items-center justify-center gap-14px mb-26px">
                        <router-link
                            to="/contact"
                            class="cta-btn inline-flex items-center justify-center gap-12px px-38px py-16px rounded-12px text-[var(--background)] font-500"
                        >
                            <Icon icon="tabler:send" class="text-lg" />
                            Get in touch
                        </router-link>

                        <a
                            href="/Jenuel Ganawed - Resume.pdf"
                            target="_blank"
                            class="cta-secondary inline-flex items-center justify-center gap-10px px-30px py-16px rounded-12px font-600"
                        >
                            <Icon icon="tabler:file-type-doc" class="text-lg" />
                            Download resume
                        </a>
                    </div>

                    <ul class="cta-meta flex flex-wrap items-center justify-center">
                        <li>Fully remote</li>
                        <li>Philippines &middot; UTC+8</li>
                        <li>me@jenuel.dev</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
.cta-content {
    position: relative;
    z-index: 2;
}

.cta-content h2 span {
    display: block;
}

.cta-meta {
    gap: 10px 22px;
    margin: 0;
    padding: 0;
    list-style: none;
    color: color-mix(in srgb, var(--lightestSlate) 62%, transparent);
    font-size: 14px;

    li {
        display: inline-flex;
        align-items: center;
    }

    li + li::before {
        content: "";
        width: 4px;
        height: 4px;
        margin-right: 22px;
        border-radius: 999px;
        background: color-mix(in srgb, var(--primary) 55%, transparent);
    }
}

.cta-secondary {
    border: 2px solid color-mix(in srgb, var(--primary) 34%, transparent);
    color: var(--primary);
    text-decoration: none;
    transition: transform 0.2s ease, border-color 0.2s ease, background 0.2s ease;

    &:hover {
        transform: translateY(-2px);
        border-color: color-mix(in srgb, var(--primary) 68%, transparent);
        background: color-mix(in srgb, var(--primary) 8%, transparent);
    }
}

.cta-card {
    border: 1px solid color-mix(in srgb, var(--primary) 32%, transparent);
    border-radius: 28px;
    background:
        radial-gradient(circle at 50% 0%, color-mix(in srgb, var(--primary) 18%, transparent), transparent 42%),
        linear-gradient(180deg, color-mix(in srgb, var(--primary) 8%, var(--background)), var(--background));
    box-shadow:
        inset 0 0 36px color-mix(in srgb, var(--primary) 10%, transparent),
        0 26px 70px rgba(0, 0, 0, 0.22);

    &.a-before-enter {
        opacity: 0;
        transform: translateY(24px);
        transition: 0.4s ease-in;
    }

    &.a-enter {
        opacity: 1;
        transform: translateY(0);
    }
}

.cta-card-inner {
    min-height: 365px;
    border-radius: 28px;
    background:
        linear-gradient(180deg, rgba(255, 255, 255, 0.018), transparent 36%),
        color-mix(in srgb, var(--background) 94%, #001a25);
}

.cta-glow {
    position: absolute;
    inset: 0;
    pointer-events: none;
    background:
        radial-gradient(circle at 50% 4%, color-mix(in srgb, var(--primary) 22%, transparent), transparent 26%),
        radial-gradient(circle at 9% 52%, color-mix(in srgb, var(--primary) 10%, transparent), transparent 19%),
        radial-gradient(circle at 91% 52%, color-mix(in srgb, var(--primary) 9%, transparent), transparent 18%);
    opacity: 0.8;
}

.cta-dots {
    position: absolute;
    width: 170px;
    height: 112px;
    background-image: radial-gradient(circle, color-mix(in srgb, var(--primary) 70%, transparent) 1.4px, transparent 1.4px);
    background-size: 15px 15px;
    opacity: 0.22;
    bottom: 58px;

    &.cta-dots-left {
        left: 30px;
    }

    &.cta-dots-right {
        right: 30px;
    }
}

.cta-corner {
    position: absolute;
    width: 112px;
    height: 92px;
    opacity: 0.38;

    span,
    i {
        position: absolute;
        display: block;
        border: 1px solid var(--primary);
        box-shadow: 0 0 16px color-mix(in srgb, var(--primary) 30%, transparent);
    }

    &::after {
        content: "";
        position: absolute;
        width: 6px;
        height: 6px;
        border-radius: 999px;
        background: var(--primary);
        box-shadow: 0 0 18px 5px color-mix(in srgb, var(--primary) 45%, transparent);
    }

    &.cta-corner-left {
        left: 14px;
        top: 26px;

        span {
            width: 78px;
            height: 54px;
            left: 0;
            bottom: 0;
        }

        i {
            width: 54px;
            height: 54px;
            left: 28px;
            top: 0;
        }

        &::after {
            right: 0;
            top: 36px;
        }
    }

    &.cta-corner-right {
        right: 18px;
        bottom: 46px;

        span {
            width: 48px;
            height: 48px;
            right: 0;
            top: 0;
        }

        i {
            width: 48px;
            height: 48px;
            right: 48px;
            bottom: 0;
        }

        &::after {
            right: 0;
            top: -4px;
        }
    }
}

.cta-badge {
    position: relative;
    border: 1px solid color-mix(in srgb, var(--primary) 22%, transparent);
    background: color-mix(in srgb, var(--primary) 7%, transparent);
    box-shadow: inset 0 0 18px color-mix(in srgb, var(--primary) 9%, transparent);
    letter-spacing: 0.08em;
}

.cta-btn {
    position: relative;
    border: 2px solid color-mix(in srgb, var(--primary) 56%, #ffffff);
    background: linear-gradient(180deg, color-mix(in srgb, var(--primary) 88%, #ffffff), var(--primary));
    box-shadow:
        0 0 0 3px color-mix(in srgb, var(--background) 92%, transparent),
        0 0 24px color-mix(in srgb, var(--primary) 55%, transparent);
    transition: transform 0.2s ease, box-shadow 0.2s ease, filter 0.2s ease;

    &:hover {
        transform: translateY(-2px);
        filter: brightness(1.04);
        box-shadow:
            0 0 0 3px color-mix(in srgb, var(--background) 92%, transparent),
            0 0 36px color-mix(in srgb, var(--primary) 68%, transparent);
    }
}

.cta-dot-pulse {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--primary) 60%, transparent);
    animation: pulse 2s infinite;
}

@keyframes pulse {
    0% { box-shadow: 0 0 0 0 color-mix(in srgb, var(--primary) 60%, transparent); }
    70% { box-shadow: 0 0 0 8px color-mix(in srgb, var(--primary) 0%, transparent); }
    100% { box-shadow: 0 0 0 0 color-mix(in srgb, var(--primary) 0%, transparent); }
}

@media (max-width: 768px) {
    .cta-dots,
    .cta-corner {
        opacity: 0.16;
        transform: scale(0.78);
    }

    .cta-dots-left {
        left: -30px;
    }

    .cta-dots-right {
        right: -30px;
    }
}

@media (max-width: 860px) {
    .cta-corner {
        display: none;
    }
}

@media (max-width: 520px) {
    /* stacked, so the inline separators would dangle at the start of a wrapped line */
    .cta-meta {
        flex-direction: column;
        gap: 9px;
    }

    .cta-meta li + li::before {
        display: none;
    }

    .cta-card,
    .cta-card-inner {
        border-radius: 22px;
    }

    .cta-card-inner {
        min-height: 420px;
    }

    .cta-btn,
    .cta-secondary {
        width: 100%;
        min-width: 0;
    }

    .cta-actions {
        width: 100%;
    }
}
</style>
