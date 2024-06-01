<script lang="ts" setup>
const route = useRoute();
const { setMeta } = useMeta();
const client = useSupabaseClient();
const slug = route.params.slug[0];
const runtimeConfig = useRuntimeConfig();
const coverImageLink = ref<null | string>(null);
const { data } = await useAsyncData("blog", async () => {
    const { data }: any = await client
        .from("blogs")
        .select(`*, user_profile(*)`)
        .eq("slug", slug)
        .eq("is_active", 1)
        .single();

    if (!data) return;

    coverImageLink.value = data.cover_img ?? null;
    return data;
});

const author = data.value ? data.value.user_profile : null;

useHead({
    link: [
        {
            rel: "stylesheet",
            href: "/code-highlight/atom-one-dark.css",
        },
    ],
    ...setMeta({
        title: data.value ? data.value.title : "Page Not Found",
        description: data.value ? data.value.summary : "Page Not Found",
        path:
            data.value && data.value.slug
                ? `/blog/${data.value.slug}`
                : route.path,
        keywords: data.value ? data.value.keywords : ["no found"],
        lang: "en",
        ...(coverImageLink.value
            ? {
                  image: coverImageLink.value,
              }
            : {}),
        ...(["Jenuel.Dev", "KateAwisan"].includes(
            author && author.username ? author.username : "Jenuel.Dev"
        )
            ? {}
            : {
                  author:
                      author && author.username
                          ? author.username
                          : "Jenuel.Dev",
              }),
    }),
});

onMounted(() => {
    setTimeout(async () => {
        if (!runtimeConfig.public.isDevelopment) {
            await client.rpc("increment_blob_view_count", {
                blog_id: data.value.id,
            } as any);
        }
    }, 5000);
});
</script>

<template>
    <OgImage
        v-if="!coverImageLink"
        :description="data ? data.summary : 'Page Not Found'"
        :title="data ? data.title : 'Page Not Found'"
        component="JenuelDevOgImage"
    />
    <NuxtLayout name="view-post">
        <div class="mb-25px px-10px w-full pt-10">
            <template
                v-if="
                    data.cover_img &&
                    (/\.(jpg|gif|png)$/.test(data.cover_img) ||
                        !(data.cover_img.indexOf('youtube') > -1))
                "
            >
                <NuxtImg
                    :alt="`Cover Image ${data.title}`"
                    :src="data.cover_img"
                    class="rounded-2xl mb-5"
                    format="webp"
                    height="303"
                    quality="80"
                    width="528"
                />
            </template>
            <template
                v-else-if="
                    data.cover_img && data.cover_img.indexOf('youtube') > -1
                "
            >
                <iframe
                    :src="data.cover_img"
                    class="sm:w-450px sm:h-250px w-full h-300px pr-20px pt-10px"
                >
                </iframe>
            </template>
            <div>
                <h1
                    class="sm:text-3xl md:text-5xl text-2xl pb-10px font-RobotoBold m-0 font-bold text-slate-100"
                >
                    {{ data.title }}
                </h1>
                <p
                    class="font-100 m-0 mb-5 leading-6 sm:text-lg text-slate-200"
                >
                    <span class="text-[var(--primary)]">/</span>
                    {{ data.summary }}
                </p>
                <div class="flex flex-wrap gap-3 mb-3">
                    <div
                        v-for="tags in data.tags"
                        :class="`tag-${tags}`"
                        class="tag tag-sm text-sm"
                    >
                        #{{ tags }}
                    </div>
                </div>
                <div class="text-lg mb-2">
                    <div
                        v-if="author"
                        class="mt-3 flex flex-wrap gap-2 items-center"
                    >
                        ✍️
                        <NuxtLink
                            :href="author.website ?? '#'"
                            class="decoration-none text-[var(--color)]"
                            target="_blank"
                            title="authors website"
                        >
                            <span
                                v-if="author.username"
                                class="text-size-20px hover:text-[var(--primary)]"
                            >
                                {{ author.username }}
                            </span>
                            <span
                                v-else-if="
                                    author.first_name || author.last_name
                                "
                                class="text-size-20px hover:text-[var(--primary)]"
                            >
                                {{ author.first_name }}
                                {{ author.last_name }}
                            </span>
                        </NuxtLink>
                        <div class="flex items-center gap-3 text-size-20px">
                            <NuxtLink
                                v-if="author.facebook_username"
                                :href="`https://facebook.com/${author.facebook_username}`"
                                :title="`facebook ${author.facebook_username}`"
                                target="_blank"
                            >
                                <Icon name="logos:facebook" />
                            </NuxtLink>
                            <NuxtLink
                                v-if="author.instagram_username"
                                :href="`https://instagram.com/${author.instagram_username}`"
                                :title="`instagram ${author.instagram_username}`"
                                target="_blank"
                            >
                                <Icon name="skill-icons:instagram" />
                            </NuxtLink>
                            <NuxtLink
                                v-if="author.tiktok_username"
                                :href="`https://tiktok.com/${author.tiktok_username}`"
                                :title="`tiktok ${author.tiktok_username}`"
                                class="text-[var(--color)]"
                                target="_blank"
                            >
                                <Icon name="icon-park-solid:tiktok" />
                            </NuxtLink>
                            <NuxtLink
                                v-if="author.twitter_username"
                                :href="`https://twitter.com/${author.twitter_username}`"
                                :title="`twitter ${author.twitter_username}`"
                                class="text-[var(--color)]"
                                target="_blank"
                            >
                                <Icon name="simple-icons:x" />
                            </NuxtLink>
                            <NuxtLink
                                v-if="author.threads_username"
                                :href="`https://threads.net/${author.threads_username}`"
                                :title="`threads ${author.threads_username}`"
                                class="text-[var(--color)]"
                                target="_blank"
                            >
                                <Icon name="fa6-brands:square-threads" />
                            </NuxtLink>
                            <NuxtLink
                                v-if="author.youtube_username"
                                :href="`https://youtube.com/${author.youtube_username}`"
                                :title="`youtube ${author.youtube_username}`"
                                target="_blank"
                            >
                                <Icon name="logos:youtube-icon" size="30" />
                            </NuxtLink>
                        </div>
                    </div>
                    <span class="text-size-15px">
                        {{
                            $dayjs(data.created_at).format(
                                "MMM. DD, YYYY. h:mm A"
                            )
                        }}
                    </span>
                </div>
            </div>
        </div>
        <div v-if="!runtimeConfig.public.isDevelopment" class="w-full">
            <ClientOnly>
                <GoogleAdsHorizontal />
            </ClientOnly>
        </div>
        <div
            class="content-render mx-auto relative md:text-lg pt-5 px-1 text-slate-300"
            v-html="data.content"
        ></div>
        <div class="mt-2 content-render mx-auto relative md:text-lg">
            <div class="pb-5">
                <hr />
            </div>
            <p>
                If you enjoy this article and would like to show your support,
                you can easily do so by buying me a coffee. Your contribution is
                greatly appreciated!
            </p>
            <a href="https://www.buymeacoffee.com/jenuel.dev">
                <NuxtImg
                    alt="Jenuel Ganawed Buy me Coffee"
                    src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=☕&slug=jenuel.dev&button_colour=FFDD00&font_colour=000000&font_family=Inter&outline_colour=000000&coffee_colour=ffffff"
                />
            </a>
        </div>
    </NuxtLayout>
</template>
