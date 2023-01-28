import styled from "styled-components";
import IconStyled from "../../styles/Icon.styled";

export const CartStyled = styled.div`
  width: 100%;
  position: absolute;
  height: 100vh;
  top: 0;
  right: ${({ active }) => (active ? "0" : "-100%")};
  z-index: 101;
  background-color: ${({ theme }) => theme.colors.main};
  transition: 300ms linear;
`;

export const Title = styled.div`
  position: relative;
  font-size: 30px;
  display: flex;
  align-items: center;
  padding: 1rem;
  color: ${({ theme }) => theme.colors.secondary};
  gap: 0.8rem;
  span {
    font-size: 25px;
  }
`;

export const CloseButton = styled(IconStyled)`
  position: absolute;
  top: 0.5rem;
  right: 0.2rem;
  width: 2rem;
`;
