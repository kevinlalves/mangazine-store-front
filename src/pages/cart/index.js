import {
  CartStyled,
  CloseButton,
  Title,
  ListStyled,
  Total,
  CartFooter,
} from "./index.styled";
import { BsCartFill } from "react-icons/bs";
import { RiCloseLine } from "react-icons/ri";
import activateMenuButton from "../../utils/functions/activateMenuButton";
import { useMenu } from "../../providers/MenuProvider";
import Footer from "../../components/footer/Footer";
import {  useNavigate } from "react-router-dom";
import ButtonStyled from "../../styles/Button.styled";
import ProductCard from "./components/ProductCard";
import { useState } from "react";
import LoadingProducts from "../../components/loadingProducts/LoadingProducts";

const CartPage = () => {
  const navigate = useNavigate()
  const { statusButton, setStatusButton } = useMenu();
  const [cart, setCart] = useState(null);
  const handleCloseButtonClick = () =>{
    setStatusButton(activateMenuButton("home"));
    navigate("/")
  }
  return (
    <>
      <CartStyled active={statusButton.cart}>
        {statusButton.cart && (
          <>
            {" "}
            <Title>
              <BsCartFill /> <span>Meu carrinho</span>{" "}
              <CloseButton
                onClick={() => handleCloseButtonClick()}
              >
                <RiCloseLine />
              </CloseButton>
            </Title>
            <ListStyled isLoading={!cart}>
              {cart ? (
                cart.map(({ product, quantity }) => (
                  <ProductCard
                    key={product._id}
                    product={product}
                    quantity={quantity}
                  />
                ))
              ) : (
                <LoadingProducts color={`secondary`} />
              )}
            </ListStyled>
            <CartFooter>
              <Total>
                <span>Total</span>
                <span>R$ {"21,90"}</span>
              </Total>
              <ButtonStyled width={"100%"} height="2.8rem" fontSize={"1.5rem"}>
                Finalizar compra
              </ButtonStyled>
            </CartFooter>
          </>
        )}
      </CartStyled>
      <Footer />
    </>
  );
};

export default CartPage;
