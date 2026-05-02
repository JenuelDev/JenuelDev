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
