import CloudOverlayStyled from "./CloudOverlay.styled";
import cloudTop from "../../assets/cloud-top.png";
import cloudBottom from "../../assets/cloud-bottom.png";

const CloudOverlay = () => {
  return (
    <CloudOverlayStyled>
      <img src={cloudTop} alt="cloud in the corner"  />
      <img src={cloudBottom} alt="cloud in the corner" />
    </CloudOverlayStyled>
  );
};

export  default CloudOverlay;
