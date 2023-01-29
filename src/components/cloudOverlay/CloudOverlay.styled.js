import styled from "styled-components";

const CloudOverlayStyled = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  img {
    position: fixed;
  }
  img:nth-child(1) {
    top: 0;
    left: 0;
    width: 370px;
  }
  img:nth-child(2) {
    bottom: 0;
    right: 0;
    width: 370px;
  }
`;

export default CloudOverlayStyled;
