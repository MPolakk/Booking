import React from 'react';
import { StyledButton } from './Button.styles';

export const ButtonReservation = ({ children, props }) => (
  <StyledButton {...props} type="submit">
    {children}
  </StyledButton>
);
