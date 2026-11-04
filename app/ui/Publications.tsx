import React from "react";
import { PublicationsType } from "../lib/definitions";

const SELF = "Coelho, M.";

// Render the author list with the CV owner's name highlighted
const Authors = ({ authors }: { authors: string }) => {
  const parts = authors.split(SELF);
  return (
    <>
      {parts.map((part, i) => (
        <React.Fragment key={i}>
          {part}
          {i < parts.length - 1 && <strong className="pub-self">{SELF}</strong>}
        </React.Fragment>
      ))}
    </>
  );
};

const Publications = ({ title, content }: PublicationsType) => {
  return (
    <section className="mb-10 sm:mb-16">
      <p className="title">{title}</p>
      <div className="exp-timeline">
        {content.map((item) => (
          <article className="exp-item pub-item" key={item.title}>
            <header className="flex flex-wrap items-start justify-between gap-x-4 gap-y-1">
              <h3 className="pub-title">
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  {item.title}
                </a>
              </h3>
              <span className="exp-period">{item.year}</span>
            </header>
            <p className="pub-authors">
              <Authors authors={item.authors} />
            </p>
            <p className="pub-venue">{item.venue}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Publications;
