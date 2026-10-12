export interface FeaturedProject {
    id: string;
    overline: string;
    title: string;
    des: string;
    summary: string;
    features: { title: string; description: string; icon: string }[];
    problem: string;
    implementation: string;
    capabilities: string[];
    role: string;
    platforms: string[];
    techs: string[];
    links: { link: string; icon: string | null; tooltip: string }[];
    imageLink: string;
    img: string;
    logo: string;
}

export default {
    works: [
        {
            id: "believers-sword",
            overline: "Cross-platform product",
            problem:
                "Support Bible reading and study without a constant internet connection, while making notes and study activity available across devices.",
            implementation:
                "Laravel and PostgreSQL backend, Vue and Electron desktop/web interfaces, and a Flutter mobile app with SQLite storage and background synchronisation.",
            capabilities: [
                "Offline reading with notes and highlights",
                "Cross-device sync and background data updates",
                "Prayer tracking, devotionals, and AI-assisted study",
            ],
            title: "Believers Sword",
            summary:
                "Read, study, and take notes offline. Keep your study activity connected across Windows, Android, and the web.",
            features: [
                {
                    title: "Study offline",
                    description: "Bible reading, notes, and highlights, even without an internet connection.",
                    icon: "tabler:book",
                },
                {
                    title: "Continue across devices",
                    description: "Synced study activity and background updates across your devices.",
                    icon: "tabler:devices",
                },
                {
                    title: "Build a study routine",
                    description: "Prayer tracking, devotionals, and AI-assisted study tools.",
                    icon: "tabler:sparkles",
                },
            ],
            des: "A cross-platform Bible study application I designed, built, and maintain end to end. It covers offline-first reading, cross-device synchronisation, notes, highlights, prayer tracking, devotionals, AI-assisted study tools, and background data sync.",
            role: "Designed and built the product end to end, including the apps, backend, deployment, and infrastructure.",
            platforms: ["Windows", "Android", "Web"],
            techs: ["Laravel", "PostgreSQL", "Vue3", "Electron", "Flutter", "Dart", "SQLite", "UnoCSS"],
            links: [
                {
                    link: "https://github.com/Bible-Projects/believers-sword-app",
                    icon: "tabler:brand-github",
                    tooltip: "View source on GitHub",
                },
                {
                    link: "https://www.believersword.com/",
                    icon: null,
                    tooltip: "Website",
                },
                {
                    link: "https://play.google.com/store/apps/details?id=com.believers.sword.believers_sword_mobile&hl=en",
                    icon: "tabler:brand-google-play",
                    tooltip: "Play Store",
                },
                {
                    link: "https://app.believersword.com/",
                    icon: "tabler:browser",
                    tooltip: "Web app",
                },
                {
                    link: "ms-windows-store://pdp/?productid=9PFN10LVMBV4",
                    icon: "tabler:brand-windows",
                    tooltip: "Microsoft Store",
                },
                {
                    link: "https://www.believersword.com/downloads",
                    icon: "tabler:download",
                    tooltip: "Other",
                },
            ],
            imageLink: "https://www.believersword.com/",
            img: "/images/projects/BS.webp",
            logo: "/project logo/believers sword.png",
        },
        {
            id: "tracksy",
            overline: "Mobile product",
            problem:
                "Help people organise everyday spending and budgets while keeping personal and business finances in separate profiles.",
            implementation:
                "Flutter and Dart application, with SQLite for local storage and Firebase-backed cloud synchronisation.",
            capabilities: [
                "Categorised expense logging and spending charts",
                "Budgets and separate personal/business profiles",
                "Local storage with cloud sync",
            ],
            title: "Tracksy",
            summary:
                "Understand your spending and plan your budgets. Keep personal and business finances organised in separate profiles.",
            features: [
                {
                    title: "Understand your spending",
                    description: "Categorised expense logging and charts that show where your money goes.",
                    icon: "tabler:chart-pie",
                },
                {
                    title: "Plan your budgets",
                    description: "Manage budgets with separate profiles for personal and business spending.",
                    icon: "tabler:wallet",
                },
                {
                    title: "Keep records connected",
                    description: "Local storage with cloud synchronisation for your expense records.",
                    icon: "tabler:cloud",
                },
            ],
            des: "A personal expense tracker for logging, analysing, and managing spending. Categorised expenses, spending charts, budgets, and separate profiles for personal and business use, backed by local storage with cloud sync.",
            role: "Product design, Flutter application, data model, offline storage, and store releases.",
            platforms: ["Android", "iOS"],
            techs: ["Flutter", "Dart", "Firebase", "SQLite"],
            links: [
                {
                    link: "https://tracksy.jenuel.dev/",
                    icon: null,
                    tooltip: "Visit product",
                },
                {
                    link: "https://play.google.com/store/apps/details?id=dev.jenuel.tracksy",
                    icon: "tabler:brand-google-play",
                    tooltip: "Android",
                },
            ],
            imageLink: "https://tracksy.jenuel.dev/",
            img: "/images/projects/tracksy.png",
            logo: "/project logo/tracksy.png",
        },
    ],
} satisfies { works: FeaturedProject[] };
