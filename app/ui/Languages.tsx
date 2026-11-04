import React from "react";
import { LanguagesType } from "../lib/definitions";

const Languages = ({ title, content }: LanguagesType) => {
  return (
    <div className="mb-10 sm:mb-16">
      <p className="title">{title}</p>
      {content.map((item) => (
        <p className="description mb-1" key={item.language}>
          {item.language}: {item.level}
        </p>
      ))}
    </div>
  );
};

export default Languages;
