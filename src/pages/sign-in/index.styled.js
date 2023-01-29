import styled from "styled-components";

const SignInStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.main};
  * {
    margin-bottom: 20px;
  }
  img {
    width: 70%;
  }
  p {
    color: white;
    font-size: 18px;
    text-decoration: underline;
    z-index: 3;
  }
`;

export default SignInStyled;
