<script setup lang="ts">
const projects: Array<{
    name: string;
    from: string;
    description: string;
    url: string;
    img?: string;
    tech?: string[];
    ariaLabel?: string;
    shop?: undefined;
}> = [
    {
        name: "Programming With Python 3.x",
        from: "SimpleLearn",
        description:
            "We learned the fundamentals of Python programming. The course covered essential topics such as data types, control structures, functions, and modules, providing a comprehensive foundation for writing efficient and effective Python code.",
        url: "https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIxMTY5IiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvdGh1bWJfNDcxNDk1N18xNzAyNDc0ODI2LnBuZyIsInVzZXJuYW1lIjoiSmVudWVsIE9yYXMgR2FuYXdlZCJ9&utm_source=shared-certificate&utm_medium=lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Flms.simplilearn.com%2Fcourses%2F3381%2FProgramming%2520with%2520Python%25203.X%2Fcertificate%2Fdownload-skillup&%24web_only=true&_branch_match_id=1304760874632407396&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL87MLcjJ1EssKNDLyczL1k%2FVryqJNDc0SQktdUsCAMaW0h8lAAAA",
    },
    {
        name: "Foundational C# with Microsoft",
        from: "freeCodeCamp",
        description:
            "We learned the core principles of C# programming. The course covered essential topics such as object-oriented programming, data structures, and error handling, providing a solid foundation for developing applications within the .NET framework.",
        url: "https://www.freecodecamp.org/certification/brojenuel/foundational-c-sharp-with-microsoft",
    },
    {
        name: "Learn Laravel VueJs from Scratch - Building a Testal Web App",
        from: "Udemy",
        description:
            "We gained hands-on experience in developing a full-stack web application. The course covered essential topics in Laravel for backend development and Vue.js for creating dynamic front-end interfaces, focusing on building robust, testable, and maintainable applications.",
        url: "https://www.udemy.com/certificate/UC-9ec97828-2ddb-41c2-9507-29fe60f097fb/",
    },
    {
        name: "Bachelor of Science in Information Technology",
        description:
            "Majored in Web Technology, and had been creating projects related to web programming and actively participating in events, seminars, and competitions.",
        from: "Kings College of The Philippines",
        url: "https://media.licdn.com/dms/image/C562DAQHIquqpxZqo_A/profile-treasury-image-shrink_800_800/0/1626197488273?e=1716886800&v=beta&t=8LCsqAuECi7kOrYkrDPGQ3f6jYpHjpN329aDRJ0Z2d0",
    },
    {
        name: "SQL",
        description:
            "Completed a course on SQL, where we learned to create, manage, and manipulate databases. The course covered essential topics such as writing queries, joining tables, and optimizing database performance, equipping us with the skills to effectively handle and analyze data.",
        from: "SoloLearn",
        url: "https://www.sololearn.com/Certificate/CT-ZLZGMW2R/pdf",
    },
    {
        name: "JavaScript",
        description:
            "Completed a course on JavaScript, where we mastered the fundamentals of programming, including variables, functions, and event handling, as well as advanced concepts like asynchronous programming and DOM manipulation to build dynamic and interactive web applications.",
        from: "SoloLearn",
        url: "https://www.sololearn.com/Certificate/CT-LKXLDBLV/pdf",
    },
    {
        name: " jQuery",
        description:
            "Completed a course on jQuery, where we learned how to simplify JavaScript programming, manipulate HTML documents, handle events, create animations, and develop dynamic web applications with ease.",
        from: "SoloLearn",
        url: "https://www.sololearn.com/Certificate/CT-RXV9P2W0/pdf",
    },
    {
        name: "Smart Technopreneurship",
        description:
            "Successfully completed a course on Smart Technopreneurship, where we explored innovative business strategies, digital technologies, and entrepreneurial skills essential for thriving in today's tech-driven market.",
        from: "Tesda",
        url: "https://github.com/BroJenuel/BroJenuel/raw/master/certificates/SMARTtechno101_Certificate%20of%20Completion.pdf",
    },
    {
        name: "Smart Android Apps Development For Beffiners",
        description:
            "Successfully completed a course on Smart Android Apps Development for Beginners, where we covered the fundamentals of Android programming, user interface design, and essential tools and techniques for creating functional and user-friendly mobile applications.",
        from: "Tesda",
        url: "https://github.com/BroJenuel/BroJenuel/raw/master/certificates/SMART%20Android%20Mobile%20Apps%20Development%20for%20Beginners_Certificate%20of%20Completion.pdf",
    },
];
</script>
<template>
    <section
        class="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
        aria-label="Selected projects"
    >
        <div
            class="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0"
        >
            <h2
                class="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only"
            >
                Achievements
            </h2>
        </div>
        <div>
            <p class="mb-10">
                During my professional journey, I've embraced continuous
                learning as an essential part of growth. There are many ways to
                learn, such as joining projects or taking courses. Through these
                experiences, I've been able to achieve significant milestones.
            </p>
            <ul class="group/list">
                <li v-for="project in projects" class="mb-12">
                    <div
                        class="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 items-center"
                    >
                        <div
                            class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"
                        ></div>
                        <div class="z-10 order-2 sm:col-span-6 text-left">
                            <h3 class="flex flex-col">
                                <a
                                    class="inline-flex items-baseline font-medium leading-tight text-slate-200 group-hover:text-teal-300 focus-visible:text-teal-300 group/link text-base mb-2"
                                    :href="project.url"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    :aria-label="project.ariaLabel"
                                >
                                    <span class="flex items-center gap-1">
                                        <span>
                                            <Icon
                                                size="20"
                                                name="iconamoon:certificate-badge-duotone" />
                                            {{ project.name }}
                                            <Icon
                                                class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                                                name="ic:baseline-arrow-outward"
                                        /></span>
                                    </span>
                                </a>
                                <span class="text-sm">{{ project.from }}</span>
                            </h3>
                            <p class="mt-2 text-sm leading-normal">
                                {{ project.description }}
                            </p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </section>
</template>
