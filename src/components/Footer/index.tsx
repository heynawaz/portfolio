import Link from 'next/link';
import { FaGithub, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
import { FiAtSign } from 'react-icons/fi';

export function Footer() {
  return (
    <>
      <div className="border border-1 border-gray-100 w-[75%]" />
      <footer className="flex items-center justify-center w-full rounded-t-2xl h-32 mb-10 text-[16px] font-normal text-purple-950">
        <div className="w-[75%] flex justify-between items-center">
          <div>
            <Link href={'#'} className="text-3xl text-black font-bold tracking-tight">
              nawaz<span className="text-purple-900">.</span>
            </Link>
            <p className="tracking-wide text-xs pt-[4px] text-gray-600">&copy; msnawaz {new Date().getFullYear()}. All rights reserved.</p>
          </div>
          <div className="flex flex-row gap-8">
            <Link href={'https://www.linkedin.com/in/shahnawazz/'} target="_blank">
              <FaLinkedinIn color="black" />
            </Link>
            <Link href={'https://twitter.com/yoursnawaz'} target="_blank">
              <FaXTwitter color="black" />
            </Link>
            <Link href={'https://github.com/yoursnawaz'} target="_blank">
              <FaGithub color="black" />
            </Link>
            <Link href={'mailto:shahnawaz.com@hotmail.com'}>
              <FiAtSign color="black" />
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
