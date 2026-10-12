<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch } from "vue";

const props = defineProps<{
    sections: { id: string; label: string }[];
    activeSection: string;
}>();
const rail = ref<HTMLElement | null>(null);
const progress = ref(0);
const rulerScroll = ref(0);
const rulerSpan = ref(1);
const progressMarker = ref(16);
type Letter = { element: HTMLElement; advance: number; center: number };
type RailWord = { element: HTMLElement; section: HTMLElement; letters: Letter[]; width: number };
type Pose = { x: number; y: number; rotation: number; scale: number };
let words: RailWord[] = [];
let frame = 0;
let resizeObserver: ResizeObserver | undefined;
let reducedMotion: MediaQueryList;
let disposed = false;
const clamp = (value: number) => Math.max(0, Math.min(1, value));
const ease = (value: number) => (value < 0.5 ? 4 * value ** 3 : 1 - (-2 * value + 2) ** 3 / 2);

function measureWords() {
    if (!rail.value || disposed) return;
    const context = document.createElement("canvas").getContext("2d");
    if (!context) return;
    context.font = `700 24px ${getComputedStyle(rail.value).fontFamily}`;
    words = Array.from(rail.value.querySelectorAll<HTMLElement>(".scroll-rail-link")).flatMap((element, index) => {
        const section = document.getElementById(props.sections[index].id);
        if (!section) return [];
        let prefix = "";
        const letters = Array.from(element.querySelectorAll<HTMLElement>(".scroll-rail-letter")).map((letter) => {
            const start = context.measureText(prefix).width;
            prefix += letter.textContent;
            const end = context.measureText(prefix).width;
            return { element: letter, advance: end - start, center: (start + end) / 2 };
        });
        return [{ element, section, letters, width: context.measureText(prefix).width }];
    });
    scheduleUpdate();
}

function paintWord(word: RailWord, from: Pose, to: Pose, amount: number, reverse: boolean) {
    const count = word.letters.length;
    const stagger = 0.1;
    let left = Infinity,
        right = -Infinity,
        top = Infinity,
        bottom = -Infinity;
    word.letters.forEach((letter, index) => {
        const order = reverse ? count - index - 1 : index;
        const t = ease(clamp(amount * (1 + (count - 1) * stagger) - order * stagger));
        const position = (pose: Pose) =>
            pose.rotation === 0
                ? { x: pose.x - (word.width - letter.center) * pose.scale, y: pose.y }
                : { x: pose.x, y: pose.y + (word.width / 2 - letter.center) * pose.scale };
        const start = position(from),
            end = position(to);
        // A quadratic curve bows each character into the gutter as it turns.
        const bend = amount > 0 && amount < 1 ? 28 : 0;
        const controlX = (start.x + end.x) / 2 - bend;
        const controlY = (start.y + end.y) / 2;
        const x = (1 - t) ** 2 * start.x + 2 * (1 - t) * t * controlX + t ** 2 * end.x;
        const y = (1 - t) ** 2 * start.y + 2 * (1 - t) * t * controlY + t ** 2 * end.y;
        const rotation = from.rotation + (to.rotation - from.rotation) * t;
        const scale = from.scale + (to.scale - from.scale) * t;
        letter.element.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%) rotate(${rotation}deg) scale(${scale})`;
        const horizontal = Math.abs(rotation) < 45;
        const halfWidth = ((horizontal ? letter.advance : 24) * scale) / 2;
        const halfHeight = ((horizontal ? 24 : letter.advance) * scale) / 2;
        left = Math.min(left, x - halfWidth);
        right = Math.max(right, x + halfWidth);
        top = Math.min(top, y - halfHeight);
        bottom = Math.max(bottom, y + halfHeight);
    });
    // The real link follows the lettering, including its vertical resting pose.
    word.element.style.left = `${left - 5}px`;
    word.element.style.top = `${top - 5}px`;
    word.element.style.width = `${right - left + 10}px`;
    word.element.style.height = `${bottom - top + 10}px`;
}

function update() {
    frame = 0;
    if (!rail.value) return;
    const height = rail.value.clientHeight;
    if (!height) return;
    const right = rail.value.clientWidth - 50;
    const scrollRange = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    progress.value = clamp(window.scrollY / scrollRange) * 100;
    // Ticks belong to the document, while the progress marker travels through
    // the viewport. Only the nearby portion of the ruler is visible.
    rulerScroll.value = window.scrollY;
    rulerSpan.value = scrollRange + Math.max(1, height - 32);
    progressMarker.value = 16 + (progress.value / 100) * Math.max(1, height - 32);
    const bounds = words.map((word) => word.section.getBoundingClientRect());
    const completed = bounds.filter((bound) => bound.top <= 64).length;
    words.forEach((word, index) => {
        const current = word.section.id === props.activeSection;
        const fit = Math.min(1, (rail.value!.clientWidth - 80) / word.width);
        const topPose = { x: right, y: 20 + index * 24, rotation: 0, scale: (current ? 1 : 0.62) * fit };
        const queued = { x: right, y: height - 16 - (words.length - index - 1) * 24, rotation: 0, scale: 0.62 * fit };
        const sectionY = bounds[index].top - 64;
        const flipLine = 20 + completed * 24;
        const verticalScale = 0.8 * fit;
        const verticalHalf = (word.width * verticalScale) / 2;
        const vertical = {
            x: right - 10,
            y: Math.max(flipLine + verticalHalf, Math.min(queued.y - verticalHalf - 24, sectionY + verticalHalf)),
            rotation: -90,
            scale: verticalScale,
        };
        const flip = clamp((flipLine + 180 - sectionY) / 180);
        const detach = clamp((queued.y + 220 - sectionY) / 220);
        if (reducedMotion.matches || height < 360) {
            paintWord(word, queued, queued, 1, false);
        } else if (flip > 0 || sectionY <= 0) {
            paintWord(word, vertical, topPose, sectionY <= 0 ? 1 : flip, true);
        } else {
            paintWord(word, queued, vertical, detach, false);
        }
    });
}

function scheduleUpdate() {
    if (!disposed && !frame) frame = requestAnimationFrame(update);
}

watch(() => props.activeSection, scheduleUpdate);
onMounted(() => {
    reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    measureWords();
    document.fonts.ready.then(measureWords);
    resizeObserver = new ResizeObserver(scheduleUpdate);
    resizeObserver.observe(document.body);
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", measureWords);
    reducedMotion.addEventListener("change", scheduleUpdate);
});
onUnmounted(() => {
    disposed = true;
    cancelAnimationFrame(frame);
    resizeObserver?.disconnect();
    window.removeEventListener("scroll", scheduleUpdate);
    window.removeEventListener("resize", measureWords);
    reducedMotion.removeEventListener("change", scheduleUpdate);
});
</script>

<template>
    <nav ref="rail" class="scroll-section-rail" aria-label="Page sections">
        <div class="scroll-rail-ruler" aria-hidden="true">
            <span
                v-for="tick in 501"
                :key="tick"
                class="scroll-rail-tick"
                :style="{ top: `${((tick - 1) / 500) * rulerSpan - rulerScroll + 16}px` }"
            >
                <span
                    v-if="(tick - 1) % 5 === 0"
                    :style="{
                        opacity:
                            Math.abs(((tick - 1) / 500) * rulerSpan - rulerScroll + 16 - progressMarker) < 18 ? 0 : 1,
                    }"
                    >{{ (tick - 1) / 5 }}</span
                >
            </span>
            <div class="scroll-rail-progress" :style="{ top: `${progressMarker}px` }">
                <span>{{ Math.round(progress).toString().padStart(3, "0") }}%</span>
            </div>
        </div>
        <router-link
            v-for="section in sections"
            :key="section.id"
            :to="{ path: '/', hash: `#${section.id}` }"
            class="scroll-rail-link"
            :class="{ 'is-current-section': activeSection === section.id }"
            :aria-current="activeSection === section.id ? 'location' : null"
        >
            <span class="sr-only">{{ section.label }}</span>
            <span class="scroll-rail-lettering" aria-hidden="true">
                <span v-for="(letter, index) in section.label.toUpperCase()" :key="index" class="scroll-rail-letter">{{
                    letter === " " ? "\u00a0" : letter
                }}</span>
            </span>
        </router-link>
    </nav>
</template>

<style scoped lang="scss">
.scroll-section-rail {
    display: block;
    position: fixed;
    top: 64px;
    right: 24px;
    bottom: 32px;
    width: 260px;
    z-index: 20;
    pointer-events: none;
    font-family: var(--craft-heading);
    &::before {
        content: "";
        position: absolute;
        right: -24px;
        bottom: -32px;
        width: 360px;
        height: 320px;
        background: radial-gradient(
            ellipse at bottom right,
            color-mix(in srgb, var(--background) 95%, transparent) 10%,
            transparent 75%
        );
        pointer-events: none;
    }
}
.scroll-rail-link {
    position: absolute;
    pointer-events: auto;
    color: var(--slate);
    transition: color 240ms ease;
    &::before {
        content: "";
        position: absolute;
        inset: -24px -32px;
        background: radial-gradient(ellipse, color-mix(in srgb, var(--background) 80%, transparent), transparent 75%);
        filter: blur(10px);
        pointer-events: none;
    }
    &.is-current-section,
    &:hover,
    &:focus-visible {
        color: var(--white);
    }
}
.scroll-rail-lettering {
    position: fixed;
    top: 64px;
    right: 24px;
    width: 260px;
    height: 0;
    pointer-events: none;
}
.scroll-rail-letter {
    position: absolute;
    top: 0;
    left: 0;
    font: 700 24px/1 var(--craft-heading);
    white-space: pre;
    transition: transform 100ms linear;
    text-shadow:
        0 2px 5px var(--background),
        0 0 18px var(--background),
        0 0 36px var(--background);
}
.scroll-rail-ruler {
    position: absolute;
    inset: 0 -24px 0 auto;
    width: 64px;
    overflow: hidden;
    color: var(--slate);
    font: 9px var(--craft-mono);
}
.scroll-rail-tick {
    position: absolute;
    right: 0;
    width: 8px;
    border-top: 1px solid var(--craft-line);
    &:has(span) {
        width: 16px;
    }
    span {
        position: absolute;
        right: 22px;
        top: -6px;
    }
}
.scroll-rail-progress {
    position: absolute;
    right: 0;
    width: 40px;
    border-top: 1px solid var(--primary);
    box-shadow: 0 -2px 8px color-mix(in srgb, var(--primary) 35%, transparent);
    span {
        position: absolute;
        right: 0;
        top: 4px;
        color: var(--primary);
    }
}
@media (max-width: 800px) {
    .scroll-section-rail {
        display: none;
    }
}
</style>
