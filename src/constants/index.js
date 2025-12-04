import { Capgemini, download } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    /*{
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },*/
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    /*{
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },*/
    /*{
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },*/
    /*{
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },*/
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    /*{
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },*/
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    /*{
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }*/
];

export const experiences = [
    {
        title: "Core Java Internship",
        company_name: "Internshala Training",
        icon: download,
        iconBg: "#accbe1",
        date: "May 2022 - Jun 2022",
        points: [
            "Developed Java applications following object-oriented programming principles, contributing to the implementation of key features and functionalities.",
            "Collaborated with team members to troubleshoot and debug code, ensuring the reliability and efficiency of software applications",
            "Participated in code reviews and provided constructive feedback to enhance the quality and maintainability of Java codebase",
            "Demonstrated proficiency in utilizing core Java libraries and frameworks to design and implement solutions for various programming challenges",
        ],
    },
    {
        title: "Web Development Internship",
        company_name: "Internshala Trainings",
        icon: download,
        iconBg: "#fbc3bc",
        date: "Jun 2022 - Jul 2022",
        points: [
            "Designed and developed responsive web applications using HTML, CSS, and JavaScript, focusing on user interface design and user experience optimization",
            "Implemented dynamic client-server communication using AJAX and RESTful APIs to fetch and manipulate data from backend services",
            "Utilized front-end frameworks such as React.js or Angular to create interactive and dynamic user interfaces, enhancing the overall user experience",
            "Worked closely with backend developers to integrate front-end components with server-side logic, ensuring seamless functionality and data consistency in web applications",
        ],
    },
    /*{
        title: "Web Developer",
        company_name: "Shopify",
        icon: shopify,
        iconBg: "#b7e4c7",
        date: "Jan 2022 - Jan 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },*/
    {
        title: "Analyst",
        company_name: "Capgemini",
        icon: Capgemini,
        iconBg: "#a2d2ff",
        date: "Oct 2024 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/ashvtosh',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/ashutosh-singh-b463b116b/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'PG-Finder',
        description: 'A comprehensive website crafted with HTML, CSS, PHP, Bootstrap, and DBMS integration, dedicated to simplifying the search for paying guest accommodations in diverse cities.',
        link: 'https://github.com/ashvtosh/PGLife',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Text Toolkit',
        description: 'A versatile collection of tools for text manipulation, offering functionalities such as case conversion, character counting, and basic text analysis.',
        link: 'https://github.com/ashvtosh/TextUtils',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Connect-4-Game',
        description: 'An engaging implementation of the classic Connect Four game, designed for two-player. Written in Java, it offers intuitive gameplay where players strive to align four tokens horizontally, vertically, or diagonally.',
        link: 'https://github.com/ashvtosh/Connect-4-Game',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'News Portal',
        description: 'A dynamic React-based news application that harnesses APIs to deliver real-time news updates. Seamlessly browse and explore diverse news categories, keeping users informed and engaged with the latest developments across the globe.',
        link: 'https://github.com/ashvtosh/newsapp',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'React ChatGPT',
        description: 'A sophisticated chatbot application developed with React and OpenAI API, offering conversational interactions akin to ChatGPT. Users can engage in natural conversations, seek information, and enjoy personalized responses.',
        link: 'https://github.com/ashvtosh/openai',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'Stock Market',
        description: 'A React-based stock market portal leveraging APIs to provide real-time updates and insights into the dynamic world of financial markets. Stay informed about stock prices, and track investments with this intuitive and feature-rich application.',
        link: 'https://github.com/ashvtosh/project_cryptoverse-main',
    }
];