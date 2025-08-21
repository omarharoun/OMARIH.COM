import './globals.css';
import React from 'react';

export const metadata = {
  title: 'IHSAN - Author, Creator & Productivity Expert',
  description: 'I create in-depth tutorials and templates that help people be more productive and organized. Learn fundamentals, get templates, and level up your productivity.',
  keywords: 'productivity, templates, tutorials, organization, learning, fundamentals, second brain, creator tools',
  author: 'IHSAN',
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'IHSAN - Author, Creator & Productivity Expert',
    description: 'I create in-depth tutorials and templates that help people be more productive and organized.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IHSAN - Author, Creator & Productivity Expert',
    description: 'I create in-depth tutorials and templates that help people be more productive and organized.',
  }
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
        <meta name="theme-color" content="#3182ce" />
      </head>
      <body>{children}</body>
    </html>
  );
}
