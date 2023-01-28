import { CartStyled, CloseButton, Title } from "./index.styled";
import { BsCartFill } from "react-icons/bs";
import { RiCloseLine } from "react-icons/ri";
import activateMenuButton from "../../utils/functions/activateMenuButton";
import { useMenu } from "../../providers/MenuProvider";

const CartPage = () => {
  const { statusButton, setStatusButton } = useMenu();

  return (
    <CartStyled active={statusButton.cart}>
      <Title>
        <BsCartFill /> <span>Meu carrinho</span>{" "}
        <CloseButton
          onClick={() => setStatusButton(activateMenuButton("home"))}
        >
          <RiCloseLine />
        </CloseButton>
      </Title>
    </CartStyled>
  );
};

export default CartPage;
