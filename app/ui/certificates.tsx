import { CertificatesType } from '../lib/definitions';

const Certificates = ({ title, content }: CertificatesType) => {
    return (
        <div className="mb-10">
            <p className="title">{title}</p>
            {content.map((item) => {
                return (
                <div className="flex flex-row w-full mb-4 justify-start" key={item.title}>
                    <div className="w-1/6">
                        <p className="dark-text">{item.year}</p>
                    </div>
                    <div className="w-5/6 flex flex-row gap-2 justify-start">
                        <p className="main-text">{item.title} <span className="dark-text">by {item.institution}</span> - <a
                            className="blue-link"
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