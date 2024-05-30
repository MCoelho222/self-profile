import { AboutMeType } from "../lib/definitions";
import '../globals.css'

const AboutMe = ({ title, content }: AboutMeType) => {
  return (
    <div className="mb-10">
      <p className="title">{title}</p>
      <p className="dark-text">{content}</p>
    </div>
  );
};

export default AboutMe;
