<script setup lang="ts">
import Achievements from '@/constant/achievements';
import { computed, onMounted, onUnmounted, ref } from 'vue';
import { Icon } from '@iconify/vue';
import { RouterLink } from 'vue-router';
import AchievementCard from './AchievementCard.vue';

interface AchievementItem {
    name: string;
    from: string;
    description: string;
    url: string;
    featured?: boolean;
}

const allAchievements = Achievements as AchievementItem[];

// The homepage carries only the degree and the substantial certificates; the
// full list (SoloLearn course badges included) lives on /certificates.
const achievements = computed(() => allAchievements.filter((item) => item.featured));
const totalCount = allAchievements.length;

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
            <div class="achievements-heading">
                <div>
                    <h2
                        class="lg:text-size-44px md:text-size-38px text-size-28px font-600 text-[var(--primary)] tracking-tight mb-15px">
                        education &amp; certifications
                    </h2>
                    <p class="text-lg leading-7">
                        My degree and the courses that actually shaped how I work. Continuous learning is part of the
                        job, and these are the milestones worth showing.
                    </p>
                </div>
                <RouterLink to="/certificates" class="achievements-view-all">
                    <span>View all {{ totalCount }}</span>
                    <Icon icon="tabler:arrow-up-right" />
                </RouterLink>
            </div>
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
                            <AchievementCard
                                :name="achievement.name"
                                :from="achievement.from"
                                :description="achievement.description"
                                :url="achievement.url"
                            />
                        </article>
                    </div>

                    <div class="flex gap-16px pr-16px md:gap-12px md:pr-12px">
                        <article
                            v-for="(achievement, i) in achievements"
                            :key="`b-${achievement.name}-${i}`"
                            class="cursor-grab"
                            @dragstart.prevent
                        >
                            <AchievementCard
                                :name="achievement.name"
                                :from="achievement.from"
                                :description="achievement.description"
                                :url="achievement.url"
                            />
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
.achievements-heading {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 22px;
    flex-wrap: wrap;
}

.achievements-view-all {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    flex-shrink: 0;
    padding: 9px 16px;
    border: 1px solid color-mix(in srgb, var(--primary) 38%, transparent);
    border-radius: 6px;
    color: var(--primary);
    font-weight: 700;
    text-decoration: none;
    white-space: nowrap;
    transition: transform 0.2s ease, border-color 0.2s ease, background 0.2s ease;

    &:hover {
        transform: translateY(-2px);
        border-color: color-mix(in srgb, var(--primary) 62%, transparent);
        background: color-mix(in srgb, var(--primary) 8%, transparent);
    }
}

@media (max-width: 600px) {
    .achievements-view-all {
        width: 100%;
        justify-content: center;
    }
}
</style>
