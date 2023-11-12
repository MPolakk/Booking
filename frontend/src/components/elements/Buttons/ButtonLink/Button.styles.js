import styled from 'styled-components';
export const StyledButton = styled.button`
  color: #ffffff;
  height: 43px;
  min-width: 176px;
  background-color: #339999;
  border-radius: 43px;
  padding-left: 40px;
  padding-right: 40px;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  cursor: pointer;
  ${({ borderActive, theme }) => borderActive ? `border: solid 2px ${theme.roundedbutton.border};` : 'border-style: none;'}
  font-family: ${({ theme }) => theme.font.buttonForm};
  font-size: ${({ theme }) => theme.fontSize.buttonForm};
  transition: all 0.2s ease-out;
  &:hover {
  background-color: white;
  color: #339999;
}
`;
