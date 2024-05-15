import Link from 'next/link';

export function Footer() {
  return (
    <>
      <div className="border border-1 border-gray-100/70 w-full" />
      <footer className="flex items-center justify-center w-full py-5 text-[16px] font-normal text-purple-950 bg-gradient-to-r from-purple-100 via-violet-50 to-purple-100">
        <div className="w-[70%] flex justify-between">
          <p>&copy; All rights reserved</p>
          <p className="flex borderjustify-center">Made with ❤️ in India</p>
          <div className="flex flex-row gap-8">
            <Link href={'https://www.linkedin.com/in/shahnawazz/'} target="_blank" className=" hover:underline">
              Linkedin
            </Link>
            <Link href={'https://twitter.com/yoursnawaz'} target="_blank" className=" hover:underline">
              Twitter/X
            </Link>
            <Link href={'https://github.com/yoursnawaz'} target="_blank" className=" hover:underline">
              GitHub
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
