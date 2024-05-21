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
      <section id="about" className="mt-36 flex justify-center flex-col w-full items-center mb-36 pt-28">
        <SectionHeader
          heading="Who am I?"
          description="Here you'll discover additional insights about me, my expertise, and a comprehensive overview of my current programming and technological skills."
        />
        <div className="flex flex-row justify-center gap-20 w-full mt-20">
          <div className="flex gap-12 tracking-wide">
            {Object.entries(stackData)?.map(([stack, details], index) => (
              <div key={index}>
                <div key={`stack${index}`} className="px-[60px] py-[30px] bg-gradient-to-r from-violet-200 to-purple-200 text-xl font-bold text-purple-900 rounded-lg">
                  {stack}
                </div>
                <div key={`details${index}`} className="mt-8 rounded-md shadow-md">
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
          <div className="w-[670px]">
            <div className="flex w-full gap-8 bg-neutral-50/70 shadow-md px-5 py-5 rounded-lg">
              <Image src={'/assets/Shah Nawaz.jpg'} className="rounded-full border border-gray-300" alt="Shah Nawaz's Photo" width={120} height={100} />
              <div className="">
                <h1 className="text-2xl font-semibold text-gray-600 mt-3">Mohammad Shah Nawaz</h1>
                <p className="font-light text-gray-500 text-md">Developer II at Cloud Analogy</p>
                <div className="flex items-center flex-row gap-5 mt-5">
                  <Link href={'https://github.com/yoursnawaz'} target="_blank">
                    <FaGithub className="fill-gray-600 hover:fill-purple-700" size={18} />
                  </Link>
                  <Link href={'https://twitter.com/yoursnawaz'} target="_blank">
                    <FaXTwitter className="fill-gray-600 hover:fill-purple-700" size={18} />
                  </Link>
                  <Link href={'https://www.linkedin.com/in/shahnawazz/'} target="_blank">
                    <FaLinkedinIn className="fill-gray-600 hover:fill-purple-700" size={18} />
                  </Link>
                  <Link href={'#'}>
                    <FaInstagram className="fill-gray-600 hover:fill-purple-700" size={18} />
                  </Link>
                  <Link href={'#'}>
                    <FaFacebookF className="fill-gray-600 hover:fill-purple-700" size={18} />
                  </Link>
                </div>
              </div>
            </div>
            <p className="mt-6 text-lg leading-normal text-gray-600">
              I am a seasoned Full Stack Web Developer with a proven track record of over 3 years, focusing on delivering high-quality solutions. My expertise lies in a comprehensive range of
              technologies including JavaScript, TypeScript, React, Next.js, Node.js, Nest.js, Express, GraphQL and many more. With a deep understanding of these tools and frameworks, I excel in
              crafting dynamic and scalable full-stack applications that meet the evolving needs of modern businesses. Let me bring my wealth of experience and technical prowess to your next project.
            </p>
            <div className="mt-10">
              <h3 className="text-2xl text-secondary-platform font-bold">Work Experience</h3>
              <div className="flex gap-6 mt-6">
                <IoBriefcaseOutline size={50} color="purple" />
                <div className="w-full">
                  <Link href={'https://www.cloudanalogy.com/'} target="_blank" className="text-xl font-semibold text-secondary-platform hover:underline">
                    Cloud Analogy
                  </Link>
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-medium text-gray-700">Developer II</h3>
                    <p className="text-gray-600 text-sm">Jan, 2024 - Present</p>
                  </div>
                  <ul className="list-disc list-inside text-gray-700 text-[15px]">
                    <li>Leading the design and development team of multiple enterprise-level applications.</li>
                    <li>Product security with penetration testing and reporting vulnerabilities.</li>
                    <li>Transformed UIs using React, decreasing debugging time by 61% and increasing views by 33%.</li>
                  </ul>
                  <div className="flex justify-between items-center mt-5 mb-2">
                    <h3 className="text-lg font-medium text-gray-700">Full Stack Developer</h3>
                    <p className="text-gray-600 text-sm">Dec, 2020 - Dec, 2023</p>
                  </div>
                  <ul className="list-disc list-inside text-gray-700 text-[15px]">
                    <li>Built scalable full stack architecture for multiple enterprise software products.</li>
                    <li>Built and maintained 100% of backend REST services using Node.js.</li>
                    <li>Transformed UIs using React, decreasing debugging time by 61% and increasing views by 33%.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-2xl text-secondary-platform font-bold">Education</h3>
              <div className="flex gap-6 mt-6">
                <LuGraduationCap size={50} color="purple" />
                <div className="w-full">
                  <Link href={'https://www.iul.ac.in/Program/PG/PG_mca.aspx'} target="_blank" className="text-xl font-semibold text-secondary-platform hover:underline">
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
                <LuGraduationCap size={50} color="purple" />
                <div className="w-full">
                  <Link href={'https://www.iul.ac.in/Program/UG/UG_BCA.aspx'} target="_blank" className="text-xl font-semibold text-secondary-platform hover:underline">
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
      </section>
    </>
  );
}
