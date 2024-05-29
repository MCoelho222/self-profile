import { CertificatesType } from '../lib/definitions';

const Certificates = ({ title, content }: CertificatesType) => {
    return (
        <div className="mb-10">
            <p className="title blue-gradient">{title}</p>
            {content.map((item) => {
                return (
                <div className="flex flex-row w-full mb-4" key={item.title}>
                    <div className="w-1/6">
                        <p className="dark-text">{item.year}</p>
                    </div>
                    <div className="w-5/6">
                        <div className="flex flex-row gap-2">
                            <p className="main-text">{item.title}</p>
                            <p className="dark-text">by</p>
                            <p className="dark-text">{item.institution}</p>
                            <p className="dark-text">- <a
                                className="blue-link"
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer">
                                    Certificate
                            </a></p>
                            
                        </div>
                    </div>
                </div>
                );
            })}
        </div>
    );
}

export default Certificates;