// /src/data/experiences.js
export const experiences = [
    {
        id: 1,
        title: 'Software Developer',
        company: 'Vindico',
        period: 'Sep 2022 - Present',
        responsibilities: [
            'Developing Android and iOS applications using VueJS/Javascript, Vuex/Vue Router/Vuetify, Firebase/Firestore, Redis and Figma.',
            'Working closely with team to develop a progressive web application following client requirements and timeline.',
            'Collaborating with project managers, design teams, and senior developers throughout application lifecycle.',
            'Implementing registering and login mechanisms, conducting tests, and managing NoSQL databases.',
            'Strong UX/UI design skills and passionate about creating apps that are user-friendly and accessible.'
        ]
    },
    {
        id: 2,
        title: 'JavaScript, Web Development and Python Instructor',
        company: 'Code First Girls',
        period: 'Jun 2023 - Jan 2025',
        responsibilities: [
            'Delivered the CFG Coding Kickstarter Intro courses in Web Development, Python & Apps and JavaScript.',
            'Mentored over 100 students, providing personalized support and guidance.',
            'Designed hands-on coding exercises that improved student engagement and concept retention by 30%.',
            'Adapted teaching methods to accommodate diverse learning styles and technical backgrounds.'
        ]
    },
    {
        id: 3,
        title: 'Engineering Mentee',
        company: 'Cajigo',
        period: 'Aug 2022 - Dec 2022',
        responsibilities: [
            'Completed 16-week mentorship program focused on problem-solving and communication skills.',
            'Pair-programmed on Codewars challenges and algorithms.',
            'Developed leadership through industry networking sessions.'
        ]
    },
    {
        id: 4,
        title: 'Software Engineering Nanodegree',
        company: 'Code First Girls',
        period: 'May 2022 - Aug 2022',
        responsibilities: [
            '14-week bootcamp in Software Engineering. Achieved strong programming skills in Python and SQL.',
            'Boosted OOP skills. Gained an in-depth knowledge of SQL and database management techniques.',
            'Built a full-stack web application, using technologies such as Python, APIs, OAuth, HTML, CSS and Bootstrap.',
            'Implemented OAuth tokens, and endpoints with Flask.'
        ]
    }
];

// /src/data/skills.js
export const skills = {
    programming: [
        { id: 1, name: 'VueJS' },
        { id: 2, name: 'JavaScript' },
        { id: 3, name: 'HTML5' },
        { id: 4, name: 'CSS3' },
        { id: 5, name: 'Python' },
        { id: 6, name: 'Flask' },
        { id: 7, name: 'OOP' },
        { id: 8, name: 'MySQL' },
        { id: 9, name: 'REST APIs' },
        { id: 10, name: 'Three.js' },
        { id: 11, name: 'MongoDB' },
        { id: 12, name: 'Vuetify' }
    ],
    tools: [
        { id: 1, name: 'Firebase' },
        { id: 2, name: 'Figma' },
        { id: 3, name: 'GitHub' },
        { id: 4, name: 'Git' },
        { id: 5, name: 'Agile' },
        { id: 6, name: 'OAuth' },
        { id: 7, name: 'Vuex' },
        { id: 8, name: 'Vue Router' },
        { id: 9, name: 'Redis' }
    ]
};

// /src/data/projects.js
export const projects = [
    {
        id: 1,
        title: 'Recapify',
        subtitle: 'Spotify Recapping Web App',
        description: 'A full-stack web application using Python, APIs, OAuth, HTML, CSS and Bootstrap. Implementation of OAuth tokens and endpoints with Flask to access Spotify\'s API.',
        image: '/project1.jpg',
        tags: ['Python', 'Flask', 'OAuth', 'API'],
        link: 'https://github.com/recapify'
    },
    {
        id: 2,
        title: 'Villo-Design',
        subtitle: 'E-Commerce Platform',
        description: 'An e-commerce website built as part of a group project, using Python, Shopify Liquid, HTML and CSS. Worked on the wireframe using Figma and following Agile principles.',
        image: '/project2.jpg',
        tags: ['Python', 'Shopify Liquid', 'HTML/CSS', 'Agile'],
        link: 'https://github.com/Villo-Design'
    },
    {
        id: 3,
        title: 'Ocean Wave Simulator',
        subtitle: 'Three.js Interactive Experience',
        description: 'A 3D ocean wave simulation that showcases my passion for surfing and the beauty of nature. Built with Three.js and featuring realistic water physics.',
        image: '/project3.jpg',
        tags: ['Three.js', 'JavaScript', 'WebGL', 'Physics'],
        link: '#'
    }
];