import { SectionHeader } from '../common';

export default function About() {
  return (
    <>
      <section className="mt-36 flex justify-center flex-col w-full items-center mb-36">
        <SectionHeader
          heading="Who am I?"
          description="Here you'll discover additional insights about me, my expertise, and a comprehensive overview of my current programming and technological skills."
        />
        <div className="flex flex-row justify-center gap-12 h-screen w-full mt-20">
          <div className="">
            <h2 className="text-2xl tracking-wide font-semibold text-gray-700 text-center h-16">Full Stack</h2>
            <div className="flex gap-12 tracking-wide">
              <div className="px-[3vw] py-[3vh] bg-gradient-to-r from-violet-700 to-purple-600 text-xl font-medium text-white rounded-lg">Frontend</div>
              <div className="px-[3vw] py-[3vh] bg-gradient-to-r from-violet-700 to-purple-600 text-xl font-medium text-white rounded-lg">Backend</div>
              <div className="px-[3vw] py-[3vh] bg-gradient-to-r from-violet-700 to-purple-600 text-xl font-medium text-white rounded-lg">Database</div>
              <div className="px-[3vw] py-[3vh] bg-gradient-to-r from-violet-700 to-purple-600 text-xl font-medium text-white rounded-lg">DevOps</div>
            </div>
          </div>
          <div className="bg-slate-200">sdgs</div>
        </div>
      </section>
    </>
  );
}
