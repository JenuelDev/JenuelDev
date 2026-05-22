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
    padding-top: 120px;
}
</style>
