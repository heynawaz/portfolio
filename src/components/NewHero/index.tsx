'use client';

import { Testimonials } from '../Testimonials';
import { Button } from '../ui/button';

const NewHero = () => {
  //   useEffect(() => {
  //     (async function () {
  //       const cal = await getCalApi({});
  //       cal('ui', { theme: 'light', styles: { branding: { brandColor: '#581C87' } }, hideEventTypeDetails: false, layout: 'month_view' });
  //     })();
  //   }, []);
  return (
    <section className="flex items-center justify-center flex-col text-center pt-40 pb-20 w-full bg-[url('/assets/img/hero-bg-3.jpg')] bg-no-repeat bg-cover bg-fixed">
      {/* <section className="flex items-center justify-center flex-col text-center pt-40 pb-20 w-full bg-gradient-to-b from-purple-200 from-20% to-white"> */}
      <div className="w-full flex flex-col justify-center items-center">
        <p className="border border-gray-300 bg-slate-100 w-fit px-4 py-1 rounded-full">👋 Hey, I&apos;m Shah Nawaz</p>
        <h1 className="leading-snug text-[3vw] font-bold mt-8 tracking-tight text-purple-950">
          I build pixel perfect, engaging and
          <br />
          accessible digital experiences.
        </h1>
        <p className="text-lg text-gray-800 mt-8 w-[50rem]">
          Make your websites look awesome for the customers and deploy scalable and robust system. Make your websites look awesome for the customers and deploy.
        </p>
        {/* <Cal calLink="shah-nawaz/15min" style={{ width: '100%', height: '100%', overflow: 'scroll' }} config={{ layout: 'month_view', theme: 'light' }} /> */}
      </div>
      <div className="flex gap-6 mt-16">
        <Button size={'default'} className="bg-purple-900 text-white border border-gray-200 hover:bg-purple-800 px-9 py-6 tracking-wider rounded-md">
          <div className="pt-[3px]">Book a free call</div>
        </Button>
        {/* <Button
          size={'default'}
          variant={'outline'}
          className="bg-transparent hover:bg-purple-900 border border-gray-200 hover:text-white px-9 py-6 tracking-wider rounded-lg"
          onClick={() => window.open('/assets/pdf/Shah Nawaz - Resume.pdf', '_blank')}
        >
          <p className="pt-[3px]">Download CV</p>
        </Button> */}
      </div>
      <Testimonials />
      {/* <Image src={'/assets/img/circle-globe.png'} alt="globe" height={900} width={900} className="mix-blend-luminosity opacity-50" /> */}
    </section>
  );
};

export default NewHero;
