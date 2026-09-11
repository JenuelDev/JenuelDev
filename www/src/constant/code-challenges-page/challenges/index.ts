import type { CODE_CHALLENGES } from '@/types/type';
import letsChat from './common/lets-chat';
import portfolioDesign from './common/portfolio-design';
import speechToText from './common/speech-to-text';
import textToSpeech from './common/text-to-speech';
import webCalculator from './common/web-calculator';
import worldTimeReact from './common/world-time-react';

const otherCodeChallenges: CODE_CHALLENGES = [
    {
        title: 'Faith Chords',
        des: 'An offline-first Flutter app for browsing gospel song chords, with a local chord database and integrated YouTube playback for practicing along with songs.',
        links: [
            {
                link: 'https://faith-chords.jenuel.dev',
                icon: 'tabler:external-link',
                tooltip: 'Open Link',
            },
        ],
        techs: [
            {
                name: 'Flutter',
                icon: 'vscode-icons:file-type-flutter',
            },
            {
                name: 'Dart',
                icon: 'vscode-icons:file-type-dartlang',
            },
            {
                name: 'SQLite',
                icon: 'vscode-icons:file-type-sqlite',
            },
            {
                name: 'Android',
                icon: 'logos:android-icon',
            },
        ],
    },
    {
        title: 'Photo Booth: Auto Print',
        des: 'A Flutter app that automates photo booth printing, including photo capture, queuing, and automatic printing for events.',
        links: [
            {
                link: 'https://play.google.com/store/apps/details?id=dev.jenuel.photo_booth_auto_print',
                icon: 'logos:google-play-icon',
                tooltip: 'Open in Google Play',
            },
            {
                link: 'https://photo-booth.jenuel.dev',
                icon: 'tabler:external-link',
                tooltip: 'Open Link',
            },
        ],
        techs: [
            {
                name: 'Flutter',
                icon: 'vscode-icons:file-type-flutter',
            },
            {
                name: 'Dart',
                icon: 'vscode-icons:file-type-dartlang',
            },
            {
                name: 'Android',
                icon: 'logos:android-icon',
            },
        ],
    },
    {
        title: 'Fam Tree',
        des: 'A simple web application for creating and managing a visual family tree.',
        links: [
            {
                link: 'https://github.com/JenuelDev/my-family-tree',
                icon: 'tabler:brand-github-filled',
                tooltip: 'Open in Github',
            },
            {
                link: 'https://famtree.jenuel.dev/',
                icon: 'tabler:external-link',
                tooltip: 'Open Link',
            },
        ],
        techs: [
            {
                name: 'Vue 3',
                icon: 'material-icon-theme:vue',
            },
            {
                name: 'JavaScript',
                icon: 'devicon:javascript',
            },
            {
                name: 'Firebase',
                icon: 'logos:firebase',
            },
            {
                name: 'UnoCSS',
                icon: 'material-icon-theme:unocss',
            },
        ],
    },
    {
        title: 'Winning Combinations',
        des: 'A Philippine lottery number generator that builds cryptographically secure random combinations for Ultra Lotto 6/58, Grand Lotto 6/55, Super Lotto 6/49, Mega Lotto 6/45, and Lotto 6/42, with optional include and exclude rules.',
        links: [
            {
                link: 'https://github.com/JenuelDev/winning-combinations',
                icon: 'tabler:brand-github-filled',
                tooltip: 'Open in Github',
            },
            {
                link: 'https://winning-combinations.jenuel.dev/',
                icon: 'tabler:external-link',
                tooltip: 'Open Link',
            },
        ],
        techs: [
            {
                name: 'Vue 3',
                icon: 'material-icon-theme:vue',
            },
            {
                name: 'TypeScript',
                icon: 'devicon:typescript',
            },
            {
                name: 'UnoCSS',
                icon: 'material-icon-theme:unocss',
            },
            {
                name: 'PWA',
                icon: 'mdi:pwa',
            },
        ],
    },
    {
        title: 'Random Name Selector',
        des: '<p>This is a simple name random name/item selector.</p>',
        headIcon: 'chat',
        links: [
            {
                link: 'https://github.com/BroJenuel/random-name-select',
                icon: 'tabler:brand-github-filled',
                tooltip: 'Open In Github',
            },
            {
                link: 'https://random-select.jenuel.dev',
                icon: 'tabler:external-link',
                tooltip: 'Open Link',
            },
        ],
        techs: [
            {
                name: 'html&css',
                icon: 'ci:html5',
            },
            {
                name: 'express',
                icon: 'teenyicons:nodejs-solid',
            },
            {
                name: 'VueJS',
                icon: 'ri:vuejs-fill',
            },
        ],
    },
    {
        title: 'Lara MongoDB Docs',
        des: 'Documentation about laravel with mongodb, this package adds functionalities to the Eloquent model and Query builder for MongoDB, using the original Laravel API. This library extends the original Laravel classes, so it uses exactly the same methods.',
        techs: [
            {
                name: 'VuePress',
                icon: 'vscode-icons:file-type-vuepress',
            },
            {
                name: 'VueJS',
                icon: 'ri:vuejs-fill',
            },
        ],
        links: [
            {
                link: 'https://github.com/BroJenuel-Youtube/laravel-mongodb',
                icon: 'tabler:brand-github-filled',
                tooltip: 'Open in Github',
            },
            {
                link: 'https://laravel-mongodb.jenuel.dev/',
                icon: 'tabler:external-link',
                tooltip: 'Open Link',
            },
        ]
    },
    {
        title: `Get GIF's`,
        des: 'With this website, you can search the wide internet to get GIFs that you can download for your content.',
        techs: [
            {
                name: 'vue',
                icon: 'ri:vuejs-fill',
            },
            {
                name: 'API',
                icon: 'tabler:api',
            },
            {
                name: 'javascript',
                icon: 'devicon:javascript',
            },
        ],
        links: [
            {
                link: 'https://github.com/BroJenuel-Youtube/get-gifs',
                icon: 'tabler:brand-github-filled',
                tooltip: 'Open in Github',
            },
            {
                link: 'https://gif-find.netlify.app/',
                icon: 'tabler:external-link',
                tooltip: 'Open Link',
            },
        ]
    },
    {
        title: 'Portfolio Website',
        des: 'A very simple website that I made for a friend. This is a non profit organization or a company, its a personal website by a client.',
        techs: [
            {
                name: 'vue',
                icon: 'ri:vuejs-fill',
            },
            {
                name: 'javascript',
                icon: 'devicon:javascript',
            },
        ],
        links: [
            {
                link: 'https://kateawisan.netlify.app/',
                icon: 'tabler:external-link',
                tooltip: 'Open Link',
            },
        ]
    },

    {
        title: 'Portfolio',
        des: "It's is a new cool look for my portfolio based on Brittany's design. I created Ground Up using the Technology Called Vue to Create This Portfolio.",
        techs: [
            {
                name: 'vue',
                icon: 'ri:vuejs-fill',
            },
            {
                name: 'PWA',
                icon: 'mdi:pwa',
            },
            {
                name: 'javascript',
                icon: 'devicon:javascript',
            },
        ],
        links: [
            {
                link: 'https://github.com/BroJenuel/jenuel-portfolio-v2',
                icon: 'tabler:brand-github-filled',
                tooltip: 'Open In Github',
            },
            {
                link: 'https://Jenuel.dev',
                icon: 'tabler:external-link',
                tooltip: 'Open Link',
            },
        ]
    },
    {
        title: 'Facebook Clone',
        des: 'An early layout study recreating a complex, content-dense social feed UI in Vue to practise component structure and utility-first CSS.',
        links: [
            {
                link: 'https://github.com/JenuelDev/facebook-clone',
                icon: 'tabler:brand-github-filled',
                tooltip: 'Open In Github',
            },
            {
                link: 'https://teal-kelpie-a96265.netlify.app/',
                icon: 'tabler:external-link',
                tooltip: 'Open Link',
            }
        ],
        techs: [
            {
                name: 'WindiCSS',
                icon: 'material-icon-theme:windicss',
            },
            {
                name: 'VueJS',
                icon: 'ri:vuejs-fill',
            },
        ],
    },
    {
        title: 'I Love Vue (VueSchool)',
        des: 'A landing page built for the VueSchool I Love Vue campaign, focused on responsive layout and Nuxt page structure.',
        links: [
            {
                link: 'https://github.com/JenuelDev/i-love-vue',
                icon: 'tabler:brand-github-filled',
                tooltip: 'Open In Github',
            },
            {
                link: 'https://i-love-vue.netlify.app/',
                icon: 'tabler:external-link',
                tooltip: 'Open Link',
            }
        ],
        techs: [
            {
                name: 'html&css',
                icon: 'ci:html5',
            },
            {
                name: 'tailwindcss',
                icon: 'devicon:tailwindcss',
            },
            {
                name: 'VueJS',
                icon: 'ri:vuejs-fill',
            },
            {
                name: 'nuxt',
                icon: 'vscode-icons:file-type-nuxt',
            }
        ],
    },
    letsChat,
    worldTimeReact,
    portfolioDesign,
    webCalculator,
    speechToText,
    textToSpeech,
];

export default otherCodeChallenges;
