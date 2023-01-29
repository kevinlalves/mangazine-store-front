import styled from "styled-components";
import IconStyled from "../../styles/Icon.styled";

export const CartStyled = styled.div`
  width: 100%;
  position: absolute;
  height: calc(100vh - 4rem);
  top: 0;
  right: ${({ active }) => (active ? "0" : "-100%")};
  z-index: 101;
  background-color: ${({ theme }) => theme.colors.main};
  transition: 300ms linear;
  display: flex;
  flex-direction: column;
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
export const ListStyled = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  ${({isLoading})=>isLoading && "justify-content: center"};
  padding: .5rem 2rem;
  gap: 0.5rem;
  height: 27.4rem;
  flex-grow: 1;
  overflow-y: auto;
`;
export const Total = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 .5rem;
  span {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.secondary};
  }
`;
export const CartFooter = styled.footer`
height: 7rem;
padding: 1rem 2rem;
display: flex;
flex-direction: column;
justify-content: space-between;
`;