import { GrGithub } from 'react-icons/gr';
import { InfoType } from '../lib/definitions';
import { BsLinkedin } from 'react-icons/bs';

const Info = ({ title, content }: InfoType) => {
    return (
        <div className="text-slate-500">
            <div className="mb-6">
                <p className="main-text mb-2">{content.name}</p>
                <p>{content.job} at {content.company}</p>
                <p>{content.email}</p>
            </div>
            <div className="text-2xl flex flex-row gap-3">
                <a href={content.github} target="_blank" rel="noopener noreferrer"><GrGithub /></a>
                <a href={content.linkedin} target="_blank" rel="noopener noreferrer"><BsLinkedin /></a> 
            </div>
        </div>
    )
}

export default Info;