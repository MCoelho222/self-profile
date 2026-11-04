import React from "react";
import { ExperienceType } from "../lib/definitions";
import Skills from "./Skills";

const Experience = ({ title, content, techLabel }: ExperienceType) => {
  return (
    <section className="mb-10 sm:mb-16">
      <p className="title">{title}</p>
      <div className="exp-timeline">
        {content.map((item) => (
          <article className="exp-item" key={`${item.period}-${item.title}`}>
            <header className="flex flex-wrap items-start justify-between gap-x-4 gap-y-1">
              <h3 className="subtitle">{item.title}</h3>
              <span className="exp-period">{item.period}</span>
            </header>

            {item.company && (
              <p className="exp-company">
                {item.link ? (
                  <a className="accent-link" href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.company}
                  </a>
                ) : (
                  item.company
                )}
              </p>
            )}

            {item.summary && <p className="exp-summary">{item.summary}</p>}

            {item.description.length > 0 && (
              <ul className="exp-bullets">
                {item.description.map((desc, index) => (
                  <li key={index}>{desc}</li>
                ))}
              </ul>
            )}

            {item.tech.length > 0 && <Skills content={item.tech} label={techLabel} />}
          </article>
        ))}
      </div>
    </section>
  );
};

export default Experience;
