import React from 'react';
import { StyledButton } from './Button.styles';

export const ButtonLink = ({ children, props, onClick }) => (
  <StyledButton onClick={onClick} {...props} type="button">
    {children}
  </StyledButton>
);
