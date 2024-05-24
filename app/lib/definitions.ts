export interface AboutMeType {
    title: string;
    content: string;
}
export interface ExperienceType {
    title: string;
    content: Experience[];
}

export interface EducationType {
    title: string;
    content: | Education[];
}

export interface Experience {
    period: string;
    company: string;
    title: string;
    link: string;
    description: string;
    tech: string[];
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