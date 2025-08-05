import React from 'react';
import { ExperienceType } from '../lib/definitions';
import Skills from './Skills';

const Experience = ({ title, content }: ExperienceType) => {
    return (
        <div className="mb-4 sm:mb-10">
            <p className="title">{title}</p>
            {content.map((item) => {
                return (
                    <div className="flex flex-row w-full mb-6" key={item.title}>
                        <div className="w-1/6 description">
                            <p>{item.period}</p>
                        </div>
                        <div className="w-5/6">
                            <p className="subtitle">{item.title} at <a 
                                    className="blue-link"
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer">{item.company}
                                </a>
                            </p>
                            <ul>
                                {item.description.map((desc, index) => (
                                    <li className="description" key={index}>- {desc}</li>
                                ))}
                            </ul>
                            <Skills content={item.tech} />
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Experience;