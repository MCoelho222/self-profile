import React from 'react';
import { GrGithub } from "react-icons/gr";
import { InfoType } from "../lib/definitions";
import { BsLinkedin } from "react-icons/bs";

const Info = ({ title, content }: InfoType) => {
  return (
    <div>
      <div className="flex flex-col items-center mb-6">
        <p className="info-title">{content.name}</p>
        {content.titles.map((item) => {
          return <p className="info-subtitle" key={item}>{item}</p>;
        })}
      </div>
      <p className="info-subtitle mb-8 text-center">{content.email}</p>
      <div className="text-slate-400 text-3xl flex flex-row gap-3 justify-center mb-4">
        <a href={content.github} target="_blank" rel="noopener noreferrer">
          <GrGithub />
        </a>
        <a href={content.linkedin} target="_blank" rel="noopener noreferrer">
          <BsLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Info;
