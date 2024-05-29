import AboutMe from './ui/aboutme';
import Education from './ui/education';
import Experience from './ui/experience';
import Certificates from './ui/certificates';
import Image from 'next/image';
import Info from './ui/info';

export default function Home() {
  const { cvData } = require('./lib/cv-data.js');
  return (
    <main className="flex flex-col justify-center min-h-screen bg-slate-900 p-4 mx-5 sm:flex-row">
      <div className=" w-full h-full flex flex-col items-center pt-5 sm:w-1/5 sm:fixed sm:top-0 sm:left-0 sm:pt-10 sm:pl-1 sm:bg-slate-900">
        <Image
          className="h-32 w-32 rounded-full mb-5 border-2 border-solid border-slate-500"
          width={300}
          height={300}
          src="/marcelo.jpeg"
          alt="Marcelo"
        />
        <Info content={cvData.info}/>
      </div>
      <div className="w-full pt-8 sm:w-3/4 sm:pl-[10%]">
        <AboutMe title='About me' content={cvData.aboutMe} />
        <Education title="Education" content={cvData.education} />
        <Experience title="Experience" content={cvData.experience} />
        <Certificates title="Certificates" content={cvData.certificates} />
      </div>
    </main>
  );
}
