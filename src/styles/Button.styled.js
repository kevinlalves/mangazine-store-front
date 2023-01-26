import styled from "styled-components";

export const ButtonStyled = styled.button`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background-color: ${({ theme }) => theme.colors.button};
  color: ${({ theme }) => theme.colors.secondary};
  border: 1px solid transparent;
  border-radius: 1.15rem;
  font-size: ${({fontSize})=>fontSize};
  transition: 150ms linear;
  &:hover {
    opacity: 0.95;
  }
`;
