const projects: Array<{
    name: string;
    from: string;
    description: string;
    url: string;
    img?: string;
    tech?: string[];
    ariaLabel?: string;
    shop?: undefined;
    logo?: string;
    isLogoImage?: boolean;
    logoFontFamily?: string;
}> = [
        {
            name: "Introduction To Python",
            from: "SoloLearn",
            isLogoImage: true,
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/SoloLearn_logo.svg/1920px-SoloLearn_logo.svg.png?20210710155454",
            description: "This course covered the basic concepts of Python, as well as build real-life projects and solve different coding challenges.",
            url: "https://www.sololearn.com/certificates/CC-BYG4YO41"
        },
        {
            name: "Programming With Python 3.x",
            from: "SimpleLearn",
            isLogoImage: true,
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Simplilearn_logo.png/800px-Simplilearn_logo.png",
            description:
                "We learned the fundamentals of Python programming. The course covered essential topics such as data types, control structures, functions, and modules, providing a comprehensive foundation for writing efficient and effective Python code.",
            url: "https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIxMTY5IiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvdGh1bWJfNDcxNDk1N18xNzAyNDc0ODI2LnBuZyIsInVzZXJuYW1lIjoiSmVudWVsIE9yYXMgR2FuYXdlZCJ9&utm_source=shared-certificate&utm_medium=lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Flms.simplilearn.com%2Fcourses%2F3381%2FProgramming%2520with%2520Python%25203.X%2Fcertificate%2Fdownload-skillup&%24web_only=true&_branch_match_id=1304760874632407396&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL87MLcjJ1EssKNDLyczL1k%2FVryqJNDc0SQktdUsCAMaW0h8lAAAA",
        },
        {
            name: "Foundational C# with Microsoft",
            from: "freeCodeCamp",
            isLogoImage: true,
            logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/FreeCodeCamp_logo.svg",
            description:
                "We learned the core principles of C# programming. The course covered essential topics such as object-oriented programming, data structures, and error handling, providing a solid foundation for developing applications within the .NET framework.",
            url: "https://www.freecodecamp.org/certification/jenueldev/foundational-c-sharp-with-microsoft",
        },
        {
            name: "Learn Laravel VueJs from Scratch - Building a Tesla Web App",
            from: "Udemy",
            isLogoImage: true,
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Udemy_logo.svg/512px-Udemy_logo.svg.png",
            description:
                "We gained hands-on experience in developing a full-stack web application. The course covered essential topics in Laravel for backend development and Vue.js for creating dynamic front-end interfaces, focusing on building robust, testable, and maintainable applications.",
            url: "https://www.udemy.com/certificate/UC-9ec97828-2ddb-41c2-9507-29fe60f097fb/",
        },
        {
            name: "Bachelor of Science in Information Technology",
            description:
                "Majored in Web Technology, and had been creating projects related to web programming and actively participating in events, seminars, and competitions.",
            from: "Kings College of The Philippines",
            isLogoImage: false,
            logo: "Kings College of The Philippines",
            logoFontFamily: "'Times New Roman', Times, serif",
            url: "https://www.linkedin.com/in/jenuelganawed",
        },
        {
            name: "Responsive Web Design",
            description:
                "Learned the fundamentals of responsive web design and created simple responsive web pages to practice the concepts.",
            from: "SoloLearn",
            isLogoImage: true,
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/SoloLearn_logo.svg/1920px-SoloLearn_logo.svg.png?20210710155454",
            url: "https://www.sololearn.com/certificates/CT-JWRT8WON",
        },
        {
            name: "CSS",
            description:
                "Completed a course on CSS, where we learned the fundamentals of Cascading Style Sheets and created simple CSS programs to practice the concepts.",
            from: "SoloLearn",
            isLogoImage: true,
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/SoloLearn_logo.svg/1920px-SoloLearn_logo.svg.png?20210710155454",
            url: "https://www.sololearn.com/certificates/CT-56OTDVDU",
        },
        {
            name: "Java",
            description:
                "Completed a course on Java, where we learned the fundamentals of object-oriented programming and created simple Java programs to practice the concepts.",
            from: "SoloLearn",
            isLogoImage: true,
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/SoloLearn_logo.svg/1920px-SoloLearn_logo.svg.png?20210710155454",
            url: "https://www.sololearn.com/certificates/CT-LQQFCZUM",
        },
        {
            name: "PHP",
            description:
                "Completed a course on PHP, where we learned to develop dynamic and secure websites. The course covered essential topics such as database connectivity, security features, and creating dynamic web pages.",
            from: "SoloLearn",
            isLogoImage: true,
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/SoloLearn_logo.svg/1920px-SoloLearn_logo.svg.png?20210710155454",
            url: "https://www.sololearn.com/certificates/CT-3RLQL1CI",
        },
        {
            name: "SQL",
            description:
                "Completed a course on SQL, where we learned to create, manage, and manipulate databases. The course covered essential topics such as writing queries, joining tables, and optimizing database performance, equipping us with the skills to effectively handle and analyze data.",
            from: "SoloLearn",
            isLogoImage: true,
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/SoloLearn_logo.svg/1920px-SoloLearn_logo.svg.png?20210710155454",
            url: "https://www.sololearn.com/Certificate/CT-ZLZGMW2R/pdf",
        },
        {
            name: "JavaScript",
            description:
                "Completed a course on JavaScript, where we mastered the fundamentals of programming, including variables, functions, and event handling, as well as advanced concepts like asynchronous programming and DOM manipulation to build dynamic and interactive web applications.",
            from: "SoloLearn",
            isLogoImage: true,
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/SoloLearn_logo.svg/1920px-SoloLearn_logo.svg.png?20210710155454",
            url: "https://www.sololearn.com/Certificate/CT-LKXLDBLV/pdf",
        },
        {
            name: " jQuery",
            description:
                "Completed a course on jQuery, where we learned how to simplify JavaScript programming, manipulate HTML documents, handle events, create animations, and develop dynamic web applications with ease.",
            from: "SoloLearn",
            isLogoImage: true,
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/SoloLearn_logo.svg/1920px-SoloLearn_logo.svg.png?20210710155454",
            url: "https://www.sololearn.com/Certificate/CT-RXV9P2W0/pdf",
        },
        {
            name: "Smart Technopreneurship",
            description:
                "Successfully completed a course on Smart Technopreneurship, where we explored innovative business strategies, digital technologies, and entrepreneurial skills essential for thriving in today's tech-driven market.",
            from: "Tesda",
            isLogoImage: true,
            logo: "https://www.tesda.gov.ph/Content/images/logos/TesdaLogo.png",
            url: "https://github.com/BroJenuel/BroJenuel/raw/master/certificates/SMARTtechno101_Certificate%20of%20Completion.pdf",
        },
        {
            name: "Smart Android Apps Development For Beffiners",
            description:
                "Successfully completed a course on Smart Android Apps Development for Beginners, where we covered the fundamentals of Android programming, user interface design, and essential tools and techniques for creating functional and user-friendly mobile applications.",
            from: "Tesda",
            isLogoImage: true,
            logo: "https://www.tesda.gov.ph/Content/images/logos/TesdaLogo.png",
            url: "https://github.com/BroJenuel/BroJenuel/raw/master/certificates/SMART%20Android%20Mobile%20Apps%20Development%20for%20Beginners_Certificate%20of%20Completion.pdf",
        },
    ];

export default projects