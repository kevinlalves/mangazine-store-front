import RatingStars from "../../styles/Stars.styled";
import ButtonStyled from "../../styles/Button.styled";
import {
  ContA,
  ContB,
  ProductInfoStyled,
} from "../../components/productInfoCard/ProductInfo.styled";
import { useUser } from "../../providers/UserProvider";
import { useNavigate } from "react-router-dom";
import { handleAddItem } from "../../utils/functions/handleAddItem";
import { updateUser } from "../../services/mangazine-store-api";
import { useAuth } from "../../providers/AuthProvider";

const ProductInfo = ({ product }) => {
  const {
    name,
    author,
    genre,
    description,
    image,
    rating,
    price,
    reviewCount,
  } = product;
  const navigate = useNavigate();
  const { user, setUser } = useUser();
  const { token } = useAuth();
  const handleAddToCart = async () => {
    if (!user) {
      navigate("/sign-in");
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
    <ProductInfoStyled>
      <p>{author}</p>
      <h1>{name}</h1>
      <p>{genre?.join(", ")}</p>
      <ContA>
        <RatingStars valor={rating} size={24} />
        <h2>({reviewCount})</h2>
      </ContA>
      <ContB>
        <img src={image} alt="Capa do mangá" />{" "}
        <h3>R$ {price ? price.toFixed(2).replace(".", ",") : ""}</h3>
      </ContB>
      <h4>Descrição</h4>
      <p>{description}</p>
      <ButtonStyled onClick={() => handleAddToCart()} fontSize={"22px"}>
        Adicionar ao carrinho
      </ButtonStyled>
    </ProductInfoStyled>
  );
};
export default ProductInfo;
