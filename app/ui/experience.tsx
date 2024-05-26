import '../globals.css';
import { ExperienceType } from '../lib/definitions';

const Experience = ({ title, content }: ExperienceType) => {
    return (
        <div className="mb-20">
            <p className="purple-gradient title">{title}</p>
            {content.map((item) => {
                return (
                    <div className="flex flex-row w-full mb-8" key={item.title}>
                        <div className="w-1/6">
                            <p className="dark-text">{item.period}</p>
                        </div>
                        <div className="w-5/6">
                            <p className="main-text">{item.title} at <a className="purple-gradient" href={item.link} target="_blank" rel="noopener noreferrer">{item.company}</a></p>
                            <p className="dark-text mb-4">{item.description}</p>
                            <p className="dark-text">{item.tech.join(', ')}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Experience;