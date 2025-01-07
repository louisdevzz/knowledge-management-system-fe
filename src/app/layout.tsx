import { Space_Grotesk } from 'next/font/google';
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import './globals.css'
import type { Metadata } from 'next';

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'KMS - Knowledge Management System',
  description: 'A modern platform for knowledge sharing and community discussions',
  keywords: ['Knowledge Management', 'Community', 'Learning'],
  authors: [{ name: 'Your Name' }],
  creator: 'Your Company Name',
  publisher: 'Your Company Name',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://your-domain.com',
    siteName: 'KMS',
    title: 'KMS - Knowledge Management System',
    description: 'A modern platform for knowledge sharing and community discussions',
    images: [
      {
        url: 'https://your-domain.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'KMS Preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KMS - Knowledge Management System',
    description: 'A modern platform for knowledge sharing and community discussions',
    images: ['https://your-domain.com/twitter-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={spaceGrotesk.className}>
      <body>
        <Header />
        <main className="min-h-screen pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
