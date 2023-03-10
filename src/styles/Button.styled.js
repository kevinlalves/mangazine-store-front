import styled from "styled-components";

const ButtonStyled = styled.button`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background-color: ${({ theme, color }) =>
    color ? theme.colors[color] : theme.colors.button};
  color: ${({ theme }) => theme.colors.secondary};
  border: 1px solid transparent;
  border-radius: 1.15rem;
  font-size: ${({ fontSize }) => fontSize};
  transition: 150ms linear;
  z-index: 100;
  &:hover {
    opacity: 0.95;
  }
`;

export default ButtonStyled;
