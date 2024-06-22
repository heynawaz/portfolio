'use client';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
import { IoBriefcaseOutline } from 'react-icons/io5';
import { LuGraduationCap } from 'react-icons/lu';
import { SectionHeader } from '../common';
import stackData from './stack.data.json';

export function About() {
  return (
    <>
      <section id="about" className="flex justify-center flex-col w-full items-center mb-36 pt-28 sm:pt-10 sm:mb-0">
        <SectionHeader heading="Who am I?" description="Insights about me, my expertise, and a comprehensive overview of my current programming and technological skills." />
        <div className="flex justify-center 2xl:items-center 2xl:flex-col 2xl:gap-28 w-full mt-20">
          <div className="grid grid-cols-4 xs:!grid-cols-1 md:grid-cols-2 mx-8 gap-8 tracking-wide order-1 2xl:order-2">
            {Object.entries(stackData)?.map(([stack, details], index) => (
              <div key={index}>
                <div key={`stack${index}`} className="min-h-[5.8rem] grid place-items-center min-w-48 bg-gradient-to-r from-violet-200 to-purple-200 text-xl font-bold text-purple-900 rounded-lg">
                  {stack}
                </div>
                <div key={`details${index}`} className="min-w-48 mt-6 rounded-md shadow-md">
                  {Object.entries(details)?.map(([keys, list], subIndex) => (
                    <div key={subIndex}>
                      <div
                        key={`section${subIndex}`}
                        className={`${subIndex === 0 && 'rounded-t-md'} flex items-center justify-center px-3 pt-[2px] h-10 font-semibold text-[16px] text-purple-950 bg-gradient-to-r from-violet-100 to-purple-100 shadow-md`}
                      >
                        {keys}
                      </div>
                      <ul key={`data${subIndex}`} className="list-inside list-disc py-3 pl-3 bg-purple-200/15 text-gray-600 leading-relaxed text-[15px]">
                        {list?.map((data, index) => <li key={index}>{data}</li>)}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="relative flex flex-col max-w-[700px] order-2 2xl:order-1 mx-8">
            <div className="absolute inset-0 -z-10 h-full w-full rounded-3xl bg-white bg-[linear-gradient(to_right,#8080800a_0px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:50px_50px]">
              <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[210px] rounded-full bg-purple-300 opacity-35 blur-[100px]"></div>
            </div>
            <div className="relative flex flex-col sm:flex-col sm:justify-center sm:py-10 w-full gap-4 px-8 sm:px-1 pt-9 pb-7 rounded-3xl border-t-8 border-b-8 border-purple-900">
              <div className="grid place-items-center text-center">
                <Image src={'/assets/Shah Nawaz.jpg'} draggable={false} className="rounded-full shadow-md" alt="Shah Nawaz's Photo" width={120} height={100} />
                <h1 className="text-2xl font-semibold text-gray-600 mt-3 sm:mt-0">Mohammad Shah Nawaz</h1>
                <p className="font-light text-gray-500 text-md">Software Engineer</p>
                <div className="flex items-center flex-row sm:justify-center gap-5 mt-5">
                  <Link href={'https://github.com/yoursnawaz'} target="_blank" className="hover:scale-125 transition-all">
                    <FaGithub className="fill-zinc-600 hover:fill-purple-900" size={16} />
                  </Link>
                  <Link href={'https://twitter.com/yoursnawaz'} target="_blank" className="hover:scale-125 transition-all">
                    <FaXTwitter className="fill-zinc-600 hover:fill-purple-900" size={16} />
                  </Link>
                  <Link href={'https://www.linkedin.com/in/shahnawazz/'} target="_blank" className="hover:scale-125 transition-all">
                    <FaLinkedinIn className="fill-zinc-600 hover:fill-purple-900" size={16} />
                  </Link>
                  <Link href={'#'} className="hover:scale-125 transition-all">
                    <FaInstagram className="fill-zinc-600 hover:fill-purple-900" size={16} />
                  </Link>
                  <Link href={'#'} className="hover:scale-125 transition-all">
                    <FaFacebookF className="fill-zinc-600 hover:fill-purple-900" size={16} />
                  </Link>
                </div>
              </div>
              <p className="mt-4 text-lg leading-normal text-gray-600">
                <span className="absolute top-[11rem] left-[-30px] -z-10 text-[10rem] text-purple-900/5"></span>
                I&apos;m a Full Stack Web Developer with 3+ years of work experience delivering top-notch solutions. I started programming in 2010, building foundational programming logic and
                developing basic apps. After finishing my schooling, I pursued both my bachelor&apos;s and master&apos;s degrees in computer science to deepen my knowledge. During this time, I began
                building web projects using PHP. Now I have skills in building modern apps using JavaScript, TypeScript, React, Next.js, Node.js, Nest.js, Express, GraphQL, and more. My focus is on
                creating high-quality, scalable applications that meet today’s business demands.
                <span className="absolute top-[31rem] right-[-20px] -z-10 text-[10rem] text-purple-900/5"></span>
              </p>
              <div className="mt-4">
                <h3 className="text-2xl text-purple-900 font-bold sm:underline">Work Experience</h3>
                <div className="flex gap-6 mt-6 sm:mt-3">
                  <IoBriefcaseOutline size={50} color="#581c87" className="sm:hidden" />
                  <div className="w-full">
                    <Link href={'https://www.cloudanalogy.com/'} target="_blank" className="text-xl font-semibold text-purple-900 hover:underline">
                      Cloud Analogy
                    </Link>
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-lg font-medium text-gray-700">Developer II</h3>
                      <p className="text-gray-600 text-sm">Jan, 2024 - Present</p>
                    </div>
                    <ul className="list-disc list-outside text-gray-700 text-[1rem]">
                      <li>Directing a design and development team for multiple enterprise-level projects.</li>
                      <li>Enhanced UIs with React, achieving a 61% reduction in debugging time and a 33% increase in views.</li>
                      <li>Involved in product security with penetration testing and vulnerability reporting.</li>
                    </ul>
                    <div className="flex justify-between items-center mt-5 mb-2">
                      <h3 className="text-lg font-medium text-gray-700">Full Stack Developer</h3>
                      <p className="text-gray-600 text-sm">Dec, 2020 - Dec, 2023</p>
                    </div>
                    <ul className="list-disc list-outside text-gray-700 text-[1rem]">
                      <li>Built both front-end and back-end parts of large software projects.</li>
                      <li>Created and maintained backend services using Node.js.</li>
                      <li>Tested and reported security issues to make products safer.</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="mt-8 sm:mt-4">
                <h3 className="text-2xl text-purple-900 font-bold sm:underline">Education</h3>
                <div className="flex gap-6 mt-6 sm:mt-3">
                  <LuGraduationCap size={50} color="#581c87" className="sm:hidden" />
                  <div className="w-full">
                    <Link href={'https://www.iul.ac.in/Program/PG/PG_mca.aspx'} target="_blank" className="text-xl font-semibold text-purple-900 hover:underline">
                      Master of Computer Applications
                    </Link>
                    <div className="flex justify-between items-center mb-2">
                      <Link href={'https://www.iul.ac.in/'} target="_blank" className="text-md font-normal text-gray-600 hover:underline">
                        Integral University
                      </Link>
                      <p className="text-gray-600 text-sm">July, 2017 - June, 2020</p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-6 mt-6">
                  <LuGraduationCap size={50} color="#581c87" className="sm:hidden" />
                  <div className="w-full">
                    <Link href={'https://www.iul.ac.in/Program/UG/UG_BCA.aspx'} target="_blank" className="text-xl font-semibold text-purple-900 hover:underline">
                      Bachelor of Computer Applications
                    </Link>
                    <div className="flex justify-between items-center mb-2">
                      <Link href={'https://www.iul.ac.in/'} target="_blank" className="text-md font-normal text-gray-600 hover:underline">
                        Integral University
                      </Link>
                      <p className="text-gray-600 text-sm">July, 2014 - June, 2017</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
