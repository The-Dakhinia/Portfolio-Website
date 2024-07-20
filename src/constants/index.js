import {
    mobile,
    backend,
    creator,
    web,
    java,
    c,
    python,
    dart,
    flutter,
    androidstudio,
    reactnative,
    html,
    css,
    javascript,
    kotlin,
    tailwind,
    threejs,
    git,
    starbucks,
    tesla,
    portfolio,
    infiscience,
    mealsbridge,
    vuforia,

} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Mobile App Developer",
        icon: web,
    },
    {
        title: "Web Developer",
        icon: mobile,
    },
    {
        title: "AR-VR Developer",
        icon: backend,
    },
    {
        title: "DSA",
        icon: creator,
    },
];

const technologies = [
    {
        name: "Java",
        icon: java,
    },
    {
        name: "C",
        icon: c,
    },
    {
        name: "Python",
        icon: python,
    },
    {
        name: "Dart",
        icon: dart,
    },
    {
        name: "Flutter",
        icon: flutter,
    },
    {
        name: "Android Studio",
        icon: androidstudio,
    },
    {
        name: "React Native",
        icon: reactnative,
    },
    {
        name: "Vuforia",
        icon: vuforia,
    },

    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "git",
        icon: git,
    },
];

const experiences = [
    {
        title: "Mobile App  Developer",
        company_name: "Axxin Diagnostics",
        icon: starbucks,
        iconBg: "#383E56",
        date: "March 2023 - August 2023",
        points: [
            "Developed a cross-platform application named NIROGH from scratch using Flutter framework and Dart.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Implemented API calls for data fetching and storage within the app.",
            "Utilized state management techniques, specifically Provider, to manage application state effectively."
        ],
    },
    {
        title: "Mobile App Developer",
        company_name: "The Yellow Wheels",
        icon: tesla,
        iconBg: "#E6DEDD",
        date: "May 2024 - Jul 2022",
        points: [
            "Assisted in the development of mobile applications by suggesting innovative ideas and developing UI prototypes.",
            "Worked closely with senior developers to understand and implement app development best practices.",
            "Completed a 2-month, 40-hour per week paid internship, gaining hands-on experience in app development and UI/UX design."
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "Swastik is a very good hearted and talented boy I have  ever known. His skill and exceptional teamwork gives us a spirit how to dedication for our work.His artistic work resonates deeply with its audience. Its a great experience to work with you. Keep growing and exploring.",
        name: "Sai Sangita Adhek",
        designation: "Student",
        company: "SU, BBSR",
        image: "https://avatars.githubusercontent.com/u/130208503?v=4",
    },
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as your portfolio, but Swastik proved me wrong. Keep it up brother.",
        name: "Priyanshu Malick",
        designation: "Student",
        company: "SU, BBSR",
        image: "https://avatars.githubusercontent.com/u/83911685?v=4",
    },
];

const projects = [
    {
        name: "Portfolio Website",
        description:
            "I have developed a portfolio website using react, three.js and tailwind css. This project showcases my ability to create visually appealing and responsive web interfaces.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "three js",
                color: "green-text-gradient",
            },
            {
                name: "tailwind css",
                color: "pink-text-gradient",
            },
        ],
        image: portfolio,
        source_code_link: "https://github.com/The-Dakhinia/Portfolio-Website",
    },
    {
        name: "InfiScience",
        description:
            "Developed an AR/VR educational platform using Flutter-Unity widget and Vuforia, creating interactive learning experiences with personalized paths to help students explore understand science concepts using AR/VR models.",
        tags: [
            {
                name: "flutter",
                color: "blue-text-gradient",
            },
            {
                name: "unity",
                color: "green-text-gradient",
            },
            {
                name: "vuforia",
                color: "pink-text-gradient",
            },
        ],
        image: infiscience,
        source_code_link: "https://drive.google.com/drive/folders/1_-zf-efyJXAYaa5rft8tCZeaENefeItY?usp=sharing",
    },
    {
        name: "Meals Bridge",
        description:
            "Elevating the impact, our integrated tech solution—a user-friendly mobile app, a dynamic web platform, and an advanced machine learning model—ensures surplus food finds its way to those in need. Seamlessly connecting donors with recipients, optimizing logistics, and forecasting demand patterns for efficient distribution.",
        tags: [
            {
                name: "flutter",
                color: "blue-text-gradient",
            },
        ],
        image: mealsbridge,
        source_code_link: "https://github.com/GENISIS-05/Meals-Bridge-Frontend",
    },
];

export { services, technologies, experiences, testimonials, projects };
