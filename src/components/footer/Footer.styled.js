import styled from "styled-components";

const FooterStyled = styled.footer`
  background-color: ${({ theme }) => theme.colors.main};
  padding: 1rem;
  height: 4rem;
  width: 100%;
  position: fixed;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  z-index:3;
  justify-content: space-between;
  a{
    display: flex;
  }
`;

export default FooterStyled;
