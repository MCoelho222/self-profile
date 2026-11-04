import React from "react";
import { PublicationsType } from "../lib/definitions";

const Publications = ({ title, content }: PublicationsType) => {
  return (
    <div className="mb-10 sm:mb-16">
      <p className="title">{title}</p>
      {content.map((item) => (
        <p className="description mb-4" key={item.title}>
          {item.authors}{" "}
          <a
            className="blue-link"
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.title}
          </a>
          . {item.venue}
        </p>
      ))}
    </div>
  );
};

export default Publications;
