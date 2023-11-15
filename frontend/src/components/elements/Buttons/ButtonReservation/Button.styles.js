import styled from 'styled-components';
export const StyledButton = styled.button`
  color: ${({ theme }) => theme.emptybutton.text};
  height: 45px;
  min-width: 176px;
  background-color: transparent;
  border-radius: 43px;
  border: 2px solid ${({ theme }) => theme.emptybutton.border};
  padding-inline: 50px;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-align: center;
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
