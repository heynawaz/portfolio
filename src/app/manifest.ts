import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Shah Nawaz',
    short_name: 'Shah Nawaz - Developer | Designer | Researcher',
    description: 'A trusted software engineer having expertise in providing complex solutions for all formats of web applications.',
    start_url: '/',
    display: 'standalone',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
      },
    ],
  };
}
