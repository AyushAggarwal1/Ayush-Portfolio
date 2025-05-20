'use client';

import { ReactNode, useEffect, useState } from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

interface ThemeProviderProps {
  children: ReactNode;
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
  const [mounted, setMounted] = useState(false);

  // This effect ensures hydration is complete to prevent UI flicker
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Render placeholder or simplified UI while hydrating
    return <div className="hidden">{children}</div>;
  }

  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </NextThemesProvider>
  );
} 