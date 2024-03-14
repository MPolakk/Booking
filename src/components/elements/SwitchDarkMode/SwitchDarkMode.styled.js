import styled from 'styled-components';

export const SwitchContainer = styled.label`
  position: absolute;
  top: 10px;
  right: 10px;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  background-color: ${({ theme }) => theme.switchBar.bg};
  border-radius: ${props => props.height}px;
`;

export const SwitchInput = styled.input.attrs({ type: 'checkbox' })`
  opacity: 0;
`;

export const SwitchBar = styled.div`
  position: absolute;
  left: ${props => props.height * 0.5}px;
  top: ${props => props.height * 0.5}px;
  width: ${props => props.height * 0.7}px;
  height: ${props => props.height * 0.7}px;
  transform: translate(
    ${({ height, width, checked }) =>
      !checked ? -height * 0.7 * 0.5 : -height * (1 + 0.7 * 0.5) + width}px,
    -50%
  );
  border-radius: 50%;
  background-color: ${({ theme }) => theme.switchBar.bar};
  transition: transform 300ms ease;
`;
