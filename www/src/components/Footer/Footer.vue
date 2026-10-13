<script setup lang="ts">
const columns = [
    {
        title: "Explore",
        links: [
            { label: "Selected work", href: "/#projects" },
            { label: "Experience", href: "/#experience" },
            { label: "About", href: "/#about" },
            { label: "Project archive", href: "/project-archives" },
        ],
    },
    {
        title: "Resources",
        links: [
            { label: "Blog", href: "https://blog.jenuel.dev/" },
            { label: "Store", href: "https://store.jenuel.dev/" },
            { label: "Certificates", href: "/certificates" },
            { label: "Resume", href: "/Jenuel Ganawed - Resume.pdf" },
        ],
    },
    {
        title: "Connect",
        links: [
            { label: "GitHub", href: "https://github.com/JenuelDev" },
            { label: "LinkedIn", href: "https://www.linkedin.com/in/jenuelganawed/" },
            { label: "Instagram", href: "https://www.instagram.com/jenueldev/" },
            { label: "Contact", href: "/contact" },
        ],
    },
];
</script>
<template>
    <footer class="craft-footer">
        <div class="craft-footer-inner">
            <div class="craft-footer-grid">
                <div class="craft-footer-brand">
                    <router-link to="/" class="footer-wordmark" aria-label="JenuelDev home">
                        <span class="site-logo-mark" aria-hidden="true"></span>
                    </router-link>
                    <p>Thoughtful software, built to last. Web, mobile, and desktop applications by Jenuel Ganawed.</p>
                    <a href="mailto:me@jenuel.dev">me@jenuel.dev</a>
                </div>
                <div v-for="column in columns" :key="column.title">
                    <h3>{{ column.title }}</h3>
                    <ul>
                        <li v-for="link in column.links" :key="link.label">
                            <a :href="link.href">{{ link.label }}</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="craft-footer-bottom">
                <span>© {{ new Date().getFullYear() }} Jenuel Ganawed</span
                ><span>Built with care in the Philippines</span>
            </div>
        </div>
    </footer>
</template>
