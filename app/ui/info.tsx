import { GrGithub } from 'react-icons/gr';
import { InfoType } from '../lib/definitions';
import { BsLinkedin } from 'react-icons/bs';

const Info = ({ title, content }: InfoType) => {
    return (
        <div className="text-slate-500 text-sm">
            <div className=" flex flex-col items-center mb-6">
                <p className="text-xl text-slate-400 text-justify mb-2">{content.name}</p>
                {content.titles.map((item) => {
                    return (
                        <p>{item}</p>
                    )
                })}
            </div>
            <p className="mb-5">{content.email}</p>
            <div className="text-2xl flex flex-row gap-3 justify-center">
                <a href={content.github} target="_blank" rel="noopener noreferrer"><GrGithub /></a>
                <a href={content.linkedin} target="_blank" rel="noopener noreferrer"><BsLinkedin /></a> 
            </div>
        </div>
    )
}

export default Info;