import { useMedia, useMediaQuery } from '../hooks/useMedia';

export const FooBar = () => {
  const { isDesktop, isTablet, isMobile } = useMedia('(min-width: 480px)');

  return (
    <div
      style={{
        position: 'absolute',
        right: '10px',
        bottom: '10px',
        margin: 0,
        padding: 0,
      }}
    >
      <h3>
        {isDesktop
          ? 'DESKTOP'
          : isTablet
          ? 'TABLET'
          : isMobile
          ? 'MOBILE'
          : 'NOT'}
      </h3>
    </div>
  );
};
