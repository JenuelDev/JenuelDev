<script setup lang="ts">
import Achievements from '@/constant/achievements';
</script>
<template>
    <section id="achievements" v-scrollanimation class="mx-auto w-full max-w-1000px pt-10">
        <div class="relative">
            <h2
                class="lg:text-size-52px md:text-size-44px text-size-36px font-600 text-[var(--primary)] tracking-tight mt-10px mb-15px md:px-10px">
                Achievements
            </h2>
            <p class="md:text-size-24px text-size-20px md:px-10px  md:leading-relaxed leading-relaxed mb-5">
                During my professional journey, I've embraced continuous learning as an essential part of growth. There
                are many ways to learn, such as joining projects or taking courses. Through these experiences, I've been
                able to achieve significant milestones.
            </p>
            <div class="flex gap-20px flex-wrap">
                <a v-scrollanimation v-for="(achievement, i) in Achievements" :href="achievement.url"
                    class="transition-delay-200">
                    <div
                        class="card-item bg-[var(--lightBackground)] shadow-sm duration-200 h-[100%] p-5 scale-100 hover:scale-103">
                        <div class="item-title md:text-size-24px text-size-20px font-700">
                            {{ achievement.name }}
                        </div>
                        <div class="item-des md:text-lg md:leading-normal leading-snug"
                            v-html="achievement.description"></div>
                    </div>
                </a>
            </div>
        </div>
    </section>
</template>