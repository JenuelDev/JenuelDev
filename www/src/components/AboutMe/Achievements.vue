<script setup lang="ts">
import Achievements from '@/constant/achievements';
import { onMounted, onUnmounted, ref } from 'vue';
import { Icon } from '@iconify/vue';

interface AchievementItem {
    name: string;
    from: string;
    description: string;
    url: string;
}

const achievements = Achievements as AchievementItem[];

const loopWrapperRef = ref<HTMLDivElement | null>(null);
const loopTrackRef = ref<HTMLDivElement | null>(null);
const firstGroupRef = ref<HTMLDivElement | null>(null);
const isDragging = ref(false);

const AUTO_SCROLL_SPEED = 30;
const DRAG_CLICK_THRESHOLD = 6;

let rafId = 0;
let previousTime = 0;
let pointerDown = false;
let startX = 0;
let startOffset = 0;
let hasDragged = false;
let trackOffset = 0;
let loopWidth = 0;
let resizeObserver: ResizeObserver | null = null;

function renderTrackPosition() {
    const track = loopTrackRef.value;
    if (!track) return;
    track.style.transform = `translate3d(${-trackOffset}px, 0, 0)`;
}

function normalizeTrackOffset() {
    if (!loopWidth) return;

    if (trackOffset >= loopWidth) {
        trackOffset -= loopWidth;
    }

    if (trackOffset < 0) {
        trackOffset += loopWidth;
    }

    renderTrackPosition();
}

function updateLoopWidth() {
    const firstGroup = firstGroupRef.value;
    if (!firstGroup) return;

    loopWidth = firstGroup.scrollWidth;
    if (!loopWidth) return;

    if (trackOffset >= loopWidth) {
        trackOffset = trackOffset % loopWidth;
    }

    renderTrackPosition();
}

function autoScroll(timestamp: number) {
    if (!previousTime) previousTime = timestamp;

    const deltaTime = (timestamp - previousTime) / 1000;
    previousTime = timestamp;

    if (!pointerDown && loopWidth > 0) {
        trackOffset += AUTO_SCROLL_SPEED * deltaTime;
        normalizeTrackOffset();
    }

    rafId = window.requestAnimationFrame(autoScroll);
}

function onPointerDown(event: PointerEvent) {
    const wrapper = loopWrapperRef.value;
    if (!wrapper) return;

    const target = event.target as HTMLElement | null;
    if (target?.closest('a, button')) {
        hasDragged = false;
        return;
    }

    pointerDown = true;
    hasDragged = false;
    isDragging.value = true;
    startX = event.clientX;
    startOffset = trackOffset;
    wrapper.setPointerCapture(event.pointerId);
}

function onPointerMove(event: PointerEvent) {
    if (!pointerDown) return;

    const dragDelta = event.clientX - startX;
    if (Math.abs(dragDelta) > DRAG_CLICK_THRESHOLD) {
        hasDragged = true;
    }

    trackOffset = startOffset - dragDelta;
    normalizeTrackOffset();
}

function onPointerUp(event: PointerEvent) {
    const wrapper = loopWrapperRef.value;
    if (!wrapper) return;

    if (wrapper.hasPointerCapture(event.pointerId)) {
        wrapper.releasePointerCapture(event.pointerId);
    }

    pointerDown = false;
    isDragging.value = false;
    // Reset drag flag after release so subsequent normal clicks are not blocked.
    hasDragged = false;
}

function onClickCapture(event: MouseEvent) {
    if (!hasDragged) return;
    event.preventDefault();
    event.stopPropagation();
    hasDragged = false;
}

onMounted(() => {
    updateLoopWidth();

    if (typeof window !== 'undefined' && 'ResizeObserver' in window) {
        resizeObserver = new ResizeObserver(() => {
            updateLoopWidth();
        });

        if (loopWrapperRef.value) {
            resizeObserver.observe(loopWrapperRef.value);
        }

        if (firstGroupRef.value) {
            resizeObserver.observe(firstGroupRef.value);
        }
    }

    rafId = window.requestAnimationFrame(autoScroll);
});

onUnmounted(() => {
    window.cancelAnimationFrame(rafId);
    resizeObserver?.disconnect();
});
</script>
<template>
    <section id="achievements" v-scrollanimation class="mx-auto w-full max-w-1000px pt-10">
        <div class="relative">
            <h2
                class="lg:text-size-52px md:text-size-44px text-size-36px font-600 text-[var(--primary)] tracking-tight mt-10px mb-15px md:px-10px">
                Achievements
            </h2>
            <p class="md:text-size-24px text-size-20px md:px-10px  md:leading-relaxed leading-relaxed mb-5">
                During my professional journey, I've embraced continuous learning as an essential part of growth. There
                are many ways to learn, such as joining projects or taking courses. Through these experiences, I've been
                able to achieve significant milestones.
            </p>
            <div
                ref="loopWrapperRef"
                class="mt-22px overflow-hidden relative cursor-grab touch-pan-y [mask-image:linear-gradient(to_right,transparent,black_7%,black_93%,transparent)]"
                :class="{ 'cursor-grabbing select-none': isDragging }"
                aria-label="Sliding achievements list"
                @pointerdown="onPointerDown"
                @pointermove="onPointerMove"
                @pointerup="onPointerUp"
                @pointercancel="onPointerUp"
                @click.capture="onClickCapture"
            >
                <div class="absolute left-0 top-0 bottom-0 w-36px pointer-events-none z-1 bg-gradient-to-r from-[var(--background)] to-transparent"></div>
                <div class="absolute right-0 top-0 bottom-0 w-36px pointer-events-none z-1 bg-gradient-to-l from-[var(--background)] to-transparent"></div>

                <div ref="loopTrackRef" class="w-max flex will-change-transform mt-20px">
                    <div ref="firstGroupRef" class="flex gap-16px pr-16px md:gap-12px md:pr-12px">
                        <article
                            v-for="(achievement, i) in achievements"
                            :key="`a-${achievement.name}-${i}`"
                            class="cursor-grab"
                            @dragstart.prevent
                        >
                            <div class="achievement-card">
                                <div class="achievement-dots" aria-hidden="true"></div>
                                <div class="achievement-card-top">
                                    <span class="achievement-provider">{{ achievement.from }}</span>
                                </div>
                                <div class="achievement-title md:text-size-22px text-size-20px font-800">
                                    {{ achievement.name }}
                                </div>
                                <div class="achievement-description md:text-size-16px text-size-15px leading-6">
                                    {{ achievement.description }}
                                </div>
                                <a
                                    :href="achievement.url"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="achievement-link"
                                    @click.stop
                                >
                                    <span>View Certificate</span>
                                    <Icon icon="mdi:open-in-new" class="text-size-17px" />
                                </a>
                            </div>
                        </article>
                    </div>

                    <div class="flex gap-16px pr-16px md:gap-12px md:pr-12px">
                        <article
                            v-for="(achievement, i) in achievements"
                            :key="`b-${achievement.name}-${i}`"
                            class="cursor-grab"
                            @dragstart.prevent
                        >
                            <div class="achievement-card">
                                <div class="achievement-dots" aria-hidden="true"></div>
                                <div class="achievement-card-top">
                                    <span class="achievement-provider">{{ achievement.from }}</span>
                                </div>
                                <div class="achievement-title md:text-size-22px text-size-20px font-800">
                                    {{ achievement.name }}
                                </div>
                                <div class="achievement-description md:text-size-16px text-size-15px leading-6">
                                    {{ achievement.description }}
                                </div>
                                <a
                                    :href="achievement.url"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="achievement-link"
                                    @click.stop
                                >
                                    <span>View Certificate</span>
                                    <Icon icon="mdi:open-in-new" class="text-size-17px" />
                                </a>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
            <div class="sr-only" aria-live="polite">
                Showing {{ achievements.length }} achievements in a continuous sliding carousel.
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
.achievement-card {
    position: relative;
    display: flex;
    width: min(82vw, 330px);
    min-height: 272px;
    height: 100%;
    flex-direction: column;
    overflow: hidden;
    border: 1px solid color-mix(in srgb, var(--primary) 34%, transparent);
    border-radius: 10px;
    padding: 20px;
    background:
        radial-gradient(circle at 12% 0%, color-mix(in srgb, var(--primary) 13%, transparent), transparent 34%),
        radial-gradient(circle at 100% 100%, color-mix(in srgb, var(--primary) 7%, transparent), transparent 42%),
        color-mix(in srgb, var(--background) 92%, #001e2e);
    box-shadow:
        inset 0 0 24px color-mix(in srgb, var(--primary) 7%, transparent),
        0 20px 55px -38px color-mix(in srgb, var(--primary) 55%, transparent);
    transition: transform 0.22s ease, border-color 0.22s ease, box-shadow 0.22s ease;

    &:hover {
        transform: translateY(-5px);
        border-color: color-mix(in srgb, var(--primary) 62%, transparent);
        box-shadow:
            inset 0 0 32px color-mix(in srgb, var(--primary) 11%, transparent),
            0 22px 60px -34px color-mix(in srgb, var(--primary) 75%, transparent);
    }
}

.achievement-dots {
    position: absolute;
    top: 20px;
    right: 20px;
    width: 66px;
    height: 46px;
    background-image: radial-gradient(circle, color-mix(in srgb, var(--primary) 68%, transparent) 1.4px, transparent 1.4px);
    background-size: 16px 16px;
    opacity: 0.32;
}

.achievement-card-top {
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
}

.achievement-provider {
    max-width: 180px;
    padding: 5px 10px;
    border: 1px solid color-mix(in srgb, var(--primary) 28%, transparent);
    border-radius: 999px;
    color: var(--primary);
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.04em;
    background: color-mix(in srgb, var(--primary) 7%, transparent);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.achievement-title {
    position: relative;
    z-index: 1;
    margin-bottom: 10px;
    color: color-mix(in srgb, var(--lightestSlate) 96%, #ffffff);
    line-height: 1.18;
}

.achievement-title::after {
    content: "";
    display: block;
    width: 48px;
    height: 2px;
    margin-top: 12px;
    background: var(--primary);
    box-shadow: 0 0 12px color-mix(in srgb, var(--primary) 58%, transparent);
}

.achievement-description {
    position: relative;
    z-index: 1;
    display: -webkit-box;
    margin: 0 0 18px;
    overflow: hidden;
    color: color-mix(in srgb, var(--lightestSlate) 76%, transparent);
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
}

.achievement-link {
    position: relative;
    z-index: 1;
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    width: fit-content;
    min-width: 164px;
    margin-top: auto;
    padding: 10px 14px;
    border: 1px solid color-mix(in srgb, var(--primary) 46%, transparent);
    border-radius: 6px;
    color: var(--primary);
    font-size: 14px;
    font-weight: 800;
    text-decoration: none;
    transition: transform 0.2s ease, background 0.2s ease, box-shadow 0.2s ease;

    &:hover {
        transform: translateY(-2px);
        background: color-mix(in srgb, var(--primary) 8%, transparent);
        box-shadow: 0 0 18px color-mix(in srgb, var(--primary) 22%, transparent);
    }
}

@media (min-width: 768px) {
    .achievement-card {
        width: clamp(285px, 34vw, 365px);
        min-height: 292px;
        padding: 22px;
    }
}
</style>
