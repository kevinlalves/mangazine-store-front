import styled from "styled-components";

const SignUpStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.main};
  * {
    margin-bottom: 20px;
  }
  p:nth-child(2) {
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 45px;
  }
  p:nth-child(4) {
    color: white;
    font-size: 18px;
    text-decoration: underline;
    z-index: 3;
  }
`;

export default SignUpStyled;
