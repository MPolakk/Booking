import styled from 'styled-components';
import { HashLink } from 'react-router-hash-link';
export const StyledButton = styled(HashLink)`
  display: grid;
  place-items: center;
  color: ${({ theme }) => theme.emptybutton.text};
  height: 45px;
  width: 176px;
  background-color: ${({ theme }) => theme.emptybutton.bg};
  border-radius: 43px;
  border: 2px solid ${({ theme }) => theme.emptybutton.border};
  padding-inline: 50px;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 1px;
  cursor: pointer;
  font-family: ${({ theme }) => theme.font.buttonForm};
  font-size: ${({ theme }) => theme.fontSize.buttonForm};
  transition-property: color, background;
  transition-duration: .4s;
  transition-timing-function: ease;
  
  &:hover {
    background: ${({ theme }) => theme.emptybutton.bghover};
    color: ${({ theme }) => theme.emptybutton.texthover};
  }
`
