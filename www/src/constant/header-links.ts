export default [
    {
        routeName: null,
        to: '/',
        label: 'HOME',
        icon: 'tabler:home-filled',
        external: false,
        children: [
            {
                routeName: 'Experience',
                to: { path: '/', hash: '#experience' },
                label: 'Experience',
                description: 'Where I have worked',
                icon: 'tabler:briefcase-2-filled',
                external: false
            },
            {
                routeName: 'Project',
                to: {
                    path: '/',
                    hash: '#projects'
                },
                label: 'Featured Work',
                description: 'Products I own end to end',
                icon: 'tabler:terminal-2',
                external: false
            },
            {
                routeName: 'TechnicalSkills',
                to: {
                    path: '/',
                    hash: '#technical-skills'
                },
                label: 'Core Technology',
                description: 'The stack I work in',
                icon: 'tabler:device-desktop-code',
                external: false
            },
            {
                routeName: 'AboutMeSection',
                to: {
                    path: '/',
                    hash: '#about'
                },
                label: 'About Me',
                description: 'Get to know who I am',
                icon: 'tabler:user',
                external: false
            },
            {
                routeName: 'Certificates',
                to: '/certificates',
                label: 'Certificates',
                description: 'Education and credentials',
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
        to: 'https://store.jenuel.dev/',
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