import React from 'react';
import { StyledButton } from './Button.styles';

export const ButtonLink = ({ children, onClick, borderActive }) => (
  <StyledButton onClick={onClick} type="button" borderActive={borderActive}>
    {children}
  </StyledButton>
);
