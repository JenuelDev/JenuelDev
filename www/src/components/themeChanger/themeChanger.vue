<script setup lang="ts">
import { ref } from "vue";
import { Icon } from "@iconify/vue";
import { themes } from "./Themes";
const storedTheme = localStorage.getItem("theme");
const savedTheme = storedTheme === "supportTeal" || storedTheme === "default" ? "teal" : storedTheme;
if (savedTheme !== storedTheme && savedTheme) {
    localStorage.setItem("theme", savedTheme);
}
const selectedTheme = ref(themes.some((theme) => theme.name === savedTheme) ? savedTheme! : "artcraft");
document.documentElement.setAttribute("theme", selectedTheme.value);
const open = ref(false);
const close = () => {
    open.value = false;
};
function changeTheme(name: string) {
    selectedTheme.value = name;
    localStorage.setItem("theme", name);
    document.documentElement.setAttribute("theme", name);
    close();
}
</script>
<template>
    <div class="craft-theme" v-click-outside="close" @keydown.esc="close">
        <button
            type="button"
            class="theme-toggle"
            aria-label="Change theme"
            :aria-expanded="open"
            aria-controls="theme-options"
            @click="open = !open"
        >
            <Icon icon="tabler:sun" />
        </button>
        <div v-if="open" id="theme-options" class="theme-options" aria-label="Color themes">
            <p>Choose a theme</p>
            <button
                v-for="theme in themes"
                :key="theme.name"
                type="button"
                :aria-pressed="selectedTheme === theme.name"
                @click="changeTheme(theme.name)"
            >
                <span class="theme-swatch" :style="{ background: theme.color3, borderColor: theme.color1 }"></span>
                {{ theme.label ?? theme.name.replace(/([A-Z])/g, " $1")
                }}<Icon v-if="selectedTheme === theme.name" icon="tabler:check" />
            </button>
        </div>
    </div>
</template>
