import { HeaderStyled, Navbar } from "./Header.styled";
import IconStyled from "../../styles/Icon.styled";
import logo from "../../assets/logo-mangazine-header.png";
import { BiSearchAlt, BiMenu } from "react-icons/bi";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HeaderStyled>
      <Navbar>
        <IconStyled>
          <BiMenu />
        </IconStyled>
        <Link to="/"><img src={logo} alt={`Logo`}/></Link>
        <IconStyled>
          <BiSearchAlt />
        </IconStyled>
      </Navbar>
    </HeaderStyled>
  );
};

export default Header;
