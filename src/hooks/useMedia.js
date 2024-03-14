import { useEffect, useState } from 'react';
import { useTheme } from 'styled-components';

const initialState = {
  mobile: false,
  tablet: false,
  desktop: false,
};

export const useMediaQuery = query => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    window.addEventListener('resize', listener);
    console.log('foobar');
    return () => window.removeEventListener('resize', listener);
  }, []);

  return matches;
};

export const useMedia = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(`(min-width: ${theme.mbp.desktop}px)`);
  const isTablet = useMediaQuery(`(min-width: ${theme.mbp.tablet}px)`);
  const isMobile = useMediaQuery(`(min-width: ${theme.mbp.mobile}px)`);

  return { isDesktop, isTablet, isMobile };
};
