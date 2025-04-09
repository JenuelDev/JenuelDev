export default [
    {
        routeName: 'AboutMe',
        to: '/',
        label: 'Home',
        icon: 'tabler:home-filled',
        external: false
    },
    {
        routeName: 'TechnicalSkills',
        to: {
            path: '/',
            hash: '#technical-skills'
        },
        label: 'Techs',
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
        icon: 'tabler:terminal-2',
        external: false
    },
    {
        routeName: 'Experience',
        to: { path: '/', hash: '#experience' },
        label: 'Experience',
        icon: 'tabler:briefcase-2-filled',
        external: false
    },
    {
        routeName: 'Achievements',
        to: { path: '/', hash: '#achievements' },
        label: 'Achievements',
        icon: 'game-icons:achievement',
        external: false
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
}>;