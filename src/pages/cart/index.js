import { CartStyled, CloseButton, Title } from "./index.styled";
import { BsCartFill } from "react-icons/bs";
import { RiCloseLine } from "react-icons/ri";
import activateMenuButton from "../../utils/functions/activateMenuButton";
import { useMenu } from "../../providers/MenuProvider";
import Footer from "../../components/footer/Footer";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const { statusButton, setStatusButton } = useMenu();
  const navigate = useNavigate();

  const handleClick = () => {
    setStatusButton(activateMenuButton("home"))

    navigate("/");
  };

  return (
    <>
      <CartStyled active={statusButton.cart}>
        <Title>
          <BsCartFill /> <span>Meu carrinho</span>{" "}
          <CloseButton
            onClick={handleClick}
          >
            <RiCloseLine />
          </CloseButton>
        </Title>
      </CartStyled>
      <Footer />
    </>
  );
};

export default CartPage;
