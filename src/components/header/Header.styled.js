import styled from "styled-components";

export const HeaderStyled = styled.header`
  background-color: ${({ theme }) => theme.colors.main};
  padding: 0.5rem;
  height: 5rem;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  z-index: 4;
`;

export const Navbar = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    width: 9.25rem;
  }
`;

export const IconButton = styled.button`
    color: ${({theme})=>theme.colors.secondary};
    background-color: transparent;
    font-size: 30px;
    display: flex;
`;
