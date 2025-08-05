import React from "react";
import { EducationType } from "../lib/definitions";

const Education = ({ title, content }: EducationType) => {
  return (
    <div className="mb-10 sm:mb-16">
      <p className="title">{title}</p>
      {content.map((item) => {
        return (
          <div className="flex flex-row w-full mb-4" key={item.title}>
            <div className="description w-1/6">
              <p>{item.period}</p>
            </div>
            <div className="w-5/6">
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
