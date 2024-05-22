import Image from "next/image";
import EduSection from "./ui/edu-section";
import AboutMe from "./ui/about-me";

export default function Home() {
  const { cvData } = require('./lib/cv-data.js');
  return (
    <main className="flex flex-row min-h-screen bg-slate-900 p-6 mx-5 justify-center">
      <div className="flex flex-row w-1/4 justify-center">
        <Image
          className="h-48 w-48 rounded-full"
          width={300}
          height={300}
          src="/marcelo.jpeg"
          alt="Marcelo"
        />
      </div>
      <div className="w-2/4">
        {/* <p className="text-4xl text-slate-300 font-bold mb-36">Welcome to my Profile!</p> */}
        <AboutMe title='About me' content={cvData.aboutMe}/>
        <EduSection title="Education" content={cvData.education}/>
      </div>
      <div className="w-1/4">
      </div>
    </main>
  );
}
