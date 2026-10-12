<script setup lang="ts">
import { Icon } from "@iconify/vue";

withDefaults(
    defineProps<{
        label: string;
        title: string;
        description?: string;
        meta?: string;
        flush?: boolean;
        prose?: boolean;
    }>(),
    { flush: false, prose: false },
);
</script>

<template>
    <section class="craft-page">
        <div class="section-index">
            <span>{{ label }}</span>
            <span v-if="meta">{{ meta }}</span>
        </div>
        <header class="craft-page-heading">
            <router-link to="/" class="craft-page-back"><Icon icon="tabler:arrow-left" /> Back to home</router-link>
            <h1>
                <slot name="title">{{ title }}</slot>
            </h1>
            <p v-if="description" class="craft-page-description">{{ description }}</p>
            <slot name="intro" />
        </header>
        <div class="craft-page-body" :class="{ 'craft-page-body-flush': flush, 'craft-prose': prose }">
            <slot />
        </div>
    </section>
</template>

<style scoped lang="scss">
.craft-page {
    width: min(1280px, calc(100% - 80px));
    margin: 0 auto;
    border-inline: 1px solid var(--craft-line);
}
.craft-page-heading {
    padding: 64px 40px 72px;
}
.craft-page-back {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 40px;
    color: var(--lightSlate);
    font: 11px var(--craft-mono);
    text-transform: uppercase;
    letter-spacing: 0.06em;
}
.craft-page-back:hover {
    color: var(--primary);
}
h1 {
    max-width: 1000px;
    margin: 0 0 24px;
    color: var(--white);
    font: 600 clamp(36px, 4.5vw, 64px) / 1.05 var(--craft-heading);
    letter-spacing: -0.045em;
    overflow-wrap: anywhere;
}
.craft-page-description {
    max-width: 720px;
    margin: 0;
    font-size: 18px;
    line-height: 1.7;
}
.craft-page-body {
    padding: 40px 40px 64px;
    border-top: 1px solid var(--craft-line);
}
.craft-page-body-flush {
    padding: 0;
}
@media (max-width: 800px) {
    .craft-page {
        width: calc(100% - 32px);
    }
    .craft-page-heading {
        padding: 40px 20px 48px;
    }
    .craft-page-back {
        margin-bottom: 32px;
    }
    .craft-page-description {
        font-size: 16px;
    }
    .craft-page-body {
        padding: 32px 20px 48px;
    }
    .craft-page-body-flush {
        padding: 0;
    }
}
</style>
