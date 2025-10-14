import type { Metadata } from 'next';
import { Toaster } from '@/components/ui/toaster';
import './globals.css';

export const metadata: Metadata = {
  title: 'SwiftUnion Pārskaitījuma Paziņojums',
  description: 'Jūs esat saņēmis jaunu pārskaitījumu.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="lv">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased min-h-screen bg-[#F5E3E8] bg-gradient-to-br from-[#F8E8EE] to-[#E8E8F8]">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
