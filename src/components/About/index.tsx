'use client';
import { SectionHeader } from '../common';
import stackData from './stack.data.json';

export default function About() {
  return (
    <>
      <section className="mt-36 flex justify-center flex-col w-full items-center mb-36">
        <SectionHeader heading="Who am I?" description="Here you'll discover additional insights about me, my expertise, and a comprehensive overview of my current programming and technological skills." />
        <div className="flex flex-row justify-center gap-12 h-screen w-full mt-20">
          <div>
            <div className="flex gap-12 tracking-wide">
              {Object.entries(stackData)?.map(([stack, details], index) => (
                <>
                  <div>
                    <div key={`stack${index}`} className="px-[60px] py-[30px] bg-gradient-to-r from-violet-500 to-purple-500 text-xl font-medium text-white rounded-lg">
                      {stack}
                    </div>
                    <div key={`details${index}`} className="mt-8 rounded-md shadow-[0px_1px_4px_2px_rgb(0,0,0,0.1)]">
                      {Object.entries(details)?.map(([keys, list], subIndex) => (
                        <>
                          <div key={`section${subIndex}`} className={`${subIndex === 0 && 'rounded-t-md'} flex items-center justify-center px-3 pt-[2px] h-10 font-semibold text-[16px] text-gray-800 bg-gradient-to-r from-violet-300 to-purple-300`}>
                            {keys}
                          </div>
                          <ul key={`data${subIndex}`} className="list-inside list-disc py-3 pl-3 bg-purple-200/50 text-gray-600 leading-relaxed text-[15px]">
                            {list?.map((data, index) => <li key={index}>{data}</li>)}
                          </ul>
                        </>
                      ))}
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
          <div className="bg-slate-200">About me</div>
        </div>
      </section>
    </>
  );
}
