import styled from 'styled-components';
import { basicTheme } from '../../../../theme/basicTheme';
export const StyledButton = styled.button`
  color: #ffffff;
  height: 43px;
  width: 170px;
  background-color: #339999;
  border-radius: 43px;
  padding-left: 40px;
  padding-right: 40px;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  cursor: pointer;
  border-style: none;
  border-color: #43828e;
  font-family: ${basicTheme.font.buttonCard};
  transition: all 0.2s ease-out;
  font-size: ${basicTheme.fontSize.buttonCard};
  &:hover {
    background-color: white;
    color: #339999;
  }
`;
