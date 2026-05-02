<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { skillList, mySkills, type Skill } from "../../constant/TechnicalSkills";
import { reactive, ref } from "vue";
const dialog = ref(false);
const dialogContent = reactive({
    title: "",
    des: "",
    icon: "",
    skill: "",
});

const openDialog = (skill: any) => {
    dialogContent.skill = skill.text;
    dialogContent.title = skill.text;
    dialogContent.des = skill.des;
    dialogContent.icon = skill.icon;

    const mainScreenWindow = document.getElementById("main-screen-window");

    if (mainScreenWindow) mainScreenWindow.style.overflowY = "hidden";

    dialog.value = !dialog.value;
};
const closeDialog = () => {
    const mainScreenWindow = document.getElementById("main-screen-window");

    if (mainScreenWindow) mainScreenWindow.style.overflowY = "overlay";

    dialog.value = !dialog.value;
};

const skillsByName = new Map<string, Skill>();

mySkills.forEach((skill) => {
    skillsByName.set(skill.tech, {
        icon: skill.icon,
        text: skill.tech,
        des: skill.des,
    });

    skill.tools.forEach((tool) => {
        skillsByName.set(tool.text, tool);
    });
});

const getSkill = (name: string, icon: string, des = ""): Skill => {
    return skillsByName.get(name) || { icon, text: name, des };
};

const skillGroups = [
    {
        title: "Frontend",
        icon: "tabler:layout-dashboard",
        description: "Frameworks and languages I use for responsive, accessible, interactive interfaces.",
        skills: [
            getSkill("JavaScript", "skill-icons:javascript"),
            getSkill("TypeScript", "vscode-icons:file-type-typescript-official"),
            getSkill("Vue", "material-icon-theme:vue"),
            getSkill("Nuxt JS", "vscode-icons:file-type-nuxt"),
            getSkill("ReactJs", "vscode-icons:file-type-reactjs"),
            getSkill("Astro", "skill-icons:astro"),
        ],
    },
    {
        title: "Backend",
        icon: "tabler:server-cog",
        description: "Server-side tools for APIs, business logic, and maintainable application workflows.",
        skills: [
            getSkill("PHP", "skill-icons:php-dark"),
            getSkill("laravel/Lumen", "material-icon-theme:laravel"),
            getSkill("CodeIgniter", "logos:codeigniter-icon"),
            getSkill("NodeJs", "material-icon-theme:nodejs"),
            getSkill("Rails", "vscode-icons:file-type-ruby"),
            getSkill("Ruby on Rails", "skill-icons:rails"),
        ],
    },
    {
        title: "Database",
        icon: "tabler:database",
        description: "Relational and document databases used for application data and platform features.",
        skills: [
            getSkill("Database", "solar:database-bold-duotone"),
            getSkill("MySQL", "skill-icons:mysql-light"),
            getSkill("PostgreSQL", "skill-icons:postgresql-light"),
            getSkill("MongoDB", "skill-icons:mongodb"),
        ],
    },
    {
        title: "Styling & Tooling",
        icon: "tabler:tools",
        description: "CSS systems, build tooling, and desktop app tooling for faster development.",
        skills: [
            getSkill("HTML/CSS", "skill-icons:html"),
            getSkill("html5", "skill-icons:html"),
            getSkill("SASS", "skill-icons:sass"),
            getSkill("tailwindcss", "devicon:tailwindcss"),
            getSkill("windicss", "material-icon-theme:windicss"),
            getSkill("UnoCss", "material-icon-theme:unocss"),
            getSkill("Vite", "vscode-icons:file-type-vite"),
            getSkill("Electron", "mdi:electron-framework"),
        ],
    },
    {
        title: "Design",
        icon: "tabler:brush",
        description: "Design handoff and interface thinking for user-friendly frontend implementation.",
        skills: [
            getSkill("UI Design", "hugeicons:web-design-01"),
            getSkill("Figma", "logos:figma"),
        ],
    },
    {
        title: "AI & Productivity",
        icon: "tabler:sparkles",
        description: "Practical AI usage for development assistance, automation, and faster iteration.",
        skills: [
            getSkill("Artificial Intelligence", "mdi:robot"),
        ],
    },
];
</script>

<template>
    <div id="technical-skills" class="modal-window pt-20">
        <div class="modal-window-content">
            <transition name="modal">
                <div class="box" v-show="dialog">
                    <div>
                        <Icon
                            @click="closeDialog()"
                            class="x-close-button text-3xl"
                            icon="material-symbols:close-rounded"
                        />
                        <h1 class="flex items-center">
                            <Icon class="skill-icon text-3xl" :icon="dialogContent.icon"></Icon>
                            <div>
                                {{ dialogContent.title }}
                            </div>
                        </h1>
                        <div class="text-center">
                            <p v-html="dialogContent.des"></p>
                        </div>
                    </div>
                </div>
            </transition>
        </div>
        <transition name="modalBg">
            <div v-show="dialog" class="modal-window-bg" @click="closeDialog()"></div>
        </transition>
    </div>
    <ul v-show="false">
        <li
            v-for="(skill, i) in skillList"
            v-scrollanimation
            :key="skill.text"
            @click="openDialog(skill)"
            :style="'transition-delay: ' + Number(i) * 50 + 'ms'"
        >
            <div>
                <Icon class="skill-icon" :icon="skill.icon" :size="20" />
                {{ skill.text }}
            </div>
        </li>
    </ul>
    <section class="flex flex-col w-[100%] max-w-900px visible opacity-100 z-10 px-10px mx-auto mb-90px">
        <h1
            v-scrollanimation
            class="lg:text-size-44px md:text-size-38px text-size-28px font-600 text-[var(--primary)] tracking-tight mt-10px mb-15px"
        >
            skills
        </h1>
        <p
            v-scrollanimation
            class="text-lg w-[100%] max-w-[770px] leading-7"
        >
            Continuous learning is a core focus to stay current with emerging technologies and select the best tools
            for each project.
        </p>
        <div class="technical-skills-grid grid grid-cols-1 md:grid-cols-2 gap-22px mt-42px">
            <div
                v-scrollanimation
                class="technical-skill-card"
                v-for="group in skillGroups"
                :key="group.title"
            >
                <div class="technical-skill-card-header">
                    <div class="technical-skill-icon">
                        <Icon :icon="group.icon" />
                    </div>
                    <div>
                        <h3 class="technical-skill-title text-xl font-700">
                            {{ group.title }}
                        </h3>
                        <p class="technical-skill-description leading-6">
                            {{ group.description }}
                        </p>
                    </div>
                </div>
                <div class="technical-skill-tags flex flex-wrap gap-10px mt-22px">
                    <button
                        v-for="skill in group.skills"
                        :key="skill.text"
                        type="button"
                        class="technical-skill-tag"
                        @click="openDialog(skill)"
                    >
                        <Icon class="skill-icon" :icon="skill.icon"></Icon>
                        <span>{{ skill.text }}</span>
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
.modal-enter-active,
.modal-leave-active {
    transition: 0.3s;
}

.technical-skill-card {
    min-height: 250px;
    border: 1px solid color-mix(in srgb, var(--primary) 22%, transparent);
    border-radius: 8px;
    padding: 22px;
    background: color-mix(in srgb, var(--background) 92%, #001e2e);
    transition: transform 0.25s ease, border-color 0.25s ease;

    &:hover {
        transform: translateY(-4px);
        border-color: color-mix(in srgb, var(--primary) 42%, transparent);
    }
}

.technical-skill-card-header {
    display: flex;
    align-items: flex-start;
    gap: 16px;
}

.technical-skill-icon {
    display: grid;
    width: 48px;
    height: 48px;
    flex: 0 0 48px;
    place-items: center;
    border: 1px solid color-mix(in srgb, var(--primary) 20%, transparent);
    border-radius: 7px;
    background: color-mix(in srgb, var(--background) 84%, #001c2a);
    color: var(--primary);

    svg {
        width: 26px;
        height: 26px;
    }
}

.technical-skill-title {
    margin: 0 0 7px;
    color: var(--primary);
    letter-spacing: 0;
    line-height: 1.15;
}

.technical-skill-description {
    margin: 0;
    color: color-mix(in srgb, var(--lightestSlate) 76%, transparent);
}

.technical-skill-tag {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    min-height: 38px;
    border: 1px solid color-mix(in srgb, var(--primary) 22%, transparent);
    border-radius: 999px;
    padding: 7px 12px;
    background: transparent;
    color: color-mix(in srgb, var(--lightestSlate) 82%, transparent);
    cursor: pointer;
    font: inherit;
    line-height: 1;
    transition: color 0.2s ease, border-color 0.2s ease, background 0.2s ease;

    &:hover {
        border-color: color-mix(in srgb, var(--primary) 45%, transparent);
        background: color-mix(in srgb, var(--primary) 8%, transparent);
        color: var(--primary);
    }

    .skill-icon {
        width: 22px;
        min-width: 22px;
        height: 22px;
    }
}

.modal-enter-from,
.modal-leave-to {
    opacity: 0;
    transform: scale(0.8) translateY(100px) rotate(0.5turn);
}

.modalBg-enter-active,
.modalBg-leave-active {
    transition: 0.3s;
}

.modalBg-enter-from,
.modalBg-leave-to {
    opacity: 0;
    transform: scale(1) translateY(0px) rotate(0turn);
}

// modal
.modal-window {
    .skill-icon {
        min-width: 30px;
    }

    .modal-window-bg {
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background-color: rgba(0, 0, 0, 0.8);
        z-index: 80;
    }

    .modal-window-content {
        position: fixed;
        z-index: 90;
        top: 0;
        left: 0;

        .box {
            position: fixed;
            max-width: 290px;
            background-color: var(--background);
            padding: 20px;
            border-radius: 10px;
            left: 50%;
            margin-left: -125px;
            margin-top: 20vh;

            .x-close-button {
                float: right;
                cursor: pointer;
                transition: 0.3s;

                &:hover {
                    color: var(--primary);
                }
            }

            h1 {
                margin: 10px 0;
                align-items: center;
                gap: 10px;
                color: var(--primary);
            }
        }
    }
}

@media screen and (max-width: 553px) {
    .technical-skill-card-header {
        gap: 12px;
    }

    .technical-skill-card {
        padding: 18px;
    }

    .technical-skill-icon {
        width: 42px;
        height: 42px;
        flex-basis: 42px;

        svg {
            width: 23px;
            height: 23px;
        }
    }

    .modal-window {
        .modal-window-content {
            .box {
                position: fixed;
                max-width: 250px;
                background-color: var(--background);
                padding: 20px;
                left: 45%;
                border-radius: 10px;
                margin-left: -125px;
                margin-top: 20vh;
            }
        }
    }
}
</style>
