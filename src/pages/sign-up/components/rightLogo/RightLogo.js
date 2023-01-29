import RightLogoStyled from "./RightLogo.styled";
import logo from "../../../../assets/logo-mangazine-header.png";

const RightLogo = () => {
  return (
    <RightLogoStyled>
      <img src={logo} alt="mangazine logo" />
    </RightLogoStyled>
  );
};

export default RightLogo;
