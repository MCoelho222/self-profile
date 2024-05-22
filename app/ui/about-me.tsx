import { AboutMeType } from "../lib/definitions";
import SectionTitle from "./section-title";
import TextContent from "./text-content";

const AboutMe = ({ title, content }: AboutMeType) => {
  return (
    <div className="mb-12">
      <SectionTitle title={title} />
      <TextContent content={content}/>
    </div>
  );
};

export default AboutMe;
