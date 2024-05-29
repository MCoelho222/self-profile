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
    company: string;
    title: string;
    link: string;
    description: string;
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
    tech: string[];
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
