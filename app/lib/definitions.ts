// Info
export interface Info {
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
    content: Info;
}

// About me
export interface AboutMeType {
    title?: string;
    content: string;
}

// Experience
export interface ExperienceType {
    title?: string;
    content: Experience[];
}

export interface Experience {
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
    content: | Education[];
}

export interface Education {
    period: string;
    institution: string;
    linkname: string;
    link: string;
    title: string;
    level: string;
    description:string;
    tech: string[];
}
