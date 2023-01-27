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
import useMenu from "../../utils/hooks/useMenu";
import activateMenuButton from "../../utils/functions/activateMenuButton";
const Footer = () => {
  const { statusButton, setStatusButton } = useMenu();
  return (
    <FooterStyled>
      <IconStyled
        status={statusButton.user}
        onClick={() => setStatusButton(activateMenuButton("user"))}
      >
        {statusButton.user ? <HiUser /> : <HiOutlineUser />}
      </IconStyled>
      <IconStyled
        status={statusButton.home}
        onClick={() => setStatusButton(activateMenuButton("home"))}
      >
        <Link to="/">
          {statusButton.home ? (
            <HiBuildingStorefront />
          ) : (
            <HiOutlineBuildingStorefront />
          )}
        </Link>
      </IconStyled>
      <IconStyled
        status={statusButton.orders}
        onClick={() => setStatusButton(activateMenuButton("orders"))}
      >
        {statusButton.orders ? <RiFileListFill /> : <RiFileListLine />}
      </IconStyled>
      <IconStyled
        status={statusButton.cart}
        onClick={() => setStatusButton(activateMenuButton("cart"))}
      >
        {statusButton.cart ? <BsCartFill /> : <BsCart />}
      </IconStyled>
    </FooterStyled>
  );
};
export default Footer;
