import { AboutMeType } from "../lib/definitions";
import '../globals.css'

const AboutMe = ({ title, content }: AboutMeType) => {
  return (
    <div className="mb-20">
      <p className="title gray-gradient line-through">{title}</p>
      <p className="dark-text">{content}</p>
    </div>
  );
};

export default AboutMe;
