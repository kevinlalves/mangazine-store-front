import styled from "styled-components";

const CloudOverlayStyled = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  img {
    position: fixed;
  }
  img:nth-child(1) {
    top: 0px;
    left: 0;
    width: 370px;
  }
  img:nth-child(2) {
    bottom: 44px;
    right: 0;
    width: 370px;
  }
`;

export default CloudOverlayStyled;
