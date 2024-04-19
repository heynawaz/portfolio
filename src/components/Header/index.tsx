'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export function Header() {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 1) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 flex justify-center items-center h-28 w-full transition-all ease-in duration-150 ${hasScrolled && 'shadow-[0px_1px_5px_1px_rgb(0,0,0,0.06)] h-[5rem] bg-gradient-to-r from-purple-100 via-violet-50 to-purple-50'}`}
    >
      <div className={`w-[70%] flex justify-between`}>
        <Link href={'#'} className="text-3xl text-black font-bold tracking-tight">
          nawaz<span className="text-indigo-400">.</span>
        </Link>
        <nav className={`flex gap-12 items-center text-black h-fit pt-2 text-[16px] tracking-wide font-medium`}>
          <Link
            href={'#'}
            onClick={() => {
              document.body.scrollTop = 0;
            }}
            className="hover:underline underline-offset-8 decoration-1"
          >
            Home
          </Link>
          <Link href={'#about'} className="hover:underline underline-offset-8 decoration-1">
            About
          </Link>
          <Link href={'#portfolio'} className="hover:underline underline-offset-8 decoration-1">
            Portfolio
          </Link>
          <Link href={'#solutions'} className="hover:underline underline-offset-8 decoration-1">
            Solutions
          </Link>
        </nav>
      </div>
    </header>
  );
}
