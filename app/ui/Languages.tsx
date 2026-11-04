import React from "react";
import { LanguagesType } from "../lib/definitions";

const SEGMENTS = 5;

const Languages = ({ title, content }: LanguagesType) => {
  return (
    <section className="mb-10 sm:mb-16">
      <p className="title">{title}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {content.map((item) => (
          <div className="lang-card" key={item.language}>
            <div className="flex items-center gap-3">
              <span className="lang-code">{item.code}</span>
              <div className="min-w-0">
                <p className="lang-name">{item.language}</p>
                <p className="lang-level">{item.level}</p>
              </div>
            </div>
            <div
              className="lang-meter"
              role="img"
              aria-label={`${item.language} proficiency: ${item.proficiency} out of ${SEGMENTS}`}
            >
              {Array.from({ length: SEGMENTS }, (_, i) => (
                <span key={i} className={i < item.proficiency ? "lang-seg lang-seg-on" : "lang-seg"} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Languages;
