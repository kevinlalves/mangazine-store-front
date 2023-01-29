import { Link } from "react-router-dom";
import {
  HiUser,
  HiOutlineUser,
  HiBuildingStorefront,
  HiOutlineBuildingStorefront,
} from "react-icons/hi2";
import { RiFileListLine, RiFileListFill } from "react-icons/ri";
import { BsCartFill, BsCart } from "react-icons/bs";
import IconStyled from "../../styles/Icon.styled";
import FooterStyled from "./Footer.styled";
import activateMenuButton from "../../utils/functions/activateMenuButton";
import { useMenu } from "../../providers/MenuProvider";

const Footer = () => {
  const { statusButton, setStatusButton } = useMenu();

  return (
    <FooterStyled>
      <IconStyled
        status={statusButton.user}
        onClick={() => setStatusButton(activateMenuButton("user"))}
      >
        <Link to="/sign-in">
          {statusButton.user ? <HiUser /> : <HiOutlineUser />}
        </Link>
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
        <Link to="/checkout">
          {statusButton.orders ? <RiFileListFill /> : <RiFileListLine />}
        </Link>
      </IconStyled>
      <IconStyled
        status={statusButton.cart}
        onClick={() => setStatusButton(activateMenuButton("cart"))}
      >
        <Link to="/cart">
          {statusButton.cart ? <BsCartFill /> : <BsCart />}
        </Link>
      </IconStyled>
    </FooterStyled>
  );
};

export default Footer;
