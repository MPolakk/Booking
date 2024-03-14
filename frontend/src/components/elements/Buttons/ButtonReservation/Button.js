import React from 'react';
import { StyledButton } from './Button.styles';

export const ButtonReservation = ({ children, linkTo }) => (
  <StyledButton type="submit" to={linkTo} >
    {children}
  </StyledButton>
);
