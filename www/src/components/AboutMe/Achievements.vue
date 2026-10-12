<script setup lang="ts">
import achievements from "@/constant/achievements";
const selected = achievements
    .filter((item) => item.featured)
    .slice(0, 3)
    .map((item, index) => ({
        ...item,
        url:
            index === 0
                ? "https://drive.google.com/file/d/1p7I8t2maRU5vXJYjdE2-Cw1SiJJOVyYd/view?usp=sharing"
                : item.url,
    }));
</script>
<template>
    <section
        id="achievements"
        class="credentials mx-auto max-w-900px px-10px mb-90px"
        aria-labelledby="credentials-heading"
    >
        <h2 id="credentials-heading" class="text-size-28px font-600 text-[var(--primary)] mb-15px">
            Education &amp; continued learning
        </h2>
        <p>Formal education and selected coursework supporting my professional experience.</p>
        <ul>
            <li v-for="item in selected" :key="item.name">
                <h3>{{ item.name }}</h3>
                <p>{{ item.from }}</p>
                <a
                    :href="item.url"
                    target="_blank"
                    rel="noopener noreferrer"
                    :aria-label="'View credential: ' + item.name"
                    >View credential <span aria-hidden="true">↗</span></a
                >
            </li>
        </ul>
        <router-link to="/certificates">View all education and certificates →</router-link>
    </section>
</template>
<style scoped lang="scss">
.credentials {
    ul {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 16px;
        list-style: none;
        margin: 24px 0;
        padding: 0;
    }
    li {
        padding: 20px;
        border: 1px solid color-mix(in srgb, var(--primary) 22%, transparent);
        border-radius: 12px;
    }
    h3 {
        color: var(--lightestSlate);
        margin: 0;
        font-size: 16px;
        letter-spacing: 0;
    }
    p {
        font-size: 14px;
        line-height: 1.7;
    }
    a {
        color: var(--primary);
        display: inline-block;
        padding: 10px 0;
        font-size: 14px;
    }
}
@media (max-width: 768px) {
    .credentials ul {
        grid-template-columns: 1fr;
    }
}
</style>
