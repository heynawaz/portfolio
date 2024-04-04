import Link from 'next/link';

type Props = {};

export default function Header() {
  return (
    <div className="flex justify-between items-center h-28 w-[70%]">
      <Link href={'#'} className="text-3xl text-black font-bold tracking-tight">
        nawaz<span className="text-indigo-400">.</span>
      </Link>
      <nav className="flex gap-12 items-center text-black h-fit font-medium text-[16px] tracking-wide">
        <Link href={'#'} className="hover:underline underline-offset-8 decoration-1">
          Home
        </Link>
        <Link href={'#'} className="hover:underline underline-offset-8 decoration-1">
          About
        </Link>
        <Link href={'#'} className="hover:underline underline-offset-8 decoration-1">
          Portfolio
        </Link>
        <Link href={'#'} className="hover:underline underline-offset-8 decoration-1">
          Services
        </Link>
      </nav>
    </div>
  );
};
