'use client';

import { useCheckMounted } from '@/share/hooks';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { FC, ReactNode } from 'react';

interface IThemeProvider {
  children: ReactNode;
}

const ThemeProviders: FC<IThemeProvider> = ({ children }) => {
  // const mounted = useCheckMounted();
  // if (!mounted) {
  //   return children;
  // }

  return <NextThemesProvider>{children}</NextThemesProvider>;
};
export default ThemeProviders;
