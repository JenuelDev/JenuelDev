<script setup lang="ts">
import SvgDecoration from '@/components/SvgDecoration/SvgDecoration.vue';
import Experience from '@/constant/experiences/index';
import { ref, onUnmounted, onMounted } from 'vue';

const experiences = Experience as any;
const tabKey = 'expTabKey';
const tab = ref(0);
const width = ref(500);

const widthHandler = () => {
    width.value = window.innerWidth;
};

onMounted(() => {
    // @ts-ignore
    window.addEventListener('resize', widthHandler());

    widthHandler();
    let tabindex = localStorage.getItem(tabKey);
    if (tabindex) {
        tab.value = parseInt(tabindex);
    }
});

onUnmounted(() => {
    // @ts-ignore
    window.removeEventListener('resize', widthHandler());
});


function changeTab(index: string | number) {
    localStorage.setItem(tabKey, index as string);
    tab.value = index as number;
}
</script>
<template>
    <section id="experience" v-scrollanimation class="my-work-experience mx-auto pt-10">
        <div class="relative">
            <h2
                class="lg:text-size-52px md:text-size-44px text-size-36px font-600 text-[var(--primary)] tracking-tight mb-15px md:px-10px">
                My work experience
            </h2>
            <p class="md:text-size-24px text-size-20px md:px-10px md:leading-relaxed leading-relaxed relative">
                As a developer, working is more than just writing code—it’s about continuous learning, problem-solving,
                and making a meaningful impact. It involves growing your skills, collaborating with others, and
                contributing to projects that can shape the way people interact with technology. Beyond just technical
                expertise, it’s about creativity, innovation, and leaving a lasting mark on the world through your work.
                <SvgDecoration
                    classNames="absolute md:visible invisible right-5 -bottom-29 transform rotate-[90deg] fill-[var(--primary)] opacity-50"
                    :type="1" />
            </p>
            <div class="container">
                <div>
                    <ul class="timeline">
                        <li class="timeline-event" v-for="(exp, index) in experiences" :key="exp.company + index">
                            <label class="timeline-event-icon"></label>
                            <div class="timeline-event-copy p-2 relative -top-5 left-16 w-8/10">
                                <p class="timeline-event-thumbnail" v-html="exp.workStart + ' - ' + exp.workUntil"></p>
                                <h3
                                    class="lg:text-size-30px md:text-size-28px text-size-26px font-700 items-center gap-7px">
                                    <span>{{ exp.position }}</span>
                                    <span class="text-[var(--primary)] opacity-70 hover:opacity-100 duration-100">
                                        @
                                        <span rel="noopener">
                                            {{ exp.company }}
                                        </span>
                                    </span>
                                </h3>
                                <div class="mt-20px mb-26px">
                                    <a class="border border-[var(--primary)] rounded-md px-15px py-5px text-[var(--primary)] hover:bg-[var(--primary)] hover:text-[var(--background)] duration-300"
                                        v-if="exp.certificate" rel="external" target="_blank"
                                        :href="exp.certificate.link" hreflang="es-es">
                                        <i class="bx bx-certification"></i>
                                        {{ exp.certificate.label }}
                                    </a>
                                </div>
                                <div>
                                    <p class="md:text-size-20px text-size-18px md:leading-normal leading-snug"
                                        v-html="exp.des">
                                    </p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    </section>
</template>

<style lang="scss">
.my-work-experience {
    --tab-height: 50px;
    --tab-width: 120px;

    max-width: 1000px;
    display: flex;
    flex-direction: column;
    min-height: 50vh;

    &.a-before-enter {
        opacity: 0;
        transform: translateY(20px);
        transition: 0.3s ease-in;
    }

    &.a-enter {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>
