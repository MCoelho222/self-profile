// Source of truth: englishcv.pdf (last updated October 27, 2026)
const cvData = {
    labels: {
        meta: {
            title: "Marcelo Coelho — CV",
            description: "Environmental Engineer, PhD & Fullstack Developer: data science, statistics, and software engineering.",
        },
        sections: {
            aboutMe: "About me",
            education: "Education",
            skills: "Skills",
            experience: "Experience",
            certifications: "Certifications",
            languages: "Languages",
            publications: "Publications",
        },
        viewCertificate: "View certificate",
        technologies: "Technologies",
        proficiency: "proficiency",
        outOf: "out of",
        switchLanguage: "Language",
    },
    info: {
        email: 'mcoelho2011@hotmail.com',
        linkedin: 'https://www.linkedin.com/in/mcoelho222/',
        github: 'https://github.com/MCoelho222',
        name: 'Marcelo Coelho',
        job: 'Independent AI Training & Evaluation Specialist',
        company: 'Freelance',
        titles: ['Environmental Engineer, PhD & Fullstack Developer'],
    },
    aboutMe:
    "Environmental Engineer and aspiring Environmental Data Scientist with a PhD focused on uncertainty \
analysis in water quality time series. My research experience includes statistical analysis, variability \
and trend detection, monitoring strategies, and the assessment of data representativeness in environmental \
monitoring. I also know environmental data from its source: from my undergraduate studies through my postdoc, \
I planned the monitoring campaigns, collected samples at every station, and performed the chemical analyses in the lab \
myself, giving me first-hand insight into how sampling and measurement shape data quality and uncertainty. \
I have extensive experience using Python for scientific programming and data analysis, \
complemented by professional experience in software engineering, backend and frontend development, \
automated testing, and AI model training and evaluation. My goal is to apply statistical methods and \
Python-based data science to environmental challenges, developing reliable analytical approaches to support \
environmental monitoring, data interpretation, and evidence-based decision-making.",
    skills: [
        {
            level: "Advanced",
            items: ["Python", "Flask", "Docker", "Data Analysis", "Statistics", "AI Training Data Evaluation and Curation"],
        },
        {
            level: "Intermediate",
            items: ["TypeScript", "FastAPI", "React", "Next.js", "Vue.js", "CI/CD", "Machine Learning", "AI Agents", "Geospatial Data"],
        },
        {
            level: "AI Tools",
            items: ["Claude", "GitHub Copilot", "Codex"],
        },
        {
            level: "Machine Learning",
            items: ["PyTorch", "TensorFlow", "MLflow", "DagsHub"],
        },
        {
            level: "Other",
            items: ["RabbitMQ"],
        },
    ],
    languages: [
        { language: "Portuguese", code: "PT", level: "Native", proficiency: 5 },
        { language: "English", code: "EN", level: "Advanced professional proficiency", proficiency: 4 },
    ],
    education: [
        {
            period: "2024 - 2025",
            institution: "Pontifical Catholic University of Minas Gerais",
            linkname: "PUC Minas",
            link: "https://www.pucminas.br/",
            title: "Postgraduate Degree in Artificial Intelligence and Machine Learning",
            level: "Postgraduate",
            description: "360-hour program covering machine learning, deep learning, NLP, computer vision, statistical modeling, and MLOps."
        },
        {
            period: "2021 - 2023",
            institution: "Federal University of Paraná",
            linkname: "UFPR",
            link: "https://ufpr.br/",
            title: "Postdoctoral Research in water quality monitoring using floating photovoltaic systems in reservoirs",
            level: "Postdoctoral",
            description: "Statistical analysis of water quality data under floating solar plants using Python to detect trends, seasonality, and anomalies."
        },
        {
            period: "2015 - 2019",
            institution: "Federal University of Paraná",
            linkname: "UFPR",
            link: "https://ufpr.br/",
            title: "PhD in uncertainty analysis in the use of water quality time series",
            level: "Doctorate degree",
            description: "Methods to quantify and reduce uncertainty in water quality time series, using Python and Monte Carlo simulation.",
        },
        {
            period: "2011 - 2013",
            institution: "Federal University of Paraná",
            linkname: "UFPR",
            link: "https://ufpr.br/",
            title: "Master's Degree in water quality monitoring strategies for water resources management in urban watersheds",
            level: "Master's degree",
            description: "Design and assessment of water quality monitoring strategies for urban basins, using QGIS and Excel."
        },
        {
            period: "2004 - 2010",
            institution: "Federal University of Paraná",
            linkname: "UFPR",
            link: "https://ufpr.br/",
            title: "Bachelor's Degree in Environmental Engineering",
            level: "Graduate",
            description: "Environmental sciences, engineering principles, and sustainable practices."
        },
    ],
    experience: [
        {
            period: "2024 - Present",
            title: "Independent AI Training & Evaluation Specialist",
            summary: "Freelance contractor across multiple platforms and projects: Outlier (2024–Present, occasional contributions), \
Revelo (2025–Present), Alignerr (2026), and Fleet AI / Fleet Fellowship (2026).",
            description: [
                "Design complex prompts and realistic software engineering tasks to evaluate AI agents on production-level coding problems.",
                "Analyze, review, and refactor AI-generated Python, TypeScript, and JavaScript code, assessing correctness, code quality, and adherence to requirements.",
                "Use Claude Code and Docker containers to generate, execute, and validate Python solutions in controlled environments.",
                "Evaluate AI-generated solutions and agent performance, identifying errors and providing structured, actionable feedback to improve output quality.",
                "Served as a Squad Leader at Outlier, contributing to code review processes and quality improvement.",
            ],
            tech: ["Python", "TypeScript", "JavaScript", "Claude Code", "Docker"],
        },
        {
            period: "2025 - 2026",
            company: "Ecoledger",
            title: "Full Stack Developer",
            summary: "Volunteer. Startup project aiming to qualify for a Y Combinator competition.",
            description: [
                "Development of a carbon credit market platform.",
                "React (TypeScript) and FastAPI (Python) frameworks.",
                "Integration of the Mundi.ai application to improve geospatial data visualization.",
                "Use of PostGIS for georeferenced data.",
            ],
            tech: ["React", "TypeScript", "FastAPI", "Python", "PostGIS", "Mundi.ai"],
        },
        {
            period: "2023 - 2024",
            company: "Pix Force",
            title: "Full Stack Developer",
            link: "https://pixforce.com/pt-br",
            summary: "Full-time employee. Brazilian company developing AI-based solutions.",
            description: [
                "Planning and development of an application for monitoring wildfire risk near power transmission lines.",
                "Frontend development using React and TypeScript.",
                "Development of Python and Flask microservices in an Azure environment.",
                "PostgreSQL with PostGIS for managing geospatial datasets.",
                "Use of RabbitMQ (similar to Kafka) for efficient communication between services.",
                "CI/CD pipelines and automated testing.",
                "Use of SCRUM as the development methodology.",
            ],
            tech: ["Python", "Flask", "React", "TypeScript", "Microsoft Azure", "PostgreSQL", "PostGIS", "RabbitMQ", "CI/CD", "Scrum"],
        },
        {
            period: "2022 - 2023",
            company: "Conecta Nuvem",
            title: "Full Stack Developer",
            link: "https://conectanuvem.com.br/",
            description: [
                "Maintenance of backend and frontend applications for access control integrated with Google Workspace, deployed on GCP.",
                "Use of SCRUM as the development methodology.",
            ],
            tech: ["Google Workspace", "GCP", "Scrum"],
        },
        {
            period: "2013 - 2021",
            title: "Environmental Engineering Professor",
            summary: "Teaching in Civil and Environmental Engineering programs at UFPR and UniEnsino.",
            description: [],
            tech: [],
        },
    ],
    certificates: [
        {
            year: "2026",
            title: "AI Agents and Agentic AI with Python & Generative AI",
            load: "",
            institution: "Coursera",
            link: "https://coursera.org/share/a939027f7822d07a446e95a5b6b8230c",
        },
        {
            year: "2025",
            title: "Artificial Intelligence and Machine Learning",
            load: "360 h",
            institution: "PUC Minas",
            link: "https://drive.google.com/file/d/1O9PCfPWNZECLgrp5Gjgr8exK1pPeHrZv/view?usp=sharing",
        },
        {
            year: "2024",
            title: "Complexity Analysis",
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
            title: "Full Stack Developer - VueJS and Flask",
            load: "900 h",
            institution: "LAB365 SESI/SENAI-SC",
            link: "https://sgn.sesisenai.org.br/arquivos/certificacao/02/77/32/02773294147e9ead7cbf21acd50d4ea7/pfx5715434975941193567sfx.pdf",
        },
        {
            year: "2022",
            title: "Scrum Foundation Professional Certification - SFPC™",
            load: "",
            institution: "CertiProf",
            link: "https://www.credly.com/badges/6664235f-824f-4919-9be0-68d54cc222db",
        },
    ],
    publications: [
        {
            authors: "Almeida, C. de C.; Kissula, J. C. J.; Carvalho, J. M.; Ferreira, D. M.; Coelho, M.; Detzel, D. H. M.; Fernandes, C. V. S.",
            title: "A socio-hydrology approach to domestic organic pollutant load removal: duration curve analysis for enhancing water quality management",
            venue: "RBRH – Brazilian Journal of Water Resources, v.30",
            year: "2025",
            link: "https://doi.org/10.1590/2318-0331.302520250091",
        },
        {
            authors: "Rigotti, J. A.; Coelho, M.; Bleninger, T. B.; Fernandes, C. V. S.; Mannich, M.; Knapik, H. G.; Zanona, V. R. C. M.; Goulart, C. B.; Souza, D. C.; Prandini, M. K.",
            title: "FotoÁgua: efeitos de sistemas fotovoltaicos flutuantes sobre processos de transferência na interface ar-água e alterações para qualidade de água",
            venue: "Book chapter in Inovação Colaborativa: Conectando Universidades e Empresas para o Futuro Sustentável (CRV), p. 419–460",
            year: "2025",
            link: "https://drive.google.com/file/d/1t1YCCglWupKZq6RySZnXp7V3Nw0dSm3h/view",
        },
        {
            authors: "Ferreira, D. M.; Coelho, M.; Fernandes, C. V. S.; Kaviski, E.; Detzel, D. H. M.",
            title: "Deterministic and Stochastic Principles to Convert Discrete Water Quality Data into Continuous Time Series",
            venue: "Water Resources Management, v.35",
            year: "2021",
            link: "https://link.springer.com/article/10.1007/s11269-021-02908-1",
        },
        {
            authors: "Coelho, M.; Fernandes, C. V. S.; Detzel, D. H. M.",
            title: "Uncertainty analysis in the detection of trends, cycles, and shifts in water resources time series",
            venue: "Water Resources Management, v.27, p.1–16",
            year: "2019",
            link: "https://link.springer.com/article/10.1007/s11269-019-02210-1",
        },
        {
            authors: "Coelho, M.; Fernandes, C. V. S.; Detzel, D. H. M.; Mannich, M.",
            title: "Statistical validity of water quality time series in urban watersheds",
            venue: "RBRH – Brazilian Journal of Water Resources, v.22, e51",
            year: "2017",
            link: "https://www.scielo.br/j/rbrh/a/KyMFpKdRKYHvzh8pjQhvGCM/?lang=en",
        },
        {
            authors: "Coelho, M.; Kishi, R. T.",
            title: "Caracterização de Cargas Orgânicas nos Rios Barigui, Belém e Atuba na Bacia Hidrográfica do Alto Iguaçu",
            venue: "XIX Simpósio Brasileiro de Recursos Hídricos",
            year: "2011",
            link: "https://files.abrhidro.org.br/Sumarios/81/3c9fafa856f87bb83b0cd075e962f6dc_4d50bce5e8ea3001ccb58893fe364e82.pdf",
        },
    ],
}

module.exports = {
    cvData,
};
