import AboutMe from './ui/aboutme';
import Education from './ui/education';
import Experience from './ui/experience';
import Image from 'next/image';
import Info from './ui/info';

export default function Home() {
  const { cvData } = require('./lib/cv-data.js');
  return (
    <main className="flex flex-row min-h-screen bg-slate-900 p-4 mx-5 justify-center">
      <div className="fixed top-5 left-10 flex flex-col pt-10 pl-10">
        <Image
          className="h-36 w-36 rounded-full mb-10 border-2 border-solid border-slate-500"
          width={300}
          height={300}
          src="/marcelo.jpeg"
          alt="Marcelo"
        />
        <Info content={cvData.info}/>
      </div>
      <div className="w-2/4 mt-24 ml-[30%]">
        
        {/* <p className="text-4xl text-slate-300 font-bold mb-36">Welcome to my Profile!</p> */}
        <AboutMe title='About me' content={cvData.aboutMe} />
        <Education title="Education" content={cvData.education} />
        <Experience title="DevExperience" content={cvData.dev_experience} />
      </div>
      <div className="w-1/4 flex flex-row justify-end">
      
      </div>
    </main>
  );
}
