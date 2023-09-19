import { ThemeProvider } from 'styled-components';
import { lightTheme, basicTheme, darkTheme } from './';
import { useEffect, useState } from 'react';
import { modeType, useDarkMode } from '../hooks';

export const Theme = ({ children }) => {
  const [theme, setTheme] = useState({ ...basicTheme, ...lightTheme });
  const [mode, setMode] = useDarkMode();

  useState(() => {
    const localMode = localStorage.getItem('mode');
    if (localMode) {
      setMode(localMode);
    }
    localStorage.setItem('mode', mode());

    const themeMode = mode();
    console.log(themeMode);
    if (themeMode === modeType.dark) {
      setTheme({ ...basicTheme, ...darkTheme });
      return;
    }
    setTheme({ ...basicTheme, ...lightTheme });
  }, [mode]);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
