export default [
    {
        routeName: 'AboutMe',
        to: '/',
        label: 'Home',
        icon: 'tabler:home-filled',
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
    },
    {
        routeName: null,
        to: 'https://drive.google.com/file/d/1CEMto0ubGMVBJNCLq-QQN8-aFsYUo2Dd/view?usp=sharing',
        label: 'Resume',
        icon: 'tabler:file-download',
        external: true
    }
] as Array<{
    external: boolean;
    routeName: string | null;
    to: string | { path?: string; query?: any; hash?: string };
    label: string;
    icon: string;
}>;