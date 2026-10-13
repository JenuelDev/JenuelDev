<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import Experience from "@/components/AboutMe/Experience.vue";
import AboutMeSection from "./../../components/AboutMe/ABoutMeSection.vue";
import AboutSection from "@/components/AboutMe/AboutSection.vue";
import TechnicalSkills from "./../../components/AboutMe/TechnicalSkills.vue";
import WhatIWorkOn from "./../../components/AboutMe/WhatIWorkOn.vue";
import Projects from "@/components/AboutMe/Projects.vue";
import Achievements from "@/components/AboutMe/Achievements.vue";
import LatestArticles from "@/components/AboutMe/LatestArticles.vue";
import CtaSection from "@/components/AboutMe/CtaSection.vue";
import ScrollSectionRail from "@/components/ScrollSectionRail.vue";

const sectionLinks = [
    { id: "projects", label: "Selected work" },
    { id: "experience", label: "Experience" },
    { id: "technical-skills", label: "Core technology" },
    { id: "expertise", label: "Expertise" },
    { id: "about", label: "About" },
    { id: "latest-articles", label: "Journal" },
    { id: "achievements", label: "Certificates" },
    { id: "contact", label: "Get in touch" },
];
const activeSection = ref("");
let sections: HTMLElement[] = [];
let scrollFrame = 0;

function updateActiveSection() {
    scrollFrame = 0;
    const viewingLine = Math.max(64, window.innerHeight * 0.25);
    let current = "";
    for (const section of sections) {
        const bounds = section.getBoundingClientRect();
        if (bounds.top <= viewingLine && bounds.bottom > 64) current = section.id;
    }
    activeSection.value = current;
}

function scheduleSectionUpdate() {
    if (!scrollFrame) scrollFrame = window.requestAnimationFrame(updateActiveSection);
}

onMounted(() => {
    sections = sectionLinks
        .map(({ id }) => document.getElementById(id))
        .filter((section): section is HTMLElement => section !== null);
    updateActiveSection();
    window.addEventListener("scroll", scheduleSectionUpdate, { passive: true });
    window.addEventListener("resize", scheduleSectionUpdate);
});

onUnmounted(() => {
    window.removeEventListener("scroll", scheduleSectionUpdate);
    window.removeEventListener("resize", scheduleSectionUpdate);
    window.cancelAnimationFrame(scrollFrame);
});
</script>
<template>
    <div class="portfolio-page">
        <AboutMeSection />
        <Projects />
        <Experience />
        <TechnicalSkills />
        <WhatIWorkOn />
        <AboutSection />
        <LatestArticles />
        <Achievements />
        <CtaSection />
        <ScrollSectionRail :sections="sectionLinks" :active-section="activeSection" />
    </div>
</template>
<style lang="scss">
.what-i-offer-content {
    margin: 70px auto 10px auto;
    max-width: 900px;
    min-height: 60vh;

    .services-title {
        display: flex;
        flex-direction: column;
        align-items: center;

        &.a-view-before-enter {
            opacity: 0;
            transform: translateY(20px);
            transition: 0.3s;
            transition-delay: 400ms;
        }

        &.a-view-enter {
            opacity: 1;
            transform: translateY(0px);
        }

        h2 {
            display: flex;
            align-items: center;
            font-size: clamp(17px, 5vw, 32px);
            margin: 0 0 10px 0;

            .service-title-icon {
                margin-right: 10px;
                color: var(--primary);
            }
        }

        p {
            margin: 0;
        }
    }

    .services-wrapper {
        margin-top: 30px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

        .services-item {
            margin: 10px;

            &.a-view-before-enter {
                opacity: 0;
                transform: translateY(20px);
                transition: 0.3s;
            }

            &.a-view-enter {
                opacity: 1;
                transform: translateY(0px);
            }
        }
    }
}
</style>
