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
    <section id="achievements" v-scrollanimation class="mx-auto w-full max-w-900px px-10px mb-90px">
        <div class="relative">
            <h2
                class="lg:text-size-44px md:text-size-38px text-size-28px font-600 text-[var(--primary)] tracking-tight mb-15px">
                Achievements
            </h2>
            <p class="text-lg leading-7 mb-5">
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
                <div ref="loopTrackRef" class="w-max flex will-change-transform mt-20px">
                    <div ref="firstGroupRef" class="flex gap-16px pr-16px md:gap-12px md:pr-12px">
                        <article
                            v-for="(achievement, i) in achievements"
                            :key="`a-${achievement.name}-${i}`"
                            class="cursor-grab"
                            @dragstart.prevent
                        >
                            <div class="achievement-card">
                                <div class="achievement-card-top">
                                    <span class="achievement-provider">{{ achievement.from }}</span>
                                </div>
                                <div class="achievement-title text-xl font-700">
                                    {{ achievement.name }}
                                </div>
                                <div class="achievement-description leading-6">
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
                                    <Icon icon="mdi:open-in-new" class="text-lg" />
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
                                <div class="achievement-card-top">
                                    <span class="achievement-provider">{{ achievement.from }}</span>
                                </div>
                                <div class="achievement-title text-xl font-700">
                                    {{ achievement.name }}
                                </div>
                                <div class="achievement-description leading-6">
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
                                    <Icon icon="mdi:open-in-new" class="text-lg" />
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
    display: flex;
    width: min(82vw, 330px);
    min-height: 272px;
    height: 100%;
    flex-direction: column;
    overflow: hidden;
    border: 1px solid color-mix(in srgb, var(--primary) 34%, transparent);
    border-radius: 10px;
    padding: 20px;
    background: color-mix(in srgb, var(--background) 92%, #001e2e);
    transition: transform 0.22s ease, border-color 0.22s ease;

    &:hover {
        transform: translateY(-5px);
        border-color: color-mix(in srgb, var(--primary) 62%, transparent);
    }
}

.achievement-card-top {
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
    font-weight: 700;
    letter-spacing: 0.04em;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.achievement-title {
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
}

.achievement-description {
    display: -webkit-box;
    margin: 0 0 18px;
    overflow: hidden;
    color: color-mix(in srgb, var(--lightestSlate) 76%, transparent);
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
}

.achievement-link {
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
    font-weight: 800;
    text-decoration: none;
    transition: transform 0.2s ease, background 0.2s ease, border-color 0.2s ease;

    &:hover {
        transform: translateY(-2px);
        border-color: color-mix(in srgb, var(--primary) 70%, transparent);
        background: color-mix(in srgb, var(--primary) 8%, transparent);
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
