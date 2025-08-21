import './globals.css';
import React from 'react';

export const metadata = {
  title: 'IHSAN - Author, Creator & Productivity Expert',
  description: 'I create in-depth tutorials and templates that help people be more productive and organized. Learn fundamentals, get templates, and level up your productivity.',
  keywords: 'productivity, templates, tutorials, organization, learning, fundamentals, second brain, creator tools',
  author: 'IHSAN',
  robots: 'index, follow',
  openGraph: {
    title: 'IHSAN - Author, Creator & Productivity Expert',
    description: 'I create in-depth tutorials and templates that help people be more productive and organized.',
    type: 'website',
    locale: 'en_US',
  }
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#3182ce' },
    { media: '(prefers-color-scheme: dark)', color: '#0d1524' }
  ]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        {/* Icons served from public/ */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" href="/favicon-32.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="color-scheme" content="light dark" />
      </head>
      <body>{children}</body>
    </html>
  );
}
