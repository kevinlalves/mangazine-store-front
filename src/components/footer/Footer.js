import { Link } from "react-router-dom";
import {
  HiUser,
  HiOutlineUser,
  HiBuildingStorefront,
  HiOutlineBuildingStorefront,
} from "react-icons/hi2";
import { RiFileListLine, RiFileListFill } from "react-icons/ri";
import { BsCartFill, BsCart } from "react-icons/bs";
import { IconStyled } from "../../styles/Icon.styled";
import { FooterStyled } from "./Footer.styled";
const Footer = () => {
  return (
    <FooterStyled>
        <IconStyled>
          <HiOutlineUser />
        </IconStyled>
        <IconStyled>
         <Link to="/"><HiOutlineBuildingStorefront /></Link>
        </IconStyled>
        <IconStyled>
          <RiFileListLine />
        </IconStyled>
        <IconStyled>
          <BsCart />
        </IconStyled>
    </FooterStyled>
  );
};
export default Footer;
