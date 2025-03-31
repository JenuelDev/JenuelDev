export const skillList = [];

export const mySkills = [
    {
        icon: 'skill-icons:javascript',
        tech: 'JavaScript',
        des: 'It’s my main language and I know most of it. I focus on building single-page apps with attention to code quality and best practices.',
        yearStarted: 2017,
        tools: [
            {
                icon: 'material-icon-theme:vue',
                text: 'Vue',
                des: `Vue.js is an open-source model–view–viewmodel front end JavaScript framework for building user interfaces and single-page applications. It was created by Evan You, and is maintained by him and the rest of the active core team members. <a href="https://vuejs.org/" target="_blank" alt="Go To VueJS">Go To VueJS</a>`,
            },
            {
                icon: 'vscode-icons:file-type-nuxt',
                text: 'Nuxt JS',
                des: `Build your next Vue.js application with confidence using NuxtJS. An open source framework making web development simple and powerful. <a href="https://nuxtjs.org/" target="_blank" alt="go to Nuxtjs">Go To NuxtJS</a>`,
            },
            {
                icon: 'material-icon-theme:nodejs',
                text: 'NodeJs',
                des: `Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.`,
            },
            {
                icon: 'vscode-icons:file-type-typescript-official',
                text: 'TypeScript',
                des: `Its actually like javascript but focuses more on types, this was created to be useful on IDEs like VS Code, and also help lower type errors in the future, specially as the project grows. <a href="https://www.typescriptlang.org/">To Know More Click Here</a>`,
            },
            {
                icon: 'vscode-icons:file-type-vite',
                text: 'Vite',
                des: '<a href="https://vitejs.dev/" target="_blank">Vite</a> is a frontend build tool that provides an extremely fast development experience for modern web applications. It is designed as an alternative to traditional bundlers like Webpack, offering faster hot module replacement (HMR) and optimized builds.'
            },
            {
                icon: 'skill-icons:astro',
                text: 'Astro',
                des: '<a href="https://astro.build/" target="_blank">Astro</a> is a modern frontend framework designed for building fast, content-focused websites. It follows a "Islands Architecture", meaning it delivers mostly static HTML by default and hydrates only the interactive parts as needed.'
            },
            {
                icon: 'vscode-icons:file-type-reactjs',
                text: 'ReactJs',
                des: `<a href="https://react.dev/" target="_blank">React.Js</a>is a JavaScript library for building interactive user interfaces (UIs). It was created by Facebook (now Meta) and is widely used for building modern web applications.`
            },
            {
                icon: 'mdi:electron-framework',
                text: 'Electron',
                des: '<a href="https://www.electronjs.org/" target="_blank">Electron</a> is a framework that allows you to build desktop applications using web technologies like HTML, CSS, and JavaScript. It is developed by GitHub and is used by apps like VS Code, Discord, Slack, and WhatsApp Desktop.'
            }
        ],
    },
    {
        icon: 'skill-icons:html',
        tech: 'HTML/CSS',
        des: 'I write semantic markup with accessibility in mind. I keep my CSS manageable and also slowly following BEM conventions/rules.',
        yearStarted: 2016,
        tools: [
            {
                icon: 'devicon:tailwindcss',
                text: 'tailwindcss',
                des: `A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.`,
            },
            {
                icon: 'material-icon-theme:windicss',
                svg: true,
                text: 'windicss',
                des: `If you are already familiar with Tailwind CSS, think about Windi CSS as an on-demand alternative to Tailwind, which provides faster load times, fully compatible with Tailwind v2.0 and with a bunch of additional cool features.`,
            },
            {
                icon: 'skill-icons:sass',
                text: 'SASS',
                des: `CSS with superpowers. Sass is the most mature, stable, and powerful professional grade CSS extension language in the world.`,
            },
            {
                icon: 'skill-icons:html',
                text: 'html5',
                des: `HTML5 is a markup language used for structuring and presenting content on the World Wide Web. It is the fifth and last major HTML version that is a World Wide Web Consortium recommendation. The current specification is known as the HTML Living Standard.`,
            },
            {
                icon: 'material-icon-theme:unocss',
                text: 'UnoCss',
                des: `<a href="https://unocss.dev/" target="_blank">UnoCSS</a> is an on-demand, atomic CSS engine that generates styles dynamically. It's lightweight, fast, and highly customizable, making it a great alternative to frameworks like Tailwind CSS but with even more flexibility.`
            }
        ],
    },
    {
        icon: 'skill-icons:php-dark',
        tech: 'PHP',
        des: 'Technology I used for Backend Development. PHP is the first ever language I learned for building backend functionalities. After that I started focusing on using PHP frameworks to build faster server-side rendering websites and API calls.',
        yearStarted: 2017,
        tools: [
            {
                icon: 'logos:codeigniter-icon',
                teny: true,
                text: 'CodeIgniter',
                des: 'CodeIgniter is a powerful PHP framework with a very small footprint, built for developers who need a simple and elegant toolkit to create full-featured web applications.',
            },
            {
                icon: 'material-icon-theme:laravel',
                teny: true,
                text: 'laravel/Lumen',
                des: "<a href='https://laravel.com/' target='_blank' alt='Go to Laravel'>Laravel</a> is a free, open-source PHP web framework, created by Taylor Otwell and intended for the development of web applications following the model–view–controller architectural pattern and based on Symfony. Laravel <a href='https://lumen.laravel.com/' target='_blank' alt='Go to lumen'>Lumen</a> is a stunningly fast PHP micro-framework for building web applications with expressive, elegant syntax.",
            },
        ],
    },
    {
        icon: "solar:database-bold-duotone",
        tech: "Database",
        des: "I have experience with SQL databases like MySQL, PostgreSQL, and MongoDB. I also have experience with NoSQL databases like Redis, Memcached, and CouchDB.",
        yearStarted: 2017,
        tools: [
            {
                icon: 'skill-icons:mysql-light',
                text: 'MySQL',
                des: `<a href="https://www.mysql.com/" target="_blank">MySQL</a> is a relational database management system (RDBMS) that stores and manages structured data using SQL (Structured Query Language). It is widely used in web applications, enterprise systems, and data-driven applications.`
            },
            {
                icon: 'skill-icons:postgresql-light',
                text: 'PostgreSQL',
                des: `<a href="https://www.postgresql.org/" target="_blank">PostgreSQL</a> (also called Postgres) is a powerful, open-source relational database management system (RDBMS) known for scalability, extensibility, and ACID compliance. It’s widely used in enterprise applications, web services, and data-intensive projects.`
            }
        ]
    },
    {
        icon: 'vscode-icons:file-type-ruby',
        tech: 'Rails',
        des: 'Ruby on Rails is a ruby framework for Web Development that also followed the MVC structure like Laravel and any other frameworks. I Just Started learning Ruby, and I only know little of it.',
        yearStarted: 2019,
        tools: [
            {
                icon: 'skill-icons:rails',
                text: 'Ruby on Rails',
                des: 'Ruby on Rails, or Rails, is a server-side web application framework written in Ruby under the MIT License. Rails is a model–view–controller framework, providing default structures for a database, a web service, and web pages.',
            },
        ],
    },
    {
        icon: 'hugeicons:web-design-01',
        tech: 'UI Design',
        des: 'As a developer that also works with frontend development. I started to learn and gain experience for UX designing because everything I built, I want it to be User Friendly. Figma is really a great tool for creating designs, and is what I use.',
        yearStarted: 2021,
        tools: [
            {
                icon: 'logos:figma',
                text: `Figma`,
                des: `As a developer that also works with frontend development, I started to learn and gain experience in UX designing because I want it to be User Friendly. Figma is great for creating designs and is what I use.`,
            },
        ],
    },
];
