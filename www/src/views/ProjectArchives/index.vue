<script setup lang="ts">
import CodeChallenges from '@/components/CodeChallenges.vue';
</script>

<template>
    <main class="project-archives">
        <CodeChallenges title="project archives" :limit="0" />
    </main>
</template>

<style lang="scss" scoped>
.project-archives {
    padding-top: calc(var(--nav-height) + 32px);

    :deep(.code-challenge) {
        margin-top: 0;
    }
}

@media only screen and (max-width: 1186px) {
    .project-archives {
        padding-top: 32px;
    }
}
</style>
