import React from "react";
import { LuArrowUpRight } from "react-icons/lu";
import { CertificatesType } from "../lib/definitions";

const Certificates = ({ title, content }: CertificatesType) => {
  return (
    <section className="mb-10 sm:mb-16">
      <p className="title">{title}</p>
      <div className="exp-timeline">
        {content.map((item) => (
          <article className="exp-item cert-item" key={item.title}>
            <header className="flex flex-wrap items-start justify-between gap-x-4 gap-y-1">
              <h3 className="cert-title">{item.title}</h3>
              <span className="exp-period">{item.year}</span>
            </header>

            <p className="cert-meta">
              <span>{item.institution}</span>
              {item.load && (
                <>
                  <span className="cert-sep">·</span>
                  <span>{item.load}</span>
                </>
              )}
              <span className="cert-sep">·</span>
              <a
                className="accent-link inline-flex items-center gap-0.5"
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                View certificate
                <LuArrowUpRight aria-hidden="true" />
              </a>
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
