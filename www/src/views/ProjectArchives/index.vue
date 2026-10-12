<script setup lang="ts">
import CraftPage from "@/components/CraftPage.vue";
import CodeChallenges from "@/components/CodeChallenges.vue";
import archive from "@/constant/code-challenges-page";
</script>
<template>
    <CraftPage
        label="01 / Project archive"
        title="Experiments & archive"
        :description="archive.des"
        :meta="`${archive.challenges.length} projects & experiments`"
        flush
    >
        <template #title>Experiments <em>&amp; archive.</em></template>
        <CodeChallenges :limit="0" :show-heading="false" />
    </CraftPage>
</template>
