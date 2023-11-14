import styled from 'styled-components';
export const StyledButton = styled.button`
  color: #2d2d2d;
  height: 45px;
  min-width: 176px;
  background-color: rgba(255, 255, 255, 0);
  border-radius: 43px;
  border: 2px solid #43828e;
  padding-left: 50px;
  padding-right: 50px;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-align: center;
  cursor: pointer;
  font-family: ${({ theme }) => theme.font.buttonForm};
  font-size: ${({ theme }) => theme.fontSize.buttonForm};
  transition: all 0.4s ease;
  &:hover {
    background-color: #43828e;
    color: #ffffff;
    background: #008a93;
  }
`
