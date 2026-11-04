import React from "react";
import { SkillsTableType } from "../lib/definitions";

const SkillsTable = ({ title, content }: SkillsTableType) => {
  return (
    <div className="mb-10 sm:mb-16">
      <p className="title">{title}</p>
      {content.map((item) => {
        return (
          <div className="flex flex-row w-full mb-2" key={item.level}>
            <div className="description w-1/4 sm:w-1/6">
              <p>{item.level}</p>
            </div>
            <div className="w-3/4 sm:w-5/6">
              <p className="skills">{item.items.join(", ")}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SkillsTable;
