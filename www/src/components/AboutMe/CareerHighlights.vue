<template>
    <section class="career-highlights mx-auto max-w-900px px-10px mb-90px" aria-labelledby="highlights-heading">
        <h2 id="highlights-heading">What I bring to a team</h2>
        <div class="highlight-grid">
            <article>
                <h3>Production ownership</h3>
                <p>
                    At Vocphone: business workflows, APIs, third-party integrations, production troubleshooting, and
                    code review.
                </p>
                <a href="#experience">See professional experience</a>
            </article>
            <article>
                <h3>Products across platforms</h3>
                <p>Believers Sword brings offline Bible study and synchronisation to Windows, Android, and the web.</p>
                <a href="#believers-sword">Explore Believers Sword</a>
            </article>
            <article>
                <h3>Delivery beyond the interface</h3>
                <p>
                    Tracksy combines expense tracking, budgets, and separate profiles with local storage and cloud sync.
                </p>
                <a href="#tracksy">Explore Tracksy</a>
            </article>
        </div>
    </section>
</template>
<style scoped lang="scss">
.career-highlights {
    h2 {
        margin: 0 0 20px;
        color: var(--lightestSlate);
        font-size: 24px;
        letter-spacing: 0;
    }
    h3 {
        margin: 0 0 12px;
        color: var(--primary);
        font-size: 18px;
        letter-spacing: 0;
    }
    p {
        margin: 0 0 18px;
        line-height: 1.7;
    }
    a {
        color: var(--primary);
        font-size: 14px;
        font-weight: 600;
    }
}
.highlight-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 16px;
    article {
        padding: 24px;
        border: 1px solid color-mix(in srgb, var(--primary) 25%, transparent);
        border-radius: 12px;
        background: var(--lightBackground);
    }
}
@media (max-width: 768px) {
    .highlight-grid {
        grid-template-columns: 1fr;
    }
}
</style>
