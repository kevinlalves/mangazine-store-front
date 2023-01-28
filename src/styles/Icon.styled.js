import styled from "styled-components";

const IconStyled = styled.button`
  color: ${({ theme, status }) =>
    status ? theme.colors.selected : theme.colors.secondary};
  background-color: transparent;
  font-size: 30px;
  display: flex;
`;

export default IconStyled;
