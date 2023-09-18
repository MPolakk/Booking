<<<<<<< Updated upstream
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, basicTheme } from './';
import { useState } from 'react';

export const Theme = ({ children }) => {
  const [theme, setTheme] = useState({ ...basicTheme, ...lightTheme });

  console.log(theme);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
=======
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, basicTheme } from './';
import { useState } from 'react';

export const Theme = ({ children }) => {
  const [theme, setTheme] = useState({ ...basicTheme, ...lightTheme });

  console.log(theme);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
>>>>>>> Stashed changes
