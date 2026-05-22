import type { CODE_CHALLENGES } from '@/types/type';
import letsChat from './common/lets-chat';
import portfolioDesign from './common/portfolio-design';
import speechToText from './common/speech-to-text';
import textToSpeech from './common/text-to-speech';
import webCalculator from './common/web-calculator';
import worldTimeReact from './common/world-time-react';

const otherCodeChallenges: CODE_CHALLENGES = [
    {
        title: 'Facebook Clone',
        des: 'Cloning facebook style. This is not intended to be used for phishing or other illegal activities. This is solely for educational purposes only.',
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
        des: '<p>This is a simple landing page for the VueSchool I Love Vue.</p>',
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
    letsChat,
    worldTimeReact,
    portfolioDesign,
    webCalculator,
    speechToText,
    textToSpeech,
];

export default otherCodeChallenges;
