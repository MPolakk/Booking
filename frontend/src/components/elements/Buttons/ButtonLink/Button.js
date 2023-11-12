import React from 'react';
import { StyledButton } from './Button.styles';

export const ButtonLink = ({ children, props, onClick, borderActive }) => (
  <StyledButton onClick={onClick} {...props} type="button" borderActive={borderActive}>
    {children}
  </StyledButton>
);
