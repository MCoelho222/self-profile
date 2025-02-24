import { GrGithub } from 'react-icons/gr';
import { InfoType } from '../lib/definitions';
import { BsLinkedin } from 'react-icons/bs';

const Info = ({ title, content }: InfoType) => {
    return (
        <div className="text-slate-800 dark-text sm:text-base">
            <div className="flex flex-col items-center mb-4">
                <p className="text-xl text-slate-700 text-justify mb-4 mt-4 font-medium">{content.name}</p>
                {content.titles.map((item) => {
                    return (
                        <p key="item">{item}</p>
                    )
                })}
            </div>
            <p className="dark-text sm:text-base mb-7">{content.email}</p>
            <div className="text-2xl flex flex-row gap-3 justify-center mb-4">
                <a href={content.github} target="_blank" rel="noopener noreferrer"><GrGithub /></a>
                <a href={content.linkedin} target="_blank" rel="noopener noreferrer"><BsLinkedin /></a> 
            </div>
        </div>
    )
}

export default Info;