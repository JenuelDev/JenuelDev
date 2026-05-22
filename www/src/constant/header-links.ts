export default [
    {
        routeName: null,
        to: '/',
        label: 'HOME',
        icon: 'tabler:home-filled',
        external: false,
        children: [
            {
                routeName: 'AboutMeSection',
                to: {
                    path: '/',
                    hash: '#about-me'
                },
                label: 'About Me',
                description: 'Get to know who I am',
                icon: 'tabler:user',
                external: false
            },
            {
                routeName: 'TechnicalSkills',
                to: {
                    path: '/',
                    hash: '#technical-skills'
                },
                label: 'Techs',
                description: 'Tools and stack I work with',
                icon: 'tabler:device-desktop-code',
                external: false
            },
            {
                routeName: 'Project',
                to: {
                    path: '/',
                    hash: '#projects'
                },
                label: 'Projects',
                description: 'Things I have built',
                icon: 'tabler:terminal-2',
                external: false
            },
            {
                routeName: 'Experience',
                to: { path: '/', hash: '#experience' },
                label: 'Experience',
                description: 'Where I have worked',
                icon: 'tabler:briefcase-2-filled',
                external: false
            },
            {
                routeName: 'Achievements',
                to: { path: '/', hash: '#achievements' },
                label: 'Achievements',
                description: 'Recognitions and milestones',
                icon: 'game-icons:achievement',
                external: false
            }
        ]
    },
    {
        routeName: 'Contact',
        to: '/contact',
        label: 'Contact Me',
        icon: 'tabler:mail',
        external: false
    },
    {
        routeName: null,
        to: 'https://buymeacoffee.com/jenuel.dev/extras',
        label: 'Store',
        icon: 'tabler:shopping-cart',
        external: true
    },
    {
        routeName: null,
        to: 'https://blog.jenuel.dev',
        label: 'Blog',
        icon: 'tabler:brand-blogger',
        external: true
    }
] as Array<{
    external: boolean;
    routeName: string | null;
    to: string | { path?: string; query?: any; hash?: string };
    label: string;
    icon: string;
    children?: Array<{
        external: boolean;
        routeName: string | null;
        to: string | { path?: string; query?: any; hash?: string };
        label: string;
        description?: string;
        icon: string;
    }>;
}>;