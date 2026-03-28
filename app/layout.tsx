import type { Metadata } from 'next';
import { Inter, Luckiest_Guy, Syne, Instrument_Sans } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const luckiestGuy = Luckiest_Guy({ 
  weight: '400', 
  subsets: ['latin'],
  variable: '--font-display'
});
const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne'
});
const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  variable: '--font-instrument'
});

export const metadata: Metadata = {
  title: 'Nolan Blake – UI/UX Designer',
  description: 'Nolan Blake – UI/UX Designer Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${luckiestGuy.variable} ${syne.variable} ${instrumentSans.variable}`}>
      <body className="bg-[#0a0a0a] text-white antialiased min-h-screen flex flex-col" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
