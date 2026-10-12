<script setup lang="ts">
import { career } from "@/constant/career";
import { Icon } from "@iconify/vue";
</script>
<template>
    <section id="about-me" class="craft-hero" aria-labelledby="hero-heading">
        <div class="profile-hero-layout">
            <div class="profile-hero-copy">
                <p class="profile-hero-greeting">Hi, I'm Jenuel</p>
                <h1 id="hero-heading">
                    <span class="sr-only">Jenuel Ganawed: </span>Senior Full-Stack <em>Developer</em>
                </h1>
                <p class="profile-hero-description">
                    I build and maintain software applications, with professional experience since
                    <strong>2018</strong>.
                </p>
                <div class="craft-actions profile-hero-actions">
                    <a :href="career.emailHref" class="craft-button"><Icon icon="tabler:mail" /> Discuss a role</a>
                    <a
                        href="/Jenuel Ganawed - Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="craft-button craft-button-outline"
                        ><Icon icon="tabler:file-type-doc" /> View resume</a
                    >
                </div>
                <a href="#projects" class="profile-hero-work"
                    >Explore my products <Icon icon="tabler:arrow-down" aria-hidden="true"
                /></a>
                <div class="profile-hero-meta">
                    <span><Icon icon="tabler:map-pin" aria-hidden="true" /> Philippines · UTC+8</span>
                    <a href="https://www.linkedin.com/in/jenuelganawed/" target="_blank" rel="noopener noreferrer"
                        ><Icon icon="tabler:brand-linkedin" aria-hidden="true" /> LinkedIn
                        <Icon icon="tabler:arrow-up-right" aria-hidden="true"
                    /></a>
                </div>
            </div>
            <figure class="profile-hero-portrait">
                <div class="profile-hero-photo">
                    <img
                        src="/profile_image-640.webp"
                        srcset="
                            /profile_image-480.webp  480w,
                            /profile_image-640.webp  640w,
                            /profile_image-768.webp  768w,
                            /profile_image.webp     1024w
                        "
                        sizes="(max-width: 700px) 240px, 300px"
                        width="300"
                        height="300"
                        loading="eager"
                        fetchpriority="high"
                        decoding="async"
                        alt="Jenuel Ganawed, senior full-stack developer"
                    />
                </div>
                <figcaption>Jenuel Ganawed <span>Full-stack / Since 2018</span></figcaption>
            </figure>
        </div>
    </section>
    <div class="craft-marquee" aria-label="Development skills and technologies">
        <div class="marquee-track">
            <span v-for="copy in 2" :key="copy" :aria-hidden="copy === 2 ? true : undefined">
                <template
                    v-for="tech in [
                        'Development',
                        'Laravel',
                        'Coding',
                        'Vue',
                        'Problem Solving',
                        'TypeScript',
                        'Web Applications',
                        'PHP',
                        'Clean Code',
                        'PostgreSQL',
                        'Mobile Development',
                        'Flutter',
                        'Building Products',
                        'Electron',
                        'Continuous Learning',
                        'REST APIs',
                    ]"
                    :key="tech"
                    ><b aria-hidden="true">▪</b> {{ tech }}</template
                >
            </span>
        </div>
    </div>
</template>
<style scoped lang="scss">
.craft-hero {
    width: min(1280px, calc(100% - 80px));
    min-height: 640px;
    margin: 0 auto;
    padding: 80px 40px;
    display: grid;
    place-items: center;
    border-inline: 1px solid var(--craft-line);
}
.profile-hero-layout {
    display: grid;
    grid-template-columns: minmax(0, 520px) 300px;
    align-items: center;
    gap: 50px;
    width: 100%;
    max-width: 870px;
}
.profile-hero-copy {
    min-width: 0;
    text-align: right;
}
.profile-hero-greeting {
    margin: 0 0 14px;
    color: var(--lightSlate);
    font-size: 22px;
}
h1 {
    margin: 0 0 22px;
    color: var(--primary);
    font: 600 clamp(32px, 4vw, 52px) / 1.05 var(--craft-heading);
    letter-spacing: -0.045em;
}
h1 em {
    display: block;
    color: var(--white);
    font-size: 1.1em;
}
.profile-hero-description {
    margin: 0 0 30px;
    color: var(--lightestSlate);
    font-size: 18px;
    line-height: 1.6;
}
.profile-hero-description strong {
    font-weight: 600;
}
.profile-hero-actions {
    justify-content: flex-end;
}
.profile-hero-work {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    margin-top: 28px;
    padding: 10px 0;
    color: var(--primary);
    font: 11px var(--craft-mono);
    letter-spacing: 0.06em;
    text-transform: uppercase;
}
.profile-hero-work:hover {
    color: var(--white);
}
.profile-hero-meta {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    gap: 14px 22px;
    margin-top: 20px;
    padding-top: 20px;
    border-top: 1px solid var(--craft-line);
    font: 10px var(--craft-mono);
    text-transform: uppercase;
    letter-spacing: 0.04em;
}
.profile-hero-meta span,
.profile-hero-meta a {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    color: var(--lightSlate);
    line-height: 1.6;
}
.profile-hero-meta a:hover {
    color: var(--primary);
}
.profile-hero-meta svg {
    color: var(--primary);
    font-size: 14px;
    flex-shrink: 0;
}
.profile-hero-portrait {
    width: 300px;
    margin: 0;
    border: 1px solid var(--craft-line);
}
.profile-hero-photo {
    background: var(--lightBackground);
    aspect-ratio: 1;
    overflow: hidden;
}
.profile-hero-photo img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
figcaption {
    display: grid;
    gap: 8px;
    padding: 14px 16px;
    border-top: 1px solid var(--craft-line);
    color: var(--white);
    font: 10px/1.5 var(--craft-mono);
    letter-spacing: 0.04em;
    text-transform: uppercase;
}
figcaption span {
    color: var(--lightSlate);
}
@media (max-width: 1000px) {
    .profile-hero-layout {
        gap: 32px;
        grid-template-columns: minmax(0, 1fr) 260px;
    }
    .profile-hero-portrait {
        width: 260px;
    }
}
@media (max-width: 700px) {
    .craft-hero {
        width: calc(100% - 32px);
        min-height: 0;
        padding: 56px 20px;
    }
    .profile-hero-layout {
        grid-template-columns: minmax(0, 1fr);
        justify-items: center;
        gap: 36px;
    }
    .profile-hero-copy {
        text-align: center;
    }
    .profile-hero-greeting {
        font-size: 20px;
    }
    h1 {
        font-size: clamp(32px, 7vw, 44px);
    }
    .profile-hero-description {
        font-size: 16px;
    }
    .profile-hero-actions,
    .profile-hero-meta {
        justify-content: center;
    }
    .profile-hero-actions .craft-button {
        padding-inline: 16px;
    }
    .profile-hero-portrait {
        width: min(240px, 100%);
    }
    figcaption {
        text-align: left;
    }
}
</style>
