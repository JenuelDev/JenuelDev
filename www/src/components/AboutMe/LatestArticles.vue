<script setup lang="ts">
import { onMounted, ref } from "vue";
import { Icon } from "@iconify/vue";

type Article = {
    id: number | string;
    title: string;
    summary: string;
    slug: string;
    updated_at: string;
    cover_img?: string | null;
};

const articles = ref<Article[]>([]);
const loading = ref(true);
const error = ref("");
const skeletonItems = [1, 2, 3];

const articleUrl = (slug: string) => `https://blog.jenuel.dev/blog/${slug}`;

const formatDate = (date: string) => {
    return new Intl.DateTimeFormat("en", {
        month: "short",
        day: "numeric",
        year: "numeric",
    }).format(new Date(date));
};

onMounted(async () => {
    try {
        const response = await fetch("https://blog.jenuel.dev/articles.json?limit=3");

        if (!response.ok) {
            throw new Error("Unable to load articles.");
        }

        const data = await response.json();
        articles.value = Array.isArray(data) ? data : [];
    } catch {
        error.value = "Articles are not available right now.";
    } finally {
        loading.value = false;
    }
});
</script>

<template>
    <section id="latest-articles" v-scrollanimation class="latest-articles">
        <div class="latest-articles-heading">
            <div>
                <h2
                    class="lg:text-size-44px md:text-size-38px text-size-28px font-600 text-[var(--primary)] tracking-tight mb-15px"
                >
                    latest articles
                </h2>
                <p class="text-lg leading-7">
                    Recent writing on development, tools, productivity, and lessons from building software.
                </p>
            </div>
            <a href="https://blog.jenuel.dev/blog" target="_blank" rel="noopener" class="latest-articles-link">
                <span>View all</span>
                <Icon icon="tabler:arrow-up-right" />
            </a>
        </div>

        <div v-if="loading" class="latest-articles-grid">
            <article v-for="item in skeletonItems" :key="item" class="article-card article-card-skeleton">
                <div class="skeleton-line skeleton-date"></div>
                <div class="skeleton-line skeleton-title"></div>
                <div class="skeleton-line skeleton-summary"></div>
                <div class="skeleton-line skeleton-summary short"></div>
            </article>
        </div>

        <div v-else-if="articles.length" class="latest-articles-grid">
            <a
                v-for="article in articles"
                :key="article.id"
                :href="articleUrl(article.slug)"
                target="_blank"
                rel="noopener"
                class="article-card"
            >
                <time class="article-date" :datetime="article.updated_at">
                    {{ formatDate(article.updated_at) }}
                </time>
                <h3 class="article-title">
                    {{ article.title }}
                </h3>
                <p class="article-summary">
                    {{ article.summary }}
                </p>
                <span class="article-read-more">
                    Read article
                    <Icon icon="tabler:arrow-up-right" />
                </span>
            </a>
        </div>

        <div v-else class="latest-articles-empty">
            {{ error || "No articles found." }}
        </div>
    </section>
</template>

<style lang="scss">
.latest-articles {
    @apply mx-auto max-w-900px px-10px mb-90px;

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

.latest-articles-heading {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 18px;
    margin-bottom: 32px;
}

.latest-articles-link,
.article-read-more {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    color: var(--primary);
    text-decoration: none;

    svg {
        width: 18px;
        height: 18px;
    }
}

.latest-articles-link {
    flex: 0 0 auto;
    border: 1px solid color-mix(in srgb, var(--primary) 28%, transparent);
    border-radius: 999px;
    padding: 8px 13px;
    background: color-mix(in srgb, var(--primary) 7%, transparent);
    transition: border-color 0.2s ease, background 0.2s ease, transform 0.2s ease;

    &:hover {
        transform: translateY(-2px);
        border-color: color-mix(in srgb, var(--primary) 52%, transparent);
        background: color-mix(in srgb, var(--primary) 11%, transparent);
    }
}

.latest-articles-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 18px;
}

.article-card {
    display: flex;
    min-height: 250px;
    flex-direction: column;
    border: 1px solid color-mix(in srgb, var(--primary) 22%, transparent);
    border-radius: 8px;
    padding: 20px;
    background: color-mix(in srgb, var(--background) 92%, #001e2e);
    color: inherit;
    text-decoration: none;
    transition: transform 0.25s ease, border-color 0.25s ease;

    &:hover {
        transform: translateY(-4px);
        border-color: color-mix(in srgb, var(--primary) 42%, transparent);

        .article-title {
            color: var(--primary);
        }
    }
}

.article-date {
    margin-bottom: 12px;
    color: var(--primary);
    font-size: 13px;
    font-weight: 600;
}

.article-title {
    margin: 0 0 12px;
    color: color-mix(in srgb, var(--lightestSlate) 94%, transparent);
    font-size: 18px;
    font-weight: 650;
    line-height: 1.35;
    transition: color 0.2s ease;
}

.article-summary {
    display: -webkit-box;
    margin: 0 0 18px;
    overflow: hidden;
    color: color-mix(in srgb, var(--lightestSlate) 74%, transparent);
    line-height: 1.55;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
}

.article-read-more {
    margin-top: auto;
    font-weight: 700;
}

.latest-articles-empty {
    border: 1px solid color-mix(in srgb, var(--primary) 22%, transparent);
    border-radius: 8px;
    padding: 22px;
    background: color-mix(in srgb, var(--background) 92%, #001e2e);
    color: color-mix(in srgb, var(--lightestSlate) 78%, transparent);
}

.article-card-skeleton {
    pointer-events: none;
}

.skeleton-line {
    position: relative;
    overflow: hidden;
    border-radius: 999px;
    background: color-mix(in srgb, var(--lightestSlate) 12%, transparent);

    &::after {
        content: "";
        position: absolute;
        inset: 0;
        transform: translateX(-100%);
        background: linear-gradient(
            90deg,
            transparent,
            color-mix(in srgb, var(--lightestSlate) 18%, transparent),
            transparent
        );
        animation: article-skeleton 1.4s ease-in-out infinite;
    }
}

.skeleton-date {
    width: 42%;
    height: 13px;
    margin-bottom: 18px;
}

.skeleton-title {
    width: 88%;
    height: 24px;
    margin-bottom: 18px;
}

.skeleton-summary {
    width: 100%;
    height: 14px;
    margin-bottom: 12px;

    &.short {
        width: 72%;
    }
}

@keyframes article-skeleton {
    100% {
        transform: translateX(100%);
    }
}

@media (max-width: 767px) {
    .latest-articles-heading {
        align-items: flex-start;
        flex-direction: column;
    }

    .latest-articles-grid {
        grid-template-columns: 1fr;
    }

    .article-card {
        min-height: 220px;
    }
}
</style>
