<script lang="ts" setup>
const { share } = useShareFunction();
</script>

<template>
    <main class="w-full max-w-screen-md mx-auto pb-10 relative px-[10px]">
        <div class="sm:sticky fixed sm:top-10 top-3 z-50">
            <div
                class="absolute flex sm:flex-col items-center z-50 sm:gap-5 gap-2"
            >
                <NuxtLink
                    title="Go back"
                    to="/blog"
                    class="h-[40px] w-[40px] bg-slate-900 hover:bg-slate-800 rounded-full flex items-center justify-center hover:text-[var(--primary)] p-3 relative group border-none hover:text-slate-100 cursor-pointer"
                    @click="$router.push('/blog')"
                >
                    <Icon name="material-symbols:arrow-back"></Icon>
                </NuxtLink>
                <button
                    v-for="social in [
                        'facebook',
                        'twitter',
                        'linkedin',
                        'copy',
                    ]"
                    :key="social"
                    :title="
                        social != 'Copy'
                            ? `Share To ${social.toUpperCase()}`
                            : 'Copy to Clipboard'
                    "
                    class="h-40px w-40px p-3 bg-slate-900 hover:bg-slate-800 rounded-full flex items-center justify-center hover:text-slate-100 relative group border-none text-[var(--color)] cursor-pointer"
                    @click="share(social)"
                >
                    <Icon
                        v-if="social == 'facebook'"
                        name="ri:facebook-fill"
                    ></Icon>
                    <Icon v-if="social == 'twitter'" name="mdi:twitter"></Icon>
                    <Icon
                        v-if="social == 'linkedin'"
                        name="ri:linkedin-fill"
                    ></Icon>
                    <Icon
                        v-if="social == 'copy'"
                        name="ph:link-simple-bold"
                    ></Icon>
                    <span
                        class="absolute lg:left-[50px] left-0 lg:top-0 top-[50px] whitespace-nowrap bg-slate-800 opacity-0 group-hover:opacity-100 transition-all rounded-lg p-2 pointer-events-none"
                    >
                        {{
                            social == "copy"
                                ? "Copy Link"
                                : `Share To ${social}`
                        }}
                    </span>
                </button>
                <a
                    class="h-[30px] w-[30px] bg-[#FFDD00] rounded-full flex items-center justify-center relative group text-dark-700"
                    href="https://www.buymeacoffee.com/jenuel.dev"
                    alt="Jenuel Ganawed Buy me Coffee"
                    target="_blank"
                >
                    <Icon
                        name="cib:ko-fi"
                        size="20"
                        class="ml-3px text-slate-900 ml-[3px] mt-[2px]"
                    />
                    <span
                        class="absolute left-[50px] whitespace-nowrap bg-[#FFDD00] opacity-0 group-hover:opacity-100 transition-all rounded-lg p-2 font-bold pointer-events-none text-dark-700 text-slate-900"
                    >
                        Buy Me A Coffee 😇
                    </span>
                </a>
            </div>
        </div>
        <article
            class="px-10px lg:pt-0 pt-70px sm:ml-14 relative z-0 sm:pt-0 pt-8"
        >
            <slot />
        </article>
        <div class="md:block hidden"></div>
    </main>
</template>
