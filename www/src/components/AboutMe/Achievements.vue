<script setup lang="ts">
import Achievements from '@/constant/achievements';
import { onMounted, onUnmounted, ref } from 'vue';

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
                class="achievements-loop-wrapper"
                :class="{ 'is-dragging': isDragging }"
                aria-label="Sliding achievements list"
                @pointerdown="onPointerDown"
                @pointermove="onPointerMove"
                @pointerup="onPointerUp"
                @pointercancel="onPointerUp"
                @click.capture="onClickCapture"
            >
                <div ref="loopTrackRef" class="achievements-loop-track">
                    <div ref="firstGroupRef" class="achievements-loop-group">
                        <a
                            v-for="(achievement, i) in achievements"
                            :key="`a-${achievement.name}-${i}`"
                            :href="achievement.url"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="achievement-link"
                            @dragstart.prevent
                        >
                            <article class="achievement-card">
                                <p class="achievement-source">{{ achievement.from }}</p>
                                <div class="item-title md:text-size-24px text-size-20px font-700">
                                    {{ achievement.name }}
                                </div>
                                <div class="item-des md:text-lg md:leading-normal leading-snug">
                                    {{ achievement.description }}
                                </div>
                            </article>
                        </a>
                    </div>

                    <div class="achievements-loop-group" aria-hidden="true">
                    <a
                        v-for="(achievement, i) in achievements"
                        :key="`b-${achievement.name}-${i}`"
                        :href="achievement.url"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="achievement-link"
                        @dragstart.prevent
                    >
                        <article class="achievement-card">
                            <p class="achievement-source">{{ achievement.from }}</p>
                            <div class="item-title md:text-size-24px text-size-20px font-700">
                                {{ achievement.name }}
                            </div>
                            <div class="item-des md:text-lg md:leading-normal leading-snug">
                                {{ achievement.description }}
                            </div>
                        </article>
                    </a>
                </div>
                </div>
            </div>
            <div class="sr-only" aria-live="polite">
                Showing {{ achievements.length }} achievements in a continuous sliding carousel.
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.achievements-loop-wrapper {
    margin-top: 22px;
    overflow: hidden;
    position: relative;
    mask-image: linear-gradient(to right, transparent, black 7%, black 93%, transparent);
    cursor: grab;
    touch-action: pan-y;

    &.is-dragging {
        cursor: grabbing;
        user-select: none;
    }

    &::before,
    &::after {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        width: 36px;
        pointer-events: none;
        z-index: 1;
    }

    &::before {
        left: 0;
        background: linear-gradient(90deg, var(--background), transparent);
    }

    &::after {
        right: 0;
        background: linear-gradient(270deg, var(--background), transparent);
    }
}

.achievements-loop-track {
    width: max-content;
    display: flex;
    will-change: transform;
    margin-top: 20px;
}

.achievements-loop-group {
    display: flex;
    gap: 16px;
    padding-right: 16px;
}

.achievement-link {
    text-decoration: none;
    color: inherit;
    cursor: grab;
}

.achievement-card {
    width: clamp(260px, 36vw, 360px);
    min-height: 225px;
    border-radius: 18px;
    border: 1px solid color-mix(in srgb, var(--slate) 20%, transparent);
    padding: 18px;
    background:
        radial-gradient(circle at 0 0, color-mix(in srgb, var(--primary) 12%, transparent), transparent 50%),
        color-mix(in srgb, var(--lightBackground) 92%, transparent);
    box-shadow: 0 8px 24px -20px color-mix(in srgb, var(--primary) 60%, transparent);
    transition: transform 0.22s ease, border-color 0.22s ease;

    &:hover {
        transform: translateY(-3px);
        border-color: color-mix(in srgb, var(--primary) 45%, var(--slate));
    }
}

.achievement-source {
    display: inline-flex;
    margin: 0 0 12px;
    padding: 4px 10px;
    border-radius: 999px;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.02em;
    color: var(--primary);
    background: color-mix(in srgb, var(--primary) 12%, var(--lightBackground));
}

.item-title {
    margin-bottom: 10px;
}

.item-des {
    margin: 0;
}

.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
}

@media (max-width: 767px) {
    .achievement-card {
        width: min(80vw, 310px);
        min-height: 205px;
    }
    .achievements-loop-group {
        gap: 12px;
        padding-right: 12px;
    }
}

</style>