import type { CODE_CHALLENGE } from "@/types/type";

const artwork: Record<string, { icon: string; category: string; logo?: string; image?: string }> = {
    "Faith Chords": {
        icon: "tabler:music",
        category: "Music & practice",
        logo: "/project logo/gospel song chords logo.png",
        image: "/images/projects/gospel-guitar-chords.png",
    },
    "Photo Booth: Auto Print": {
        icon: "tabler:camera",
        category: "Photography & printing",
        logo: "/project logo/photo booth.png",
        image: "/images/projects/photo-booth.png",
    },
    "Fam Tree": { icon: "tabler:binary-tree", category: "Family tree", logo: "/project logo/fam tree.png" },
    "Winning Combinations": { icon: "tabler:dice-5", category: "Number generator" },
    "Random Name Selector": { icon: "tabler:arrows-shuffle", category: "Random selection" },
    "Lara MongoDB Docs": { icon: "tabler:database", category: "Developer documentation" },
    "Get GIF's": { icon: "tabler:gif", category: "GIF search" },
    "Portfolio Website": { icon: "tabler:browser", category: "Personal website" },
    Portfolio: { icon: "tabler:layout", category: "Portfolio design" },
    "Facebook Clone": { icon: "tabler:brand-facebook", category: "Interface study" },
    "I Love Vue (VueSchool)": { icon: "tabler:brand-vue", category: "Landing page" },
    "Lets Chat": { icon: "tabler:messages", category: "Real-time chat" },
    "World Time Using React Native": { icon: "tabler:world", category: "World clock" },
    "Web Calculator": { icon: "tabler:calculator", category: "Calculator" },
    "Speech To Text": { icon: "tabler:microphone", category: "Speech recognition" },
    "Text To Speech": { icon: "tabler:volume", category: "Speech synthesis" },
};
const accents = ["#5c88f5", "#ed7557", "#a184eb", "#e5b04b", "#45bfa5", "#d97ba8", "#94b955", "#659bd7"];

export function archivePresentation(project: CODE_CHALLENGE, index: number) {
    return {
        id: `archive-project-${index + 1}`,
        accent: accents[index % accents.length],
        ...(artwork[project.title] ?? { icon: "tabler:code", category: "Development experiment" }),
    };
}

export function primaryArchiveLink(project: CODE_CHALLENGE) {
    return project.links.find((link) => link.icon === "tabler:external-link")?.link ?? project.links[0]?.link;
}
