import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Shrijal Tamrakar',
  description: 'Shrijal Tamrakar - Software Engineer',
  openGraph: {
    title: 'Shrijal Tamrakar',
    description: 'Shrijal Tamrakar - Software Engineer',
    url: 'https://shrijaltamrakar.com.np',
    siteName: 'Shrijal Tamrakkar',
    images: [
      {
        url: '/assets/shrijal.png', // Must be an absolute URL
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {children} 
        <Analytics />
      </body>
    </html>
  );
}
