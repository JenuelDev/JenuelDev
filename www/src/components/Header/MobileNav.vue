<script setup lang="ts">
import ThemeChanger from "./../themeChanger/themeChanger.vue";
import { Icon } from "@iconify/vue";
import { socialMediaLinks } from "../../constant/social-network";
import { computed } from "vue";
import { useStore } from "@/stores/store";
import headerLinks from "@/constant/header-links";
import { useRouter } from "vue-router";

const store = useStore();
const SocialNetwork = computed(() => socialMediaLinks);
const router = useRouter();

function openSite(site: string) {
    window.open(site, "_blank");
}
</script>
<template>
    <div class="nav-mobile">
        <div class="nav-front" :class="{ 'show-nav': store.navShow }">
            <div
                class="close-button z-999"
                @click="
                    store.navShow = false;
                    console.log('asdf');
                "
            >
                <Icon class="text-5xl" icon="material-symbols:cancel" />
            </div>
            <ul>
                <li class="pt-5">
                    <ThemeChanger />
                </li>
                <template v-for="(headerLink, index) in headerLinks">
                    <li
                        v-if="!headerLink.external"
                        v-scrollanimation
                        :style="`transition-delay: ${(index + 1) * 100}ms`"
                        @click.stop="
                            router.push(headerLink.to);
                            store.navShow = false;
                        "
                    >
                        <div
                            :class="{
                                active: $route.name == headerLink.routeName,
                            }"
                        >
                            <Icon size="20" :icon="headerLink.icon" />
                            {{ headerLink.label }}
                        </div>
                    </li>
                    <li v-else v-scrollanimation :style="`transition-delay: ${(index + 1) * 100}ms`">
                        <a rel="external" :href="headerLink.to as string" hreflang="es-es">
                            <Icon size="20" :icon="headerLink.icon" />
                            {{ headerLink.label }}
                        </a>
                    </li>
                </template>
            </ul>

            <div class="px-6 mt-7 mb-7">
                <p class="mb-5">Social Links:</p>
                <ol class="flex gap-3 flex-wrap">
                    <li v-for="socialLink in SocialNetwork">
                        <Icon class="text-4xl" :icon="socialLink.icon" @click="openSite(socialLink.link)" />
                    </li>
                </ol>
            </div>
        </div>
        <div class="nav-back" :class="{ 'show-nav': store.navShow }" @click="store.navShow = false"></div>
    </div>
</template>

<style lang="scss">
.nav-mobile {
    display: none;

    .show-bar-button {
        position: absolute;
        right: 0;
        top: 0;
        margin: 20px;
    }

    .nav-front {
        position: fixed;
        height: 100%;
        overflow: auto;
        background-color: var(--background);
        z-index: 80;
        top: 0;
        right: 0;
        width: 300px;
        margin-right: -300px;
        transition: all 0.3s;

        &.show-nav {
            margin-right: 0px;
        }

        .close-button {
            text-align: right;
            margin: 20px;
            position: absolute;
            top: 0;
            right: 0;
        }

        ul {
            list-style: none;
            display: flex;
            flex-direction: column;
            gap: 20px;
            font-size: 1.3rem;
            margin-left: 20px;

            .theme-dropdown-content {
                left: -25px !important;
                top: 40px !important;
            }

            li {
                cursor: pointer;

                div,
                a {
                    display: flex;
                    align-items: center;
                    gap: 7px;
                    padding: 10px;
                    user-select: none;
                    /* supported by Chrome and Opera */
                    -webkit-user-select: none;
                    /* Safari */
                    -khtml-user-select: none;
                    /* Konqueror HTML */
                    -moz-user-select: none;
                    /* Firefox */
                    -ms-user-select: none;
                    /* Internet Explorer/Edge */

                    &.active {
                        color: var(--primary);
                    }
                }
            }
        }

        ul.social-medias-in-nav {
            padding: 0;
            margin: 0;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            visibility: hidden;
        }
    }

    .nav-back {
        background-color: rgba(0, 0, 0, 0.4);
        height: 0%;
        width: 0%;
        position: fixed;
        z-index: 30;
        top: 0;
        right: 0;

        &.show-nav {
            height: 100%;
            width: 100%;
        }
    }
}

@media only screen and (max-width: 1050px) {
    .nav-mobile {
        display: block;
    }
}

@media only screen and (max-width: 768px) {
    .nav-mobile {
        .nav-front {
            ul.social-medias-in-nav {
                visibility: visible;
            }
        }
    }
}
</style>
