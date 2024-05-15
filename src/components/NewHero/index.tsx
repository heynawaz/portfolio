'use client';

import { Button } from '../ui/button';

const NewHero = () => {
  //   useEffect(() => {
  //     (async function () {
  //       const cal = await getCalApi({});
  //       cal('ui', { theme: 'light', styles: { branding: { brandColor: '#581C87' } }, hideEventTypeDetails: false, layout: 'month_view' });
  //     })();
  //   }, []);
  return (
    <section className="flex items-center justify-center flex-col text-center h-screen w-full py-20 shadow-sm">
      <div className="w-full flex flex-col justify-center items-center">
        <p className="border border-gray-300 bg-slate-100 w-fit px-4 py-1 rounded-full">👋 Hey, I&apos;m Shah Nawaz</p>
        <h1 className="text-[3vw] font-bold mt-8 tracking-tight text-gray-600">
          I build{' '}
          <span className="bg-gradient-to-r from-purple-100 to-violet-200 rounded-lg px-2 py-1 text-black">
            pixel perfect, engaging and
            <br />
            accessible digital experiences.
          </span>
        </h1>
        <p className="text-xl text-gray-500 mt-8 w-[35%]">
          Make your websites look awesome for the customers and deploy scalable and robust system. Make your websites look awesome for the customers and deploy scalable and robust system. Lorem ipsum
          dolor sit amet consectetur adipisicing elit.
        </p>
        {/* <Cal calLink="shah-nawaz/15min" style={{ width: '100%', height: '100%', overflow: 'scroll' }} config={{ layout: 'month_view', theme: 'light' }} /> */}
      </div>
      <div className="flex gap-6 mt-16">
        <Button size={'default'} className="bg-gray-300 text-black border border-gray-200 hover:bg-purple-800 px-9 py-6 tracking-wider rounded-full">
          <div className="pt-[3px]">Schedule Call</div>
        </Button>
        <Button size={'default'} variant={'outline'} className="hover:bg-purple-100 px-9 py-6 tracking-wider rounded-full" onClick={() => window.open('/assets/pdf/Shah Nawaz - Resume.pdf', '_blank')}>
          <p className="pt-[3px]">Download</p>
        </Button>
      </div>
      {/* <Image src={'/assets/img/circle-globe.png'} alt="globe" height={900} width={900} className="mix-blend-luminosity opacity-50" /> */}
    </section>
  );
};

export default NewHero;
