import React from "react";
import { EducationType } from "../lib/definitions";

const Education = ({ title, content }: EducationType) => {
  return (
    <div className="mb-10 sm:mb-16">
      <p className="title">{title}</p>
      {content.map((item) => {
        return (
          <div className="flex flex-row w-full gap-4 mb-4" key={item.title}>
            <div className="period">
              <p>{item.period}</p>
            </div>
            <div className="flex-1 min-w-0">
              <p className="subtitle mb-1">{item.title}</p>
              <p className="description">{item.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Education;
