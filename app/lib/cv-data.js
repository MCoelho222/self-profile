const cvData = {
    info: {
        email: 'mcoelho2011@hotmail.com',
        linkedin: 'https://www.linkedin.com/in/mcoelho222',
        github: 'https://github.com/MCoelho222',
        name: 'Marcelo Coelho',
        job: 'Software Engineer for AI Training Data',
        company: 'Scale AI',
        titles: ['Environmental Engineer', 'Fullstack Developer', 'AI Specialist'],
    },
    aboutMe: 
    "I am a fullstack web developer and environmental engineer with doctorate degree. \
    Currently, I work with python for training AI-based models for generating code for data analysis. \
    As a fullstack web developer I have worked with python, flask, typescript and react mainly. \
    As an engineer I have a long experience using python for data analysis and a strong mathematical and statistical knowledge.\
    To keep learning and improving my capabilities, I'm pursuing a postgraduate in artificial intelligence. \
    Besides, I am self managing, collaborative, communicative, open to learn, detail-oriented and determined.",
    hardSkills: [
        "Python", "Flask", "JavaScript", "TypeScript", "HTML", "CSS",
        "Vue.js", "Postgres", "Postgis", "Docker", "Statistics", "Next.js"
    ],
    softSkills:["Self managing", "Collaborative", "Communicative", "Detail-oriented", "Calm", "Organized", "Determined"],
    language: ["Portuguese (native)", "English (fluent)"],
    education:[
        {
            period: "2023 - now",
            institution: "Pontifical Catholic University of Minas Gerais (PUC Minas)",
            linkname: "PUC Minas",
            link: "https://www.pucminas.br/",
            title: "Artificial Intelligence Specialist",
            level: "Postgraduate",
            description: "The course has 16 modules: Programming for data science, Data visualization, \
            General statistics, Modeling and data preparation for machine learning, Integration and processing \
            for continuous data flow, Machine learning, Neural networks and deep learning, Information retrieval \
            on the web and social networks, Algorithms and genetic programming, Image analysis and computer vision, \
            DataOps and MLOps culture and practices, Recommendation systems, Statistical models, Special topics in machine \
            learning, Natural language processing, Humanities",
            tech: ["Python", "TensorFlow", "Pandas", "Numpy", "Scipy", "Scikit-learn",
            "Matplotlib", "Seaborn", "Statistcs", "Mathematics"],
        },
        {
            period: "2022 - 2023",
            institution: "Federal University of Paraná (UFPR)",
            linkname: "UFPR",
            link: "https://ufpr.br/",
            title: "Researcher",
            level: "Post doctoral",
            description:"Monitoring and analysis of water quality data under solar electric power plants installed \
            in reservoirs caused by river dams.",
            tech: ["Python", "Pandas", "Numpy", "Matplotlib", "Seaborn", "Statistcs", "Mathematics"],
        },
        {
            period: "2015 - 2019",
            institution: "Federal University of Paraná (UFPR)",
            linkname: "UFPR",
            link: "https://ufpr.br/",
            title: "PhD.",
            level: "Doctorate degree",
            description:"Uncertainty analysis in the statistical and stochastic context of water quality time series.",
            tech: ["Python", "Pandas", "Numpy", "Scipy", "Matplotlib", "Statistcs", "Mathematics", "QGIS"],
        },
        {
            period: "2011 - 2013",
            institution: "Federal University of Paraná (UFPR)",
            linkname: "UFPR",
            link: "https://ufpr.br/",
            title: "Master",
            level: "Master's degree",
            description:"Water quality monitoring strategy for the management of water resources in urban basins",
            tech: ["Python", "Pandas", "Numpy", "Scipy", "Matplotlib", "Statistcs", "Mathematics", "QGIS"],
        },
        {
            period: "2004 - 2010",
            institution: "Federal University of Paraná (UFPR)",
            linkname: "UFPR",
            link: "https://ufpr.br/",
            title: "Environmental engineer",
            level: "Graduate",
            description:"",
            tech: ["Excel", "Statistcs", "Mathematics", "QGIS", "Mathematical modeling"],
        },
    ],
    dev_experience: [
        {
            period: "2024 - now",
            company: "Scale AI",
            title: "Software engineer for AI training data",
            link: "https://scale.com/",
            description: "Analyze and improve the responses of an AI-based model to generate codes for database analysis.",
            tech: ["Python", "Pandas", "Numpy", "Scipy", "Matplotlib", "GenAI"],
        },
        {
            period: "2023 - 2024",
            company: "Pix Force",
            title: "Fullstack web developer",
            link: "https://pixforce.ai/",
            description: "Frontend and backend development with map-based application to monitor fire risk near to power lines.",
            tech: ["Python", "Flask", "React", "TypeScript", "Geoserver", "Microsoft Azure", "Scrum"],
        },
        {
            period: "2022 - 2023",
            company: "Conecta Nuvem",
            title: "Fullstack web developer",
            link: "https://conectanuvem.com/",
            description: "Frontend and backend development in google cloud environment.",
            tech: ["Python", "Flask", "Vue.js", "TypeScript", "Geoserver", "Microsoft Azure", "Scrum"],
        },
    ],
    certificates: [
        {
            year: "2024",
            title: "Complexity Calculation",
            load: "8 h",
            institution: "Programiz",
            link: "https://programiz.pro/certificates/detail/66F5134CB0D4",
        },
        {
            year: "2024",
            title: "Data Analysis with Python",
            load: "300 h",
            institution: "FreeCodeCamp",
            link: "https://www.freecodecamp.org/certification/mcoelho222/data-analysis-with-python-v7",
        },
        {
            year: "2024",
            title: "Learn Recursion with Python",
            load: "8 h",
            institution: "Programiz",
            link: "https://programiz.pro/certificates/detail/722D3582CA0F",
        },
        {
            year: "2022",
            title: "Fullstack developer",
            load: "900 h",
            institution: "LAB365 SESI/SENAI-SC",
            link: "https://programiz.pro/certificates/detail/722D3582CA0F",
        },
    ],
}

module.exports = {
    cvData,
};