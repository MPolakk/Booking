import React from 'react';
import { StyledButton } from './Button.styles';

export const ButtonReservation = ({ children, onClick }) => (
  <StyledButton type="submit" onClick={onClick} >
    {children}
  </StyledButton>
);
