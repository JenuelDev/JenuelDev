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
                            <div
                                class="w-[min(80vw,310px)] md:w-[clamp(260px,36vw,360px)] min-h-205px md:min-h-225px rounded-18px border border-[var(--slate)]/20 p-18px bg-[var(--lightBackground)]/92 shadow-sm hover:shadow-md transition-all duration-220 hover:-translate-y-3px hover:border-[var(--primary)]/45 flex flex-col"
                            >
                                <span class="inline-flex w-fit m-0 mb-12px px-10px py-4px rounded-full text-size-12px font-600 [letter-spacing:0.02em] text-[var(--primary)] bg-gray-1 bg-opacity-10">{{ achievement.from }}</span>
                                <div class="mb-10px md:text-size-24px text-size-20px font-700">
                                    {{ achievement.name }}
                                </div>
                                <div class="m-0 mb-14px md:text-lg md:leading-normal leading-snug">
                                    {{ achievement.description }}
                                </div>
                                <a
                                    :href="achievement.url"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="mt-auto inline-flex items-center gap-6px w-fit rounded-md border border-[var(--primary)] px-12px py-7px text-size-14px font-600 text-[var(--primary)] no-underline hover:bg-[var(--primary)] hover:text-[var(--background)] transition-colors"
                                    @click.stop
                                >
                                    <i class="bx bx-link-external"></i>
                                    View
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
                            <div
                                class="w-[min(80vw,310px)] md:w-[clamp(260px,36vw,360px)] min-h-205px md:min-h-225px rounded-18px border border-[var(--slate)]/20 p-18px bg-[var(--lightBackground)]/92 shadow-sm hover:shadow-md transition-all duration-220 hover:-translate-y-3px hover:border-[var(--primary)]/45 flex flex-col"
                            >
                                <span class="inline-flex w-fit m-0 mb-12px px-10px py-4px rounded-full text-size-12px font-600 [letter-spacing:0.02em] text-[var(--primary)] bg-gray-1 bg-opacity-10">{{ achievement.from }}</span>
                                <div class="mb-10px md:text-size-24px text-size-20px font-700">
                                    {{ achievement.name }}
                                </div>
                                <div class="m-0 mb-14px md:text-lg md:leading-normal leading-snug">
                                    {{ achievement.description }}
                                </div>
                                <a
                                    :href="achievement.url"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="mt-auto inline-flex items-center gap-6px w-fit rounded-md border border-[var(--primary)] px-12px py-7px text-size-14px font-600 text-[var(--primary)] no-underline hover:bg-[var(--primary)] hover:text-[var(--background)] transition-colors"
                                    @click.stop
                                >
                                    <i class="bx bx-link-external"></i>
                                    View
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
