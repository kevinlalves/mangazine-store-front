import ButtonStyled from "../../styles/Button.styled";
import { ProductCardStyle, ContB, Cont, ContC } from "./ProductCard.styled";
import RatingStars from "../../styles/Stars.styled";
import { useNavigate } from "react-router";
import { updateUser } from "../../services/mangazine-store-api";
import { useAuth } from "../../providers/AuthProvider";
import { handleAddItem } from "../../utils/functions/handleAddItem";
import { useUser } from "../../providers/UserProvider";
const ProductCard = ({
  handleShowAlert,
  name,
  image,
  price,
  rating,
  product,
}) => {
  const { token } = useAuth();
  const { user, setUser } = useUser();
  const navigate = useNavigate();
  const handleAddToCart = async () => {
    if (!user) {
      handleShowAlert({
        isShow: true,
        description: "Você deve logar para acessar o carrinho!",
        success: false,
      });
      setTimeout(navigate, 1500, "/sign-in");
      return;
    }
    try {
      const newCartAdd = handleAddItem(user.cart, product);
      updateUser({ cart: newCartAdd }, token);
      setUser({ ...user, cart: newCartAdd });
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
