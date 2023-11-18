import styled from 'styled-components';
import { HashLink } from 'react-router-hash-link';
export const StyledButton = styled(HashLink)`
  color: ${({ theme }) => theme.roundedbutton.text};
  height: 43px;
  min-width: 176px;
  background-color: ${({ theme }) => theme.roundedbutton.bg};;
  border-radius: 43px;
  padding-inline: 40px;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  cursor: pointer;
  ${({ borderActive, theme }) => borderActive ? `border: solid 2px ${theme.roundedbutton.border};` : 'border-style: none;'}
  font-family: ${({ theme }) => theme.font.buttonForm};
  font-size: ${({ theme }) => theme.fontSize.buttonForm};
  transition-property: color, background;
  transition-duration: .2s;
  transition-timing-function: ease-out;
  &:hover {
  background-color: ${({ theme }) => theme.roundedbutton.bghover};
  color: ${({ theme }) => theme.roundedbutton.texthover};
}
`;
