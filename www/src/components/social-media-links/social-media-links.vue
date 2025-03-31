<script setup lang="ts">
import { socialMediaLinks, email } from '@/constant/social-network';
import { Icon } from '@iconify/vue';

function openSite(site: string) {
    window.open(site, '_blank');
}
</script>

<template>
    <div class="social-network">
        <div class="social-media social-media-orientation social-media-placement">
            <ul v-scrollanimation class="social-media-list">
                <li v-for="socialLink in socialMediaLinks">
                    <div @click="openSite(socialLink.link)" class="a-link">
                        <div class="text-size-40px">
                            <Icon :icon="socialLink.icon" />
                        </div>
                        <span class="icon-title">Facebook</span>
                    </div>
                </li>
            </ul>
        </div>
        <div v-scrollanimation class="email-media social-media-orientation social-media-placement">
            <div class="email-media-link">
                <div class="mail-link" @click="$router.push('/contact')">{{ email }}</div>
            </div>
        </div>
    </div>
</template>
