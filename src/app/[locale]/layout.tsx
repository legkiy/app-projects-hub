import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import StoreProvider from '@/providers/StoreProvider';
import { Menu } from '@/widgets';
import MainProvider from '@/providers/MainProvider';
import { getAllPages } from '@/features';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const pagesList = getAllPages();

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <StoreProvider>
          <MainProvider>
            <Menu pagesList={pagesList} locale={locale}/>
            {children}
          </MainProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
