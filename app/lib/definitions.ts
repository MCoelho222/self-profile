// Info
export interface IInfo {
    name: string;
    email: string;
    linkedin?: string;
    github?: string;
    job: string;
    company: string;
    titles: string[];
}

export interface InfoType {
    title?: string;
    content: IInfo;
}

// About me
export interface AboutMeType {
    title?: string;
    content: string;
}

// Experience
export interface ExperienceType {
    title?: string;
    content: IExperience[];
}

export interface IExperience {
    period: string;
    company?: string;
    title: string;
    link?: string;
    summary?: string;
    description: string[];
    tech: string[];
}

// Education
export interface EducationType {
    title?: string;
    content: | IEducation[];
}

export interface IEducation {
    period: string;
    institution: string;
    linkname: string;
    link: string;
    title: string;
    level: string;
    description:string;
}

// Certificates
export interface CertificatesType {
    title: string;
    content: ICertificates[];
}

export interface ICertificates {
    year: string;
    title: string;
    load: string;
    institution: string;
    link: string;
}

//Skills
export interface SkillsType {
    title?: string;
    content: string[];
}

// Skills table
export interface ISkillLevel {
    level: string;
    items: string[];
}

export interface SkillsTableType {
    title?: string;
    content: ISkillLevel[];
}

// Languages
export interface ILanguage {
    language: string;
    code: string;
    level: string;
    proficiency: number; // 1–5
}

export interface LanguagesType {
    title?: string;
    content: ILanguage[];
}

// Publications
export interface IPublication {
    authors: string;
    title: string;
    venue: string;
    link: string;
}

export interface PublicationsType {
    title?: string;
    content: IPublication[];
}
