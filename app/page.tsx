import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-row min-h-screen bg-slate-900 p-6 mx-5 justify-center">
      <div className="flex flex-row w-1/3 justify-center">
        <Image
          className="h-48 w-48 rounded-full"
          width={300}
          height={300}
          src="/marcelo.jpeg"
          alt="Marcelo"
        />
      </div>
      <div className="w-1/3">
        <p className="text-4xl text-white font-bold mb-36">Welcome to my Profile!</p>
        <p className="text-slate-400 text-justify">
          I am a fullstack web developer and environmental engineer with doctorate degree.
          Currently, I am working with Python, Pandas, Numpy for training AI-based models.
          However, I've also been working with fullstack web development since 2022 using Python, Flask,
          Typescript and React mainly. My longer experience is with Python, which I use since 2016 mainly for
          data analysis. In addition to improving as a fullstack developer and data scientist, I am interested in
          artificial intelligence. So I'm pursuing a postgraduate degree in this field.
          I am self managing, collaborative, communicative, open to learn, detail-oriented and determined.
        </p>
      </div>
      <div className="w-1/3">
      </div>
    </main>
  );
}
