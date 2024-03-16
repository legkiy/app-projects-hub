'use client';

import { useCheckMounted } from '@/share/hooks';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
/**
 * Нужно сделать компонент переключателя и использовать сдесь его
 */
const ThemeToggle = () => {
  const { resolvedTheme, theme, setTheme } = useTheme();
  const mounted = useCheckMounted();
  if (!mounted) {
    return null;
  }

  return (
    <div>
      <p>theme: {theme}</p>
      <button
        className="mt-16 px-4 py-2 text-white dark:text-black bg-black dark:bg-white font-semibold rounded-md"
        onClick={() => {
          setTheme(resolvedTheme === 'light' ? 'dark' : 'light');
        }}
      >
        Change Theme
      </button>
    </div>
  );
};

export default ThemeToggle;
