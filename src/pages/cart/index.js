import { CartContainer, CloseButton, Title } from "./Index.styled";
import { BsCartFill } from "react-icons/bs";
import { RiCloseLine } from "react-icons/ri";
import useMenu from "../../utils/hooks/useMenu";
import activateMenuButton from "../../utils/functions/activateMenuButton";
const CartPage = () => {
  const { statusButton, setStatusButton } = useMenu();

  return (
    <CartContainer active={statusButton.cart}>
      <Title>
        <BsCartFill /> <span>Meu carrinho</span>{" "}
        <CloseButton
          onClick={() => setStatusButton(activateMenuButton("home"))}
        >
          <RiCloseLine />
        </CloseButton>
      </Title>
    </CartContainer>
  );
};
export default CartPage;
