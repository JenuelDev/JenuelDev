<script setup lang="ts">
import { Icon } from '@iconify/vue';

const navLinks = [
    { label: 'About', href: '/about-me#about-me' },
    { label: 'Skills', href: '/about-me#technical-skills' },
    { label: 'Projects', href: '/about-me#projects' },
    { label: 'Experience', href: '/about-me#experience' },
    { label: 'Achievements', href: '/about-me#achievements' },
];

const services = [
    'Web Development',
    'Mobile Development',
    'Back-end Solutions',
    'UI/UX Implementation',
    'Consulting',
];

const socials = [
    { icon: 'tabler:brand-github', href: 'https://github.com/JenuelDev', label: 'GitHub' },
    { icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/in/jenuelganawed/', label: 'LinkedIn' },
    { icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/jenueldev/', label: 'Instagram' },
    { icon: 'tabler:mail', href: 'mailto:me@jenuel.dev', label: 'Email' },
];
</script>

<template>
    <footer class="site-footer">
        <div class="site-footer-inner">
            <div class="footer-grid">
                <!-- Brand -->
                <div class="footer-brand">
                    <div class="footer-logo" aria-label="Jenuel Dev">
                        <Icon icon="tabler:code" />
                    </div>
                    <p class="footer-tagline">
                        Developer&nbsp;•&nbsp;Problem Solver&nbsp;•&nbsp;Lifelong Learner
                    </p>
                    <p class="footer-desc">
                        Building clean, efficient and impactful digital experiences.
                    </p>
                </div>

                <!-- Navigate -->
                <div class="footer-col">
                    <h3 class="footer-col-heading">Navigate</h3>
                    <ul class="footer-links">
                        <li v-for="link in navLinks" :key="link.label">
                            <a :href="link.href">
                                <span class="footer-link-dot" aria-hidden="true"></span>
                                {{ link.label }}
                            </a>
                        </li>
                    </ul>
                </div>

                <!-- Services -->
                <div class="footer-col">
                    <h3 class="footer-col-heading">Services</h3>
                    <ul class="footer-links">
                        <li v-for="service in services" :key="service">
                            <span class="footer-link-item">
                                <span class="footer-link-dot" aria-hidden="true"></span>
                                {{ service }}
                            </span>
                        </li>
                    </ul>
                </div>

                <!-- Let's Connect -->
                <div class="footer-col">
                    <h3 class="footer-col-heading">Let's Connect</h3>
                    <p class="footer-connect-copy">
                        Have a project in mind or just want to say hi? I'd love to hear from you.
                    </p>
                    <ul class="footer-contact-list">
                        <li>
                            <Icon icon="tabler:mail" />
                            <a href="mailto:me@jenuel.dev">me@jenuel.dev</a>
                        </li>
                        <li>
                            <Icon icon="tabler:map-pin" />
                            <span>Philippines</span>
                        </li>
                        <li>
                            <Icon icon="tabler:clock" />
                            <span>Usually replies within 24h</span>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- Divider -->
            <div class="footer-divider" aria-hidden="true">
                <span></span>
                <div class="footer-divider-icon">
                    <Icon icon="tabler:code" />
                </div>
                <span></span>
            </div>

            <!-- Bottom -->
            <div class="footer-bottom">
                <div class="footer-socials">
                    <a
                        v-for="s in socials"
                        :key="s.label"
                        :href="s.href"
                        target="_blank"
                        rel="noopener noreferrer external"
                        :aria-label="s.label"
                        class="footer-social-btn"
                    >
                        <Icon :icon="s.icon" />
                    </a>
                </div>
                <p class="footer-copy">
                    &copy; {{ new Date().getFullYear() }} Jenuel Ganawed. All rights reserved.
                </p>
                <p class="footer-built">
                    Built with <Icon icon="tabler:heart" class="footer-heart" /> and lots of <Icon icon="tabler:coffee" />
                </p>
            </div>
        </div>
    </footer>
</template>

<style lang="scss">
.site-footer {
    @apply w-full;
    border-top: 1px solid color-mix(in srgb, var(--primary) 18%, transparent);
    background: color-mix(in srgb, var(--background) 96%, #001a25);
}

.site-footer-inner {
    @apply max-w-1100px mx-auto px-24px pt-64px pb-40px;
}

.footer-grid {
    @apply grid gap-48px mb-56px;
    grid-template-columns: 1.4fr 1fr 1fr 1.4fr;
}

.footer-brand {
    @apply flex flex-col gap-14px;
}

.footer-logo {
    @apply grid w-48px h-48px place-items-center rounded-8px text-size-24px;
    border: 1px solid color-mix(in srgb, var(--primary) 46%, transparent);
    background: color-mix(in srgb, var(--primary) 9%, transparent);
    color: var(--primary);
    box-shadow: 0 0 18px color-mix(in srgb, var(--primary) 14%, transparent);
}

.footer-tagline {
    @apply m-0 font-600 text-size-15px leading-6;
    color: var(--primary);
}

.footer-desc {
    @apply m-0 text-sm leading-6;
    color: color-mix(in srgb, var(--lightestSlate) 62%, transparent);
}

.footer-col-heading {
    @apply m-0 mb-18px text-base font-700;
    color: var(--primary);
    letter-spacing: 0.04em;
}

.footer-links {
    @apply list-none m-0 p-0 flex flex-col gap-10px;

    a,
    .footer-link-item {
        @apply inline-flex items-center gap-10px text-size-15px no-underline;
        color: color-mix(in srgb, var(--lightestSlate) 72%, transparent);
        transition: color 0.2s ease, gap 0.2s ease;
        cursor: default;
    }

    a {
        cursor: pointer;

        &:hover {
            @apply gap-14px;
            color: var(--primary);
        }
    }
}

.footer-link-dot {
    @apply inline-block w-6px h-6px rounded-full flex-shrink-0;
    background: var(--primary);
    opacity: 0.72;
}

.footer-connect-copy {
    @apply m-0 mb-18px text-sm leading-6;
    color: color-mix(in srgb, var(--lightestSlate) 62%, transparent);
}

.footer-contact-list {
    @apply list-none m-0 p-0 flex flex-col gap-12px;

    li {
        @apply flex items-center gap-10px text-sm;
        color: color-mix(in srgb, var(--lightestSlate) 80%, transparent);

        svg {
            @apply w-17px h-17px flex-shrink-0;
            color: var(--primary);
        }

        a {
            color: inherit;
            text-decoration: none;
            transition: color 0.2s ease;

            &:hover {
                color: var(--primary);
            }
        }
    }
}

.footer-divider {
    @apply flex items-center gap-14px mb-36px;

    span {
        @apply flex-1 h-1px;
        background: linear-gradient(to right, transparent, color-mix(in srgb, var(--primary) 28%, transparent));

        &:last-child {
            background: linear-gradient(to left, transparent, color-mix(in srgb, var(--primary) 28%, transparent));
        }
    }
}

.footer-divider-icon {
    @apply grid w-34px h-34px place-items-center rounded-full text-size-16px;
    border: 1px solid color-mix(in srgb, var(--primary) 38%, transparent);
    color: var(--primary);
    background: color-mix(in srgb, var(--primary) 7%, transparent);
    box-shadow: 0 0 14px color-mix(in srgb, var(--primary) 18%, transparent);
}

.footer-bottom {
    @apply flex flex-col items-center gap-14px;
}

.footer-socials {
    @apply flex gap-12px;
}

.footer-social-btn {
    @apply grid w-42px h-42px place-items-center rounded-8px no-underline;
    border: 1px solid color-mix(in srgb, var(--primary) 22%, transparent);
    background: color-mix(in srgb, var(--background) 88%, #001e2e);
    color: color-mix(in srgb, var(--lightestSlate) 80%, transparent);
    transition: color 0.2s ease, border-color 0.2s ease, transform 0.2s ease;

    svg {
        @apply w-20px h-20px;
    }

    &:hover {
        border-color: color-mix(in srgb, var(--primary) 52%, transparent);
        color: var(--primary);
        transform: translateY(-2px);
    }
}

.footer-copy {
    @apply m-0 text-sm text-center;
    color: color-mix(in srgb, var(--lightestSlate) 52%, transparent);
}

.footer-built {
    @apply m-0 flex items-center gap-6px text-size-13px;
    color: color-mix(in srgb, var(--lightestSlate) 42%, transparent);

    svg {
        @apply w-15px h-15px;
    }
}

.footer-heart {
    color: #ff6b6b;
}

@media (max-width: 960px) {
    .footer-grid {
        @apply grid-cols-2 gap-36px;
    }
}

@media (max-width: 580px) {
    .site-footer-inner {
        @apply px-20px pt-48px pb-32px;
    }

    .footer-grid {
        @apply grid-cols-1 gap-32px mb-40px;
    }
}
</style>
