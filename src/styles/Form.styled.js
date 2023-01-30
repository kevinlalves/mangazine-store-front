import styled from "styled-components";

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  * {
    margin-bottom: 12px;
  }
  button{
    z-index:1;
  }
  input{
    z-index:1;
  }
  width: 84%;
`;

export default FormStyled;
