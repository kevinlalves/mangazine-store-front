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
import { Link, useNavigate } from "react-router-dom";
import ButtonStyled from "../../styles/Button.styled";
import ProductCard from "./components/ProductCard";
import { calculateTotalPrice } from "../../utils/functions/calculateTotalPrice";
import { useUser } from "../../providers/UserProvider";
import { useEffect } from "react";

const CartPage = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  const { statusButton, setStatusButton } = useMenu();
  const handleCloseButtonClick = () => {
    setStatusButton(activateMenuButton("home"));
    navigate("/");
  };
  useEffect(() => {
    if (!user && statusButton.cart === true) {
      setStatusButton(activateMenuButton("user"))
      navigate("/sign-in");
      return;
    }
  }, [statusButton, user]);
  return (
    <>
      <CartStyled active={statusButton.cart}>
        {statusButton.cart && (
          <>
            {" "}
            <Title>
              <BsCartFill /> <span>Meu carrinho</span>{" "}
              <CloseButton onClick={() => handleCloseButtonClick()}>
                <RiCloseLine />
              </CloseButton>
            </Title>
            <ListStyled isLoading={!user ? "" : !user.cart.length}>
              {user && user.cart.length ? (
                user.cart.map(({ product, quantity }) => (
                  <ProductCard
                    key={product._id}
                    product={product}
                    quantity={quantity}
                  />
                ))
              ) : (
                <p>Carrinho vazio :(</p>
              )}
            </ListStyled>
            <CartFooter>
              {user && user.cart.length ? (
                <>
                  <Total>
                    <span>Total</span>
                    <span>R$ {calculateTotalPrice(user.cart)}</span>
                  </Total>
                  <ButtonStyled
                    width={"100%"}
                    height="2.8rem"
                    fontSize={"1.5rem"}
                  >
                    <Link to="/checkout">Finalizar compra</Link>
                  </ButtonStyled>
                </>
              ) : (
                ""
              )}
            </CartFooter>
          </>
        )}
      </CartStyled>
      <Footer />
    </>
  );
};

export default CartPage;
