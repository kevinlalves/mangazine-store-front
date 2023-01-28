import styled from "styled-components";

export const InputStyled = styled.input`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.main};
  border: 1px solid transparent;
  border-radius: 1.15rem;
  font-size: 1.5rem;
  padding-left: 1rem;
  z-index: 100;
`;
