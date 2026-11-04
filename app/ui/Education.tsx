import React from "react";
import { EducationType } from "../lib/definitions";
import EntryDate from "./EntryDate";

const Education = ({ title, content }: EducationType) => {
  return (
    <section className="mb-10 sm:mb-16">
      <p className="title">{title}</p>
      <div className="exp-timeline">
        {content.map((item) => (
          <article className="exp-item exp-item-compact" key={item.title}>
            <div className="entry-row">
              <EntryDate value={item.period} />
              <div className="min-w-0">
                <h3 className="subtitle">{item.title}</h3>

                <p className="exp-company">
                  <a className="muted-link" href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.institution}
                  </a>
                  {item.linkname && item.linkname !== item.institution && (
                    <span className="exp-abbr"> ({item.linkname})</span>
                  )}
                </p>

                {item.description && <p className="exp-description">{item.description}</p>}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Education;
