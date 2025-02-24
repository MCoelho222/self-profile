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
    welcome: "Olá, seja muito bem-vindo ao meu perfil! 🚀 Aqui, você encontrará os marcos mais importantes da minha trajetória profissional. \
    Sou uma pessoa determinada, focada e apaixonada por desafios, sempre buscando aprender e evoluir. \
    Tenho um grande interesse por números, estatísticas e gráficos, e adoro colaborar com equipes motivadas. \
    Minha mentalidade positiva me impulsiona a encarar qualquer obstáculo de frente. Além disso, trabalhar remotamente é algo que me motiva ainda mais! \
    Atualmente, meu objetivo é atuar com modelos de IA, análise de dados e desenvolvimento web, unindo tecnologia e inovação para criar soluções impactantes. Vamos trocar ideias?",
    aboutMe: 
    "Sou desenvolvedor de software especializado em Python, JavaScript e TypeScript. Atualmente, trabalho em uma empresa internacional \
    com treinamento de modelos baseados em IA para geração de códigos diversos na linguagem Python. Recentemente, concluí uma pós-graduação \
    na qual pude me aprofundar neste incrível universo da inteligência artificial, utilizando bibliotecas como scikit-learn, TensorFlow, PyTorch\
     e Pandas.\n\n Um grande diferencial em minhas habilidades como desenvolvedor é minha formação em engenharia ambiental, incluindo um doutorado \
     focado em análise estatística de dados ambientais, utilizando Python. Essa base acadêmica me proporcionou sólidos conhecimentos estatísticos, \
     matemáticos e de programação de computadores, assim como excelente raciocínio lógico e visão crítica dos problemas.\n\n Desde minha transição \
     de carreira, em 2021, trabalhei em projetos diversificados na área de tecnologia, utilizando principalmente Python e Flask para o desenvolvimento \
     de REST APIs, PostgreSQL/PostGIS para banco de dados, containers Docker em um sistema distribuído em microserviços, RabbitMQ para sistemas baseados \
     em eventos, GeoServer para aplicações em mapas e JavaScript/TypeScript com React e Vue.js no desenvolvimento de interfaces do usuário.\n\n Adquiri \
     experiência considerável com testes unitários e pipelines de CI/CD em ambientes Google Cloud e Microsoft Azure, assim como com metodologias ágeis como \
     o Scrum. Graças à minha base em engenharia e análise estatística de dados, sempre pude contribuir com revisões refinadas de código quanto às regras \
     matemáticas e ao raciocínio lógico, garantindo entregas de alta performance e sem erros.\n\n Outras habilidades e características pessoais: inglês \
     avançado (leitura, escrita e fala), autogerenciável, organizado, colaborativo, comunicativo, detalhista e sempre em busca de aprimorar meus conhecimentos.",
    hardSkills: [
        "Python", "Machine Learning", "Deep Learinng", "Data Analysis", "Docker", "SQL", "NoSQL", "NLP", "React", "TypeScript" 
    ],
    softSkills:["Self managed", "collaborative", "communicative", "detail-oriented", "determined", "SCRUM"],
    language: ["Portuguese (Brazil, native)", "English (proficient)"],
    education:[
        {
            period: "2023 - 2025",
            institution: "Pontifical Catholic University of Minas Gerais (PUC Minas)",
            linkname: "PUC Minas",
            link: "https://www.pucminas.br/",
            title: "Artificial Intelligence Specialist",
            level: "Postgraduate",
            description: "360 h with 15 modules: Programming for data science, Data visualization, \
            General statistics, Modeling and data preparation for machine learning, Integration and processing \
            for continuous data flow, Machine learning, Neural networks and deep learning, Information retrieval \
            on the web and social networks, Algorithms and genetic programming, Image analysis and computer vision, \
            DataOps and MLOps culture and practices, Recommendation systems, Statistical models, Special topics in machine \
            learning, Natural language processing.",
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
    experience: [
        {
            period: "2024 - Now",
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
        {
            period: "2013 - 2021",
            company: "UFPR and UniEnsino",
            title: "Professor",
            link: "https://ambiental.ufpr.br/graduacao/",
            description: "Professor in higher education of environmental engineering.",
            tech: [],
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