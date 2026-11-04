// Versão em português de cv-data.js (mesma estrutura).
// Títulos de publicações são mantidos no idioma original.
const cvData = {
    labels: {
        meta: {
            title: "Marcelo Coelho — Currículo",
            description: "Engenheiro Ambiental, PhD & Desenvolvedor Fullstack: ciência de dados, estatística e engenharia de software.",
        },
        sections: {
            aboutMe: "Sobre mim",
            education: "Formação",
            skills: "Habilidades",
            experience: "Experiência",
            certifications: "Certificações",
            languages: "Idiomas",
            publications: "Publicações",
        },
        viewCertificate: "Ver certificado",
        technologies: "Tecnologias",
        proficiency: "proficiência",
        outOf: "de",
        switchLanguage: "Idioma",
        themeToLight: "Mudar para o modo claro",
        themeToDark: "Mudar para o modo escuro",
    },
    info: {
        email: 'mcoelho2011@hotmail.com',
        linkedin: 'https://www.linkedin.com/in/mcoelho222/',
        github: 'https://github.com/MCoelho222',
        name: 'Marcelo Coelho',
        job: 'Especialista Independente em Treinamento e Avaliação de IA',
        company: 'Freelancer',
        titles: ['Engenheiro Ambiental, PhD & Desenvolvedor Fullstack'],
    },
    aboutMe:
    "Engenheiro Ambiental com doutorado em análise de incertezas em séries \
temporais de qualidade da água. Minha pesquisa abrange análise estatística, detecção de tendências e variabilidade, \
planejamento de monitoramento e representatividade de dados. Também conheço os dados ambientais desde a origem: da \
graduação ao pós-doutorado, planejei as campanhas de monitoramento, coletei as amostras em campo e realizei pessoalmente \
as análises químicas em laboratório. Somo a isso ampla experiência com Python e atuação profissional em engenharia de \
software e no treinamento e avaliação de modelos de IA. Meu objetivo é aplicar estatística e ciência de dados a \
desafios ambientais, apoiando um monitoramento confiável e decisões baseadas em evidências.",
    skills: [
        {
            level: "Avançado",
            items: ["Python", "Flask", "Docker", "Análise de Dados", "Estatística", "Avaliação e Curadoria de Dados de Treinamento de IA"],
        },
        {
            level: "Intermediário",
            items: ["TypeScript", "FastAPI", "React", "Next.js", "Vue.js", "CI/CD", "Machine Learning", "Agentes de IA", "Dados Geoespaciais"],
        },
        {
            level: "Ferramentas de IA",
            items: ["Claude", "GitHub Copilot", "Codex"],
        },
        {
            level: "Machine Learning",
            items: ["PyTorch", "TensorFlow", "MLflow", "DagsHub"],
        },
        {
            level: "Outros",
            items: ["RabbitMQ"],
        },
    ],
    languages: [
        { language: "Português", code: "PT", level: "Nativo", proficiency: 5 },
        { language: "Inglês", code: "EN", level: "Proficiência profissional avançada", proficiency: 4 },
    ],
    education: [
        {
            period: "2024 - 2025",
            institution: "Pontifícia Universidade Católica de Minas Gerais",
            linkname: "PUC Minas",
            link: "https://www.pucminas.br/",
            title: "Pós-graduação em Inteligência Artificial e Aprendizado de Máquina",
            level: "Pós-graduação",
            description: "Programa de 360 horas abrangendo machine learning, deep learning, PLN, visão computacional, modelagem estatística e MLOps."
        },
        {
            period: "2021 - 2023",
            institution: "Universidade Federal do Paraná",
            linkname: "UFPR",
            link: "https://ufpr.br/",
            title: "Pós-doutorado em monitoramento da qualidade da água com sistemas fotovoltaicos flutuantes em reservatórios",
            level: "Pós-doutorado",
            description: "Análise estatística de dados de qualidade da água sob usinas solares flutuantes, com Python, para detectar tendências, sazonalidade e anomalias."
        },
        {
            period: "2015 - 2019",
            institution: "Universidade Federal do Paraná",
            linkname: "UFPR",
            link: "https://ufpr.br/",
            title: "Doutorado em análise de incertezas no uso de séries temporais de qualidade da água",
            level: "Doutorado",
            description: "Métodos para quantificar e reduzir incertezas em séries temporais de qualidade da água, com Python e simulação de Monte Carlo.",
        },
        {
            period: "2011 - 2013",
            institution: "Universidade Federal do Paraná",
            linkname: "UFPR",
            link: "https://ufpr.br/",
            title: "Mestrado em estratégias de monitoramento da qualidade da água para a gestão de recursos hídricos em bacias urbanas",
            level: "Mestrado",
            description: "Planejamento e avaliação de estratégias de monitoramento da qualidade da água em bacias urbanas, com QGIS e Excel."
        },
        {
            period: "2004 - 2010",
            institution: "Universidade Federal do Paraná",
            linkname: "UFPR",
            link: "https://ufpr.br/",
            title: "Graduação em Engenharia Ambiental",
            level: "Graduação",
            description: "Ciências ambientais, princípios de engenharia e práticas sustentáveis."
        },
    ],
    experience: [
        {
            period: "2024 - Atual",
            title: "Especialista Independente em Treinamento e Avaliação de IA",
            summary: "Prestador de serviços freelancer em diversas plataformas e projetos: Outlier (2024–atual, contribuições ocasionais), \
Revelo (2025–atual), Alignerr (2026) e Fleet AI / Fleet Fellowship (2026).",
            description: [
                "Elaboração de prompts complexos e tarefas realistas de engenharia de software para avaliar agentes de IA em problemas de programação de nível de produção.",
                "Análise, revisão e refatoração de código Python, TypeScript e JavaScript gerado por IA, avaliando correção, qualidade do código e aderência aos requisitos.",
                "Uso do Claude Code e de contêineres Docker para gerar, executar e validar soluções em Python em ambientes controlados.",
                "Avaliação de soluções geradas por IA e do desempenho de agentes, identificando erros e fornecendo feedback estruturado e acionável para melhorar a qualidade dos resultados.",
                "Atuação como Squad Leader na Outlier, contribuindo para processos de revisão de código e melhoria de qualidade.",
            ],
            tech: ["Python", "TypeScript", "JavaScript", "Claude Code", "Docker"],
        },
        {
            period: "2025 - 2026",
            company: "Ecoledger",
            title: "Desenvolvedor Full Stack",
            summary: "Voluntário. Projeto de startup com o objetivo de se qualificar para uma competição da Y Combinator.",
            description: [
                "Desenvolvimento de uma plataforma de mercado de créditos de carbono.",
                "Frameworks React (TypeScript) e FastAPI (Python).",
                "Integração da aplicação Mundi.ai para aprimorar a visualização de dados geoespaciais.",
                "Uso de PostGIS para dados georreferenciados.",
            ],
            tech: ["React", "TypeScript", "FastAPI", "Python", "PostGIS", "Mundi.ai"],
        },
        {
            period: "2023 - 2024",
            company: "Pix Force",
            title: "Desenvolvedor Full Stack",
            link: "https://pixforce.com/pt-br",
            summary: "Funcionário em tempo integral. Empresa brasileira que desenvolve soluções baseadas em IA.",
            description: [
                "Planejamento e desenvolvimento de uma aplicação para monitoramento do risco de incêndios próximos a linhas de transmissão de energia.",
                "Desenvolvimento frontend com React e TypeScript.",
                "Desenvolvimento de microsserviços em Python e Flask em ambiente Azure.",
                "PostgreSQL com PostGIS para gerenciamento de dados geoespaciais.",
                "Uso de RabbitMQ (semelhante ao Kafka) para comunicação eficiente entre serviços.",
                "Pipelines de CI/CD e testes automatizados.",
                "Uso de SCRUM como metodologia de desenvolvimento.",
            ],
            tech: ["Python", "Flask", "React", "TypeScript", "Microsoft Azure", "PostgreSQL", "PostGIS", "RabbitMQ", "CI/CD", "Scrum"],
        },
        {
            period: "2022 - 2023",
            company: "Conecta Nuvem",
            title: "Desenvolvedor Full Stack",
            link: "https://conectanuvem.com.br/",
            description: [
                "Manutenção de aplicações backend e frontend de controle de acesso integradas ao Google Workspace, implantadas no GCP.",
                "Uso de SCRUM como metodologia de desenvolvimento.",
            ],
            tech: ["Google Workspace", "GCP", "Scrum"],
        },
        {
            period: "2013 - 2021",
            title: "Professor de Engenharia Ambiental",
            summary: "Docência nos cursos de Engenharia Civil e Engenharia Ambiental da UFPR e da UniEnsino.",
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
            title: "Inteligência Artificial e Aprendizado de Máquina",
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
            title: "Desenvolvedor Full Stack - VueJS e Flask",
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
    // Títulos das publicações mantidos no idioma original
    publications: [
        {
            authors: "Almeida, C. de C.; Kissula, J. C. J.; Carvalho, J. M.; Ferreira, D. M.; Coelho, M.; Detzel, D. H. M.; Fernandes, C. V. S.",
            title: "A socio-hydrology approach to domestic organic pollutant load removal: duration curve analysis for enhancing water quality management",
            venue: "RBRH – Revista Brasileira de Recursos Hídricos, v.30",
            year: "2025",
            link: "https://doi.org/10.1590/2318-0331.302520250091",
        },
        {
            authors: "Rigotti, J. A.; Coelho, M.; Bleninger, T. B.; Fernandes, C. V. S.; Mannich, M.; Knapik, H. G.; Zanona, V. R. C. M.; Goulart, C. B.; Souza, D. C.; Prandini, M. K.",
            title: "FotoÁgua: efeitos de sistemas fotovoltaicos flutuantes sobre processos de transferência na interface ar-água e alterações para qualidade de água",
            venue: "Capítulo de livro em Inovação Colaborativa: Conectando Universidades e Empresas para o Futuro Sustentável (CRV), p. 419–460",
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
            venue: "RBRH – Revista Brasileira de Recursos Hídricos, v.22, e51",
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
