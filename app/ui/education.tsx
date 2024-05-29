import { EducationType } from "../lib/definitions";

const Education = ({ title, content }: EducationType) => {
  return (
    <div className="mb-10">
      <p className="title blue-gradient">{title}</p>
      {content.map((item) => {
        return (
          <div className="flex flex-row w-full mb-4" key={item.title}>
            <div className="w-1/6">
              <p className="dark-text">{item.period}</p>
            </div>
            <div className="w-5/6">
              <p className="main-text mb-1">{item.title} by <a
                  className="blue-link"
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer">{item.linkname}
                </a>
              </p>
              <p className="dark-text">{item.description}</p>
              <p className="dark-text italic">{item.tech.join(', ')}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Education;
