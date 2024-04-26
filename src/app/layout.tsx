import { Inconsolata } from 'next/font/google';
import type { Metadata } from 'next';

import './globals.scss';

export const metadata: Metadata = {
  title: 'Rodrigo Ventura | Portfolio',
  description: 'Rodrigo Ventura front-end developer portfolio',
};

const font = Inconsolata({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
});

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="pt-Br" className={font.className}>
      <head>
        <link rel="icon" href="/favicon.svg?" sizes="any" />
      </head>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
