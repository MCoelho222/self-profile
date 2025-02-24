import AboutMe from './ui/aboutme';
import Education from './ui/education';
import Experience from './ui/experience';
import Certificates from './ui/certificates';
import Image from 'next/image';
import Info from './ui/info';

export default function Home() {
  const { cvData } = require('./lib/cv-data.js');
  return (
    <main className="w-full flex flex-col justify-center min-h-screen bg-slate-200 p-2 mx-5 sm:flex-row">
      <div className=" w-full h-full flex flex-col items-center sm:w-1/5 sm:fixed sm:top-0 sm:left-0 sm:pt-7 sm:px-4 sm:bg-slate-300">
        <Image
          className="h-32 w-32 rounded-full mb-2 border-2 border-solid border-slate-300 object-cover"
          width={300}
          height={300}
          src="/mcoelho2024.JPEG"
          alt="Marcelo"
        />
        <Info content={cvData.info}/>
        <div className="flex flex-row justify-center pt-3">
          <p className="text-slate-900 text-sm sm:text-base text-justify">{cvData.welcome}</p>
        </div>
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
