import React from "react";
import { EducationType } from "../lib/definitions";

const Education = ({ title, content }: EducationType) => {
  return (
    <section className="mb-10 sm:mb-16">
      <p className="title">{title}</p>
      <div className="exp-timeline">
        {content.map((item) => (
          <article className="exp-item exp-item-compact" key={item.title}>
            <header className="flex flex-wrap items-start justify-between gap-x-4 gap-y-1">
              <h3 className="subtitle">{item.title}</h3>
              <span className="exp-period">{item.period}</span>
            </header>

            <p className="exp-company">
              <a className="accent-link" href={item.link} target="_blank" rel="noopener noreferrer">
                {item.institution}
              </a>
              {item.linkname && item.linkname !== item.institution && (
                <span className="text-slate-500"> ({item.linkname})</span>
              )}
            </p>

            {item.description && <p className="exp-description">{item.description}</p>}
          </article>
        ))}
      </div>
    </section>
  );
};

export default Education;
