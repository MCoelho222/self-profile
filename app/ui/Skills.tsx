import { SkillsType } from "../lib/definitions";

const Skills = ({ title, content }: SkillsType) => {
    return (
        <div>
            {title && <p className="title">{title}</p>}
            <div className="font-mono flex flex-row flex-wrap gap-2  mt-6">
                <span className="description">Tools:</span>
                <span className="skills">{content.join(', ')}</span>
            </div>
        </div>
    );
}

export default Skills;