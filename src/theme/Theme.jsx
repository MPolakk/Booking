import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, basicTheme } from './';
import { useState } from 'react';

export const Theme = ({ children }) => {
  const [theme, setTheme] = useState({ ...basicTheme, ...lightTheme });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
