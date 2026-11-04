import React from "react";
import { SkillsTableType } from "../lib/definitions";

// Phones: level label stacked above its skills.
// sm+: two columns with a fixed-width label column, so long labels
// ("Intermediate", "Machine Learning") never collide with the list.
const SkillsTable = ({ title, content }: SkillsTableType) => {
  return (
    <div className="mb-10 sm:mb-16">
      <p className="title">{title}</p>
      <dl className="grid grid-cols-1 sm:grid-cols-[11rem_1fr] gap-x-6 gap-y-1 sm:gap-y-2">
        {content.map((item) => (
          <React.Fragment key={item.level}>
            <dt className="description skill-level">{item.level}</dt>
            <dd className="skills mb-3 sm:mb-0">{item.items.join(", ")}</dd>
          </React.Fragment>
        ))}
      </dl>
    </div>
  );
};

export default SkillsTable;
