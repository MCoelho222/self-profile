export interface AboutMeType {
    title: string;
    content: string;
}
export interface ExpSectionType {
    title: string;
    content: Experience[];
}

export interface EduSectionType {
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
    title: string;
    level: string;
    description:string;
    tech: string[];
}