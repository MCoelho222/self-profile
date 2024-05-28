import AboutMe from './ui/aboutme';
import Education from './ui/education';
import Experience from './ui/experience';
import Image from 'next/image';
import Info from './ui/info';

export default function Home() {
  const { cvData } = require('./lib/cv-data.js');
  return (
    <main className="flex flex-col justify-center min-h-screen bg-slate-900 p-4 mx-5 sm:flex-row">
      <div className=" w-full flex flex-col items-center sm:items-start sm:fixed sm:top-5 sm:left-10 sm:pt-10 sm:pl-1 ">
        <Image
          className="h-36 w-36 rounded-full mb-10 border-2 border-solid border-slate-500"
          width={300}
          height={300}
          src="/marcelo.jpeg"
          alt="Marcelo"
        />
        <Info content={cvData.info}/>
      </div>
      <div className="w-full mt-24 sm:w-2/4 ">
        
        {/* <p className="text-4xl text-slate-300 font-bold mb-36">Welcome to my Profile!</p> */}
        <AboutMe title='About me' content={cvData.aboutMe} />
        <Education title="Education" content={cvData.education} />
        <Experience title="DevExperience" content={cvData.dev_experience} />
      </div>
    </main>
  );
}
