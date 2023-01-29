import ButtonStyled from "../../styles/Button.styled";
import { ProductCardStyle, ContB, Cont, ContC } from "./ProductCard.styled";
import RatingStars from "../../styles/Stars.styled";
import { useNavigate } from "react-router";
import { useCart } from "../../providers/CartProvider";
import { updateUser } from "../../services/mangazine-store-api";
import { useAuth } from "../../providers/AuthProvider";
const ProductCard = ({ handleShowAlert,id, name, image, price, rating }) => {
  const { token } = useAuth();
  const { localCart, setLocalCart } = useCart();
  const navigate = useNavigate();
  const handleAddToCart = async () => {
    if (!token) {
      handleShowAlert({
        isShow: true,
        description: "Você deve logar para acessar o carrinho!",
        success: false,
      });
      setTimeout(navigate, 1500, "/sign-in");
      return;
    }
    try {
      const isExistProduct = localCart.cart.some(
        (c) => c.product.name === name
      );
      let newCartAdd = [];
      if (!isExistProduct) {
        newCartAdd = [
          ...localCart.cart,
          { product: { id, name, image, price }, quantity: 1 },
        ];
      } else {
        newCartAdd = localCart.cart.map((c) =>
          c.product.name === name ? { ...c, quantity: c.quantity + 1 } : c
        );
      }
      await updateUser({ cart: newCartAdd }, token);
      setLocalCart({ cart: newCartAdd });
    } catch (error) {
      window.alert(error.response?.data);
    }
  };
  return (
    <ProductCardStyle>
      <img src={image} alt="Capa do mangá" />
      <ContB>
        <Cont>
          <h1>{name}</h1>
          <ContC>
            <RatingStars valor={rating} size={24} />
            <h3>(2)</h3>
          </ContC>
          <h2>R$ {price ? price.toFixed(2).replace(".", ",") : ""}</h2>
        </Cont>
        <p>Mais detalhes</p>
        <ButtonStyled
          onClick={() => handleAddToCart()}
          width={"100%"}
          fontSize={"14px"}
          height={"40px"}
        >
          Adicionar ao carrinho
        </ButtonStyled>
      </ContB>
    </ProductCardStyle>
  );
};
export default ProductCard;
