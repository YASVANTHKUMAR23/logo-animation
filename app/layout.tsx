import type { Metadata } from 'next';
import { Inter, Luckiest_Guy } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const luckiestGuy = Luckiest_Guy({ 
  weight: '400', 
  subsets: ['latin'],
  variable: '--font-display'
});

export const metadata: Metadata = {
  title: 'Ai Developer Logo',
  description: 'Animated Ai Developer Logo',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${luckiestGuy.variable}`}>
      <body className="bg-[#0e0e0e] text-white antialiased min-h-screen flex flex-col" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
