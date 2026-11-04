import Image from "next/image";
import { notFound } from "next/navigation";
import AboutMe from "../ui/AboutMe";
import Education from "../ui/Education";
import Experience from "../ui/Experience";
import Certificates from "../ui/Certificates";
import Info from "../ui/SidebarInfo";
import SkillsTable from "../ui/SkillsTable";
import Languages from "../ui/Languages";
import Publications from "../ui/Publications";
import LanguageSwitch from "../ui/LanguageSwitch";
import { getCv, isLocale } from "../lib/i18n";
import { ILabels } from "../lib/definitions";

export default function Home({ params }: { params: { lang: string } }) {
  if (!isLocale(params.lang)) notFound();
  const cvData = getCv(params.lang);
  const labels: ILabels = cvData.labels;
  const t = labels.sections;

  return (
    <main className="flex flex-col justify-center min-h-screen p-5 sm:flex-row">
      <LanguageSwitch current={params.lang} label={labels.switchLanguage} />
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
        <AboutMe title={t.aboutMe} content={cvData.aboutMe} />
        <Education title={t.education} content={cvData.education} />
        <SkillsTable title={t.skills} content={cvData.skills} />
        <Experience title={t.experience} content={cvData.experience} techLabel={labels.technologies} />
        <Certificates
          title={t.certifications}
          content={cvData.certificates}
          viewLabel={labels.viewCertificate}
        />
        <Languages
          title={t.languages}
          content={cvData.languages}
          proficiencyLabel={labels.proficiency}
          outOfLabel={labels.outOf}
        />
        <Publications title={t.publications} content={cvData.publications} />
      </div>
    </main>
  );
}
