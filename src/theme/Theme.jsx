import { ThemeProvider } from 'styled-components';
import { lightTheme, basicTheme, darkTheme } from './';
import { useState, useEffect } from 'react';
import { useDarkMode } from '../hooks';
import { useDispatch } from 'react-redux';
import { setMode, modeType } from '../redux';

export const Theme = ({ children }) => {
  const dispatch = useDispatch();
  const [theme, setTheme] = useState({ ...basicTheme, ...lightTheme });
  const { mode } = useDarkMode();

  useEffect(() => {
    const localMode = localStorage.getItem('mode');
    dispatch(setMode(localMode));

    if (mode === modeType.dark) {
      setTheme({ ...basicTheme, ...darkTheme });
      return;
    }
    setTheme({ ...basicTheme, ...lightTheme });
  }, [mode]);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
