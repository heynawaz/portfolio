import Link from 'next/link';

export function Footer() {
  return (
    <>
      <div className="border border-1 border-gray-100/70 w-full" />
      <footer className="flex justify-between flex-row my-6 w-[70%] text-sm text-gray-500">
        <p className="">&copy; All rights reserved</p>
        <p className="flex borderjustify-center">Made with ❤️ in India</p>
        <div className="flex flex-row gap-8">
          <Link href={'https://www.linkedin.com/in/shahnawazz/'} target="_blank" className=" hover:underline">
            LinkedIn
          </Link>
          <Link href={'https://twitter.com/yoursnawaz'} target="_blank" className=" hover:underline">
            Twitter/X
          </Link>
          <Link href={'https://github.com/yoursnawaz'} target="_blank" className=" hover:underline">
            GitHub
          </Link>
        </div>
      </footer>
    </>
  );
}
