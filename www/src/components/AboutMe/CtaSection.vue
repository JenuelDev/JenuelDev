<script setup lang="ts">
import { career } from "@/constant/career";
import { Icon } from "@iconify/vue";
</script>

<template>
    <section
        id="contact"
        class="contact-section mx-auto w-full max-w-900px px-10px mb-90px"
        aria-labelledby="contact-heading"
    >
        <div v-scrollanimation class="cta-card">
            <p class="cta-overline">let's connect</p>
            <h2 id="contact-heading">Hiring for your next team?</h2>
            <p class="cta-intro">
                Share the role, team, and technical challenges. Let's talk about how my experience fits your team.
            </p>
            <div class="cta-actions">
                <a :href="career.emailHref">
                    Email about an opportunity <Icon icon="tabler:mail" aria-hidden="true" />
                </a>
                <a href="/Jenuel Ganawed - Resume.pdf" target="_blank" rel="noopener noreferrer">
                    View resume <Icon icon="tabler:file-type-doc" aria-hidden="true" />
                </a>
            </div>
            <div class="cta-meta">
                <span><Icon icon="tabler:map-pin" aria-hidden="true" /> Philippines · UTC+8</span>
                <router-link to="/contact">
                    More ways to get in touch <Icon icon="tabler:arrow-right" aria-hidden="true" />
                </router-link>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
.contact-section {
    letter-spacing: 0;
}
.cta-card {
    padding: 28px;
    border: 1px solid color-mix(in srgb, var(--primary) 28%, transparent);
    border-radius: 16px;
    background: var(--lightBackground);

    &.a-before-enter {
        opacity: 0;
        transform: translateY(20px);
        transition: 0.3s ease-in;
    }
    &.a-enter {
        opacity: 1;
        transform: translateY(0);
    }
    h2 {
        margin: 0 0 16px;
        color: var(--lightestSlate);
        font-size: 28px;
        font-weight: 600;
        line-height: 1.3;
    }
    a {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        min-height: 44px;
        color: var(--primary);
        font-size: 14px;
        font-weight: 600;
        text-decoration: none;
        text-underline-offset: 4px;

        &:hover,
        &:focus-visible {
            text-decoration: underline;
        }
        &:focus-visible {
            outline: 2px solid var(--primary);
            outline-offset: 5px;
        }
    }
}
.cta-overline {
    margin: 0 0 8px;
    color: var(--primary);
    font-size: 13px;
}
.cta-intro {
    max-width: 640px;
    margin: 0 0 20px;
    font-size: 17px;
    line-height: 1.7;
}
.cta-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 12px 24px;
    margin-bottom: 24px;
}
.cta-meta {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 8px 24px;
    padding-top: 16px;
    border-top: 1px solid color-mix(in srgb, var(--primary) 18%, transparent);
    font-size: 14px;

    span {
        display: inline-flex;
        align-items: center;
        gap: 6px;
    }
    span svg {
        color: var(--primary);
    }
}
@media (max-width: 768px) {
    .cta-card {
        padding: 20px;
    }
}
@media (max-width: 425px) {
    .cta-card {
        padding: 16px;
        h2 {
            font-size: 23px;
        }
    }
}
</style>
