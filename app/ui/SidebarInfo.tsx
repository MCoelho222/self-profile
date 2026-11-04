import React from "react";
import { LuMail, LuGithub, LuLinkedin } from "react-icons/lu";
import { InfoType } from "../lib/definitions";

const Info = ({ content }: InfoType) => {
  return (
    <div className="info-card">
      <div className="flex flex-col items-center text-center">
        <p className="info-title info-name">{content.name}</p>
        {content.titles.map((item) => (
          <p className="info-subtitle" key={item}>
            {item}
          </p>
        ))}
      </div>

      <div className="info-divider" />

      <a className="info-contact" href={`mailto:${content.email}`}>
        <span className="info-icon-chip">
          <LuMail />
        </span>
        <span className="info-contact-text">{content.email}</span>
      </a>

      <div className="flex flex-row gap-3 justify-center mt-5">
        {content.github && (
          <a
            className="info-social"
            href={content.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            title="GitHub"
          >
            <LuGithub />
          </a>
        )}
        {content.linkedin && (
          <a
            className="info-social"
            href={content.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <LuLinkedin />
          </a>
        )}
      </div>
    </div>
  );
};

export default Info;
