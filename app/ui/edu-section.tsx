import { EduSectionType } from "../lib/definitions";
import SectionTitle from "./section-title";
import TextContent from "./text-content";
import SectionSubtitle from "./section-subtitle";

const EduSection = ({ title, content }: EduSectionType) => {
  return (
    <div>
      <SectionTitle title={title} />
      {content.map((item) => {
        return (
          <div className="flex flex-row w-full mb-4">
            <div className="w-1/6">
              <p className="text-lg text-slate-400 text-left">{item.period}</p>
            </div>
            <div className="w-5/6">
              <SectionSubtitle subtitle={item.title} />
              <p className=" text-lg text-slate-500">{item.institution}</p>
              <TextContent content={item.description} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default EduSection;
