<script setup lang="ts">
import { Icon } from '@iconify/vue';

defineProps<{
    name: string;
    from: string;
    description: string;
    url: string;
    /** Carousel cards are fixed-width; grid cards stretch to their column. */
    fluid?: boolean;
}>();
</script>

<template>
    <div class="achievement-card" :class="{ 'achievement-card-fluid': fluid }">
        <div class="achievement-card-top">
            <span class="achievement-provider">{{ from }}</span>
        </div>
        <div class="achievement-title text-xl font-700">
            {{ name }}
        </div>
        <div class="achievement-description leading-6">
            {{ description }}
        </div>
        <a :href="url" target="_blank" rel="noopener noreferrer" class="achievement-link" @click.stop>
            <span>View Certificate</span>
            <Icon icon="mdi:open-in-new" class="text-lg" />
        </a>
    </div>
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

.achievement-card-fluid {
    width: 100%;
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

    .achievement-card-fluid {
        width: 100%;
    }
}
</style>
