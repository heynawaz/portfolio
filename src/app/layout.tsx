import { CustomHead } from '@/components';
import { metadataDetails } from '@/config';
import { ls } from '@/styles/fonts';
import type { Metadata, Viewport } from 'next';
import { Providers } from './providers';
import './globals.css';

export const metadata: Metadata = metadataDetails;

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <CustomHead />
      <body className={`min-h-screen min-h-[100dvh] w-full overflow-x-hidden p-0 m-0 box-border bg-palette-cream ${ls.className}`}>
        <Providers>
          <div className="flex min-h-screen min-h-[100dvh] flex-col items-center w-full">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
