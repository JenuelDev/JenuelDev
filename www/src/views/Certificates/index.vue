<script setup lang="ts">
import Achievements from '@/constant/achievements';
import AchievementCard from '@/components/AboutMe/AchievementCard.vue';
import { Icon } from '@iconify/vue';
import { computed } from 'vue';
import { RouterLink } from 'vue-router';

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
const certificates = computed(() => [
    ...all.filter((item) => item.featured),
    ...all.filter((item) => !item.featured),
]);
</script>

<template>
    <main class="certificates">
        <section class="mx-auto w-full max-w-900px px-10px">
            <RouterLink to="/#achievements" class="certificates-back">
                <Icon icon="tabler:arrow-left" />
                <span>Back to homepage</span>
            </RouterLink>

            <h1
                class="lg:text-size-44px md:text-size-38px text-size-28px font-600 text-[var(--primary)] tracking-tight mb-15px"
            >
                education &amp; certificates
            </h1>
            <p class="text-lg leading-7 max-w-[770px]">
                The complete list, from my Information Technology degree through to the shorter courses and badges I
                picked up along the way.
            </p>

            <div class="certificates-grid">
                <div
                    v-for="(certificate, i) in certificates"
                    :key="`${certificate.name}-${i}`"
                    v-scrollanimation
                    :style="`transition-delay: ${Math.min(i, 6) * 60}ms;`"
                >
                    <AchievementCard
                        fluid
                        :name="certificate.name"
                        :from="certificate.from"
                        :description="certificate.description"
                        :url="certificate.url"
                    />
                </div>
            </div>
        </section>
    </main>
</template>

<style scoped lang="scss">
.certificates {
    padding-top: calc(var(--nav-height) + 32px);
    padding-bottom: 90px;
}

.certificates-back {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    margin-bottom: 24px;
    color: color-mix(in srgb, var(--lightestSlate) 72%, transparent);
    font-size: 14px;
    font-weight: 600;
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
        color: var(--primary);
    }
}

.certificates-grid {
    display: grid;
    gap: 22px;
    margin-top: 42px;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
}

@media only screen and (max-width: 1186px) {
    .certificates {
        padding-top: 32px;
    }
}
</style>
