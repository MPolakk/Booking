import React from 'react';
import { StyledButton } from './Button.styles';

export const ButtonLink = ({ children, borderActive, linkTo }) => (
  <StyledButton to={linkTo} type="button" borderActive={borderActive}>
    {children}
  </StyledButton>
);
