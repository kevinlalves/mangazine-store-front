import {
  CartStyled,
  CloseButton,
  Title,
  ListStyled
} from "./index.styled";
import { BsCartFill } from "react-icons/bs";
import { RiCloseLine } from "react-icons/ri";
import activateMenuButton from "../../utils/functions/activateMenuButton";
import { useMenu } from "../../providers/MenuProvider";
import Footer from "../../components/footer/Footer";
import { useNavigate } from "react-router-dom";
import ProductCard from "./components/ProductCard";
import { useUser } from "../../providers/UserProvider";
import { useEffect } from "react";
import isEmpty from "../../utils/functions/isEmpty";

const CartPage = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  const { statusButton, setStatusButton } = useMenu();
  const handleCloseButtonClick = () => {
    setStatusButton(activateMenuButton("home"));
    navigate("/");
  };
  useEffect(() => {
    if ((!user || isEmpty(user)) && statusButton.cart) {
      setStatusButton(activateMenuButton("user"))
      navigate("/sign-in");
      return;
    }
  }, [statusButton, user, navigate, setStatusButton]);
  return (user && !isEmpty(user)) && (
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
            <ListStyled isLoading={!user ? "" : !user?.cart.length}>
              {user && user?.cart.length ? (
                user?.cart.map(({ product, quantity }) => (
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
          </>
        )}
      </CartStyled>
      <Footer />
    </>
  );
};

export default CartPage;
