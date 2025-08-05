import React from 'react';
import { AboutMeType } from "../lib/definitions";
import "../globals.css";

const AboutMe = ({ title, content }: AboutMeType) => {
  // Split text by \n and render each line with <br /> tags
  const renderTextWithLineBreaks = (text: string) => {
    return text.split("\n").map((line, index) => (
      <span key={index}>
        {line}
        {index < text.split("\n").length - 1 && <br />}
      </span>
    ));
  };

  return (
    <div className="mb-10 sm:mb-16">
      <p className="title">{title}</p>
      <p className="description-justify">{renderTextWithLineBreaks(content)}</p>
    </div>
  );
};

export default AboutMe;
