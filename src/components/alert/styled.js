import styled from "styled-components";

export const AlertContent = styled.div`
  position: fixed;
  bottom: 4.5rem;
  width: 90%;
  align-self: center;
  height: 3.5rem;
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.darkGrey};
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  z-index: 10;
  & > span {
    color: ${({ success, theme }) =>
      success ? theme.colors.success : theme.colors.danger};
    font-size: 1.5rem;
  }
  & > p {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.secondary};
  }
`;
