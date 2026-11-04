import { SkillsType } from "../lib/definitions";

// Tech stack rendered as small tag chips
const Skills = ({ title, content }: SkillsType) => {
  return (
    <div>
      {title && <p className="title">{title}</p>}
      <ul className="flex flex-wrap gap-2 mt-4" aria-label="Technologies">
        {content.map((tech) => (
          <li className="tech-chip" key={tech}>
            {tech}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
