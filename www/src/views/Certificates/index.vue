<script setup lang="ts">
import Achievements from "@/constant/achievements";
import AchievementCard from "@/components/AboutMe/AchievementCard.vue";
import CraftPage from "@/components/CraftPage.vue";
import { computed } from "vue";

interface AchievementItem {
    name: string;
    from: string;
    description: string;
    url: string;
    featured?: boolean;
}

const all = Achievements as AchievementItem[];

// Featured first so the degree and substantial courses lead the page, then the
// rest in their existing order.
const certificates = computed(() => [...all.filter((item) => item.featured), ...all.filter((item) => !item.featured)]);
</script>

<template>
    <CraftPage
        label="02 / Education"
        title="Education & certificates"
        description="The complete list, from my Information Technology degree through to the shorter courses and badges I picked up along the way."
        :meta="`${certificates.length} credentials`"
        flush
    >
        <template #title>Always <em>keep learning.</em></template>
        <div class="certificates-grid">
            <AchievementCard
                v-for="(certificate, index) in certificates"
                :key="`${certificate.name}-${index}`"
                fluid
                :name="certificate.name"
                :from="certificate.from"
                :description="certificate.description"
                :url="certificate.url"
            />
        </div>
    </CraftPage>
</template>
<style scoped lang="scss">
.certificates-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1px;
    background: var(--craft-line);
    border-bottom: 1px solid var(--craft-line);
}
@media (max-width: 1000px) {
    .certificates-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
}
@media (max-width: 600px) {
    .certificates-grid {
        grid-template-columns: 1fr;
    }
}
</style>
