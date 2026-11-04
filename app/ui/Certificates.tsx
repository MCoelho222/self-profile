import React from 'react';
import { CertificatesType } from '../lib/definitions';

const Certificates = ({ title, content }: CertificatesType) => {
    return (
        <div className="mb-10 sm:mb-16">
            <p className="title">{title}</p>
            {content.map((item) => {
                return (
                <div className="flex flex-row w-full gap-4 justify-start mb-1" key={item.title}>
                    <div className="period period-inline">
                        <p>{item.year}</p>
                    </div>
                    <div className="flex-1 min-w-0 flex flex-row gap-2 justify-start">
                        <p className="description">{item.title} <span className="description">by {item.institution}</span> - <a
                            className="accent-link"
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer">
                                Certificate
                        </a></p>
                    </div>
                </div>
                );
            })}
        </div>
    );
}

export default Certificates;