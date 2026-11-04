import AboutMe from "./ui/AboutMe";
import Education from "./ui/Education";
import Experience from "./ui/Experience";
import Certificates from "./ui/Certificates";
import Image from "next/image";
import Info from "./ui/SidebarInfo";
import SkillsTable from "./ui/SkillsTable";
import Languages from "./ui/Languages";
import Publications from "./ui/Publications";

export default function Home() {
  const { cvData } = require("./lib/cv-data.js");
  return (
    <main className="flex flex-col justify-center min-h-screen p-5 sm:flex-row">
      <div className="w-full h-full flex flex-col items-center sm:w-1/5 sm:fixed sm:top-7 sm:left-1 sm:pt-9 sm:px-7">
        <div className="avatar mb-2">
          <Image
            className="avatar-img"
            width={300}
            height={300}
            src="/mcoelho2024.JPEG"
            alt="Marcelo Coelho"
            priority
          />
        </div>
        <Info content={cvData.info} />
      </div>
      <div className="w-full pt-4 sm:pt-16 sm:w-[55%] sm:ml-20 lg:ml-32">
        <AboutMe title="About me" content={cvData.aboutMe} />
        <Education title="Education" content={cvData.education} />
        <SkillsTable title="Skills" content={cvData.skills} />
        <Experience title="Experience" content={cvData.experience} />
        <Certificates title="Certifications" content={cvData.certificates} />
        <Languages title="Languages" content={cvData.languages} />
        <Publications title="Publications" content={cvData.publications} />
      </div>
    </main>
  );
}
