<script lang="ts" setup>
const client = useSupabaseClient();
const { setMeta } = useMeta();
const blogInfiniteScrollRef = ref(null);
const targetIsVisible = useElementVisibility(blogInfiniteScrollRef);

const route = useRoute();
const isHasHistory = ref(false);
const filter = reactive<{
    search: null | string | undefined;
    limit: number;
    page: number;
    cat: string | undefined;
}>({
    search: null,
    limit: 15,
    page: 1,
    cat: undefined,
});
const loading = ref(true);
const blogsList = ref<
    Array<{
        id: string | number;
        slug: string;
        cover_img: string;
        title: string;
        summary: string;
        tags: Array<any>;
        created_at: string | number | null | undefined;
        blog_meta: any;
        updated_at: string | number | null | undefined;
    }>
>([]);
const noMoreData = ref(false);

useHead({
    ...setMeta({
        title: "Blog - BroJenuel",
        description: "Learn about tips and tricks about tech and programming.",
        path: route.path,
        keywords: ["brojenuel", "Jenuel", "Ganawed", "tech", "programming"],
        lang: "en",
    }),
});

defineOgImageComponent("BroJenuelOgImage", {
    title: "BroJenuel - Blog",
    description:
        "Learn programming tips, tricks, best practices to make programming and other information that will benefit you.",
});

async function getBlogs(isReset = false) {
    if (route.query.search) filter.search = route.query.search as any;
    if (route.query.cat) filter.cat = route.query.cat as any;

    if (isReset) {
        blogsList.value = [];
        filter.page = 1;
        noMoreData.value = false;
    }

    noMoreData.value = false;
    let rangeFrom = filter.page * filter.limit - filter.limit;
    rangeFrom = rangeFrom > 0 ? rangeFrom + 1 : rangeFrom;
    let rangeTo = filter.page * filter.limit;
    let query = client
        .from("blogs")
        .select(
            `id, title, summary, slug, updated_at, cover_img, blog_meta(*), tags`
        )
        .eq("is_active", 1)
        .order("id", { ascending: false });

    if (filter.search && filter.search != "") {
        // need to search by words
        const searchByWords = filter.search.split(" ");
        const searchWithAnd = searchByWords
            .map((word) => `'${word}'`)
            .join(" | ");

        query.textSearch("search_blogs", `${searchWithAnd}`);
    }

    if (filter.cat && filter.cat != "") {
        query.textSearch("keywords_str", `'${filter.cat}'`);
    }

    loading.value = true;
    const { data } = await query.range(rangeFrom, rangeTo);

    loading.value = false;
    if ((data as any).length < filter.limit) noMoreData.value = true;
    blogsList.value = [...blogsList.value, ...(data as any)];
    return data;
}

// await useAsyncData("blogs", async () => {

// });

function searchRoute() {
    getBlogs(true);
}

watch(
    () => targetIsVisible.value,
    (val) => {
        if (noMoreData.value) return;
        if (val) {
            filter.page += 1;
            getBlogs();
        }
    }
);

onMounted(async () => {
    isHasHistory.value = window.history.length > 0;

    await getBlogs(true);
});
</script>
<template>
    <div class="mx-auto max-w-2xl px-6 pt-5 sm:pt-0 relative">
        <div class="pt-0 sm:pt-10 pb-10">
            <div class="flex justify-between flex-col sm:flex-row">
                <div
                    v-if="isHasHistory"
                    @click="$router.go(-1)"
                    class="hover:text-teal-300 pb-3 sm:pb-0 cursor-pointer"
                >
                    <Icon name="ic:baseline-arrow-back" class="w-6 h-6" />
                    BroJenuel
                </div>
                <NuxtLink v-else to="/" class="hover:text-teal-300 py-10">
                    <Icon name="ic:baseline-arrow-back" class="w-6 h-6" />
                    BroJenuel
                </NuxtLink>
                <form
                    @submit.prevent="searchRoute"
                    class="flex items-center mb-1"
                >
                    <div class="relative">
                        <Icon
                            name="ic:baseline-search"
                            class="absolute top-1/2 -translate-y-1/2 left-2"
                        />
                        <input
                            class="bg-slate-800 appearance-none border-2 border-gray-200 rounded px-4 text-slate-200 leading-tight focus:outline-none focus:text-slate-200 focus:border-purple-500 border-none block h-[30px] pl-8"
                            type="text"
                            placeholder="Search..."
                            v-model="filter.search"
                        />
                    </div>
                </form>
            </div>
        </div>
        <div v-if="!blogsList.length" class="min-h-[100vh]">
            <div v-for="i in 8" class="rounded-lg shadow-md pb-4 animate-pulse">
                <div class="w-40 h-3 bg-slate-500 rounded mb-2"></div>
                <div class="w-2/3 h-8 bg-slate-500 rounded mb-2"></div>
                <div class="w-full h-5 bg-slate-500 rounded mb-2"></div>
                <div class="w-1/2 h-5 bg-slate-500 rounded"></div>
            </div>
        </div>
        <div v-else class="min-h-[100vh] gap-10 group/list">
            <NuxtLink
                v-for="(blog, i) in blogsList"
                :key="`${blog.id}-${i}`"
                :href="`/blog/${blog.slug}`"
                :style="`order: ${i > 0 ? i + 1 : i}`"
                class="rounded-md cursor-pointer gap-1 decoration-none relative pb-1 transition-all md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-70 grid grid-cols-1 sm:grid-cols-8 text-center sm:text-left mb-5 hover:bg-slate-900 group p-2"
            >
                <NuxtImg
                    v-if="blog.cover_img"
                    :src="blog.cover_img"
                    class="rounded-lg w-150px mx-auto col-span-2"
                    width="300"
                    height="150"
                    format="webp"
                    loading="lazy"
                    quality="50"
                    :alt="blog.title"
                />

                <div
                    class="content-summary leading-5 col-span-6 text-slate-200"
                >
                    <div class="opacity-70 text-xs mb-1">
                        <span
                            class="icon--solar icon--solar--calendar-bold-duotone"
                        />
                        {{ $dayjs(blog.updated_at).format("DD MMM, YYYY") }}
                    </div>
                    <h4 class="mb-2">{{ blog.title }}</h4>
                    <p
                        class="line-clamp-6 font-light opacity-80 group-hover:opacity-100 text-sm"
                    >
                        {{ blog.summary }}
                    </p>
                </div>
            </NuxtLink>
        </div>
        <div v-show="loading" class="text-center pt-20px">
            <div style="font-size: 50px">
                <Icon name="svg-spinners:bars-scale-middle" />
            </div>
            <div>loading</div>
        </div>
        <div ref="blogInfiniteScrollRef" class="mb-10">
            <div v-show="noMoreData" class="text-center pt-20px">
                <div style="font-size: 50px">
                    <Icon name="wpf:empty-flag" />
                </div>
                <div>Oops! No More Data</div>
            </div>
        </div>
    </div>
</template>
