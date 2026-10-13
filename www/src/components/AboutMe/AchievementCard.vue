<script setup lang="ts">
import { Icon } from "@iconify/vue";

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
        <h2 class="achievement-title">
            {{ name }}
        </h2>
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
    flex-direction: column;
    min-width: 0;
    width: min(82vw, 330px);
    height: 100%;
    padding: 32px 28px;
    background: var(--background);
}
.achievement-card-fluid {
    width: 100%;
}
.achievement-card-top {
    padding-bottom: 20px;
    margin-bottom: 26px;
    border-bottom: 1px solid var(--craft-line);
}
.achievement-provider {
    color: var(--lightSlate);
    font: 10px/1.6 var(--craft-mono);
    text-transform: uppercase;
    letter-spacing: 0.06em;
}
.achievement-title {
    color: var(--white);
    font: 600 24px/1.2 var(--craft-heading);
    letter-spacing: -0.035em;
    margin: 0 0 16px;
    overflow-wrap: anywhere;
}
.achievement-description {
    margin-bottom: 28px;
    color: var(--lightSlate);
    font-size: 15px;
    line-height: 1.7;
}
.achievement-link {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    align-self: flex-start;
    margin-top: auto;
    padding: 12px 0;
    color: var(--white);
    font: 10px var(--craft-mono);
    text-transform: uppercase;
    letter-spacing: 0.06em;
}
.achievement-link:hover {
    color: var(--primary);
}
@media (max-width: 600px) {
    .achievement-card {
        padding: 28px 20px;
    }
}
</style>
