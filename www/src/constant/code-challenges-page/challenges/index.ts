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
                link: 'https://random-select.brojenuel.com',
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
    letsChat,
    worldTimeReact,
    portfolioDesign,
    webCalculator,
    speechToText,
    textToSpeech,
];

export default otherCodeChallenges;
