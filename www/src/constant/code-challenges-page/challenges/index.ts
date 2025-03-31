import letsChat from './common/lets-chat';
import portfolioDesign from './common/portfolio-design';
import speechToText from './common/speech-to-text';
import textToSpeech from './common/text-to-speech';
import webCalculator from './common/web-calculator';
import worldTimeReact from './common/world-time-react';

export default [
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
