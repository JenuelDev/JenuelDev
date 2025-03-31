<script setup lang="ts">
import { h } from 'vue';
import { Icon } from "@iconify/vue";

defineProps<{
    icon: string;
    size?: number | string;
}>()
</script>
<template>
    <Icon :icon="icon" :size="size ?? 20" />
</template>