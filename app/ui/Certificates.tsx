import React from "react";
import EntryDate from "./EntryDate";
import { LuArrowUpRight } from "react-icons/lu";
import { CertificatesType } from "../lib/definitions";

const Certificates = ({ title, content, viewLabel = "View certificate" }: CertificatesType) => {
  return (
    <section className="mb-10 sm:mb-16">
      <p className="title">{title}</p>
      <div className="exp-timeline">
        {content.map((item) => (
          <article className="exp-item cert-item" key={item.title}>
            <div className="entry-row entry-row-year">
              <EntryDate value={item.year} />
              <div className="min-w-0">
                <h3 className="cert-title">{item.title}</h3>

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
                {viewLabel}
                <LuArrowUpRight aria-hidden="true" />
              </a>
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
