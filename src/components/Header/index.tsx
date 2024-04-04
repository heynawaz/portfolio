import Link from 'next/link';

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="flex justify-between items-center mt-10">
      <Link href={'#'} className="text-3xl text-black font-bold tracking-tight">
        nawaz<span className="text-indigo-400">.</span>
      </Link>
      <nav className="text-black pl-7 pr-2 h-fit font-medium text-[16px] tracking-wide">
        <Link href={'#'} className="px-6 rounded-full hover:underline underline-offset-8 decoration-1">
          Home
        </Link>
        <Link href={'#'} className="px-6 rounded-full hover:underline underline-offset-8 decoration-1">
          About
        </Link>
        <Link href={'#'} className="px-6 rounded-full hover:underline underline-offset-8 decoration-1">
          Portfolio
        </Link>
        <Link href={'#'} className="px-6 rounded-full hover:underline underline-offset-8 decoration-1">
          Services
        </Link>
      </nav>
    </div>
  );
};

export default Header;
