import ButtonStyled from "../../styles/Button.styled";
import { ProductCardStyle, ContB, Cont, ContC } from "./ProductCard.styled";
import RatingStars from "../../styles/Stars.styled";

const ProductCard = ({ handleShowAlert, name, image, price, rating }) => {
  
  return (
    <ProductCardStyle>
      <img
        src={image}
        alt="Capa do mangá"
      />
      <ContB>
        <Cont>
          <h1>{name}</h1>
          <ContC>
            <RatingStars valor={rating} size={24} />
            <h3>(2)</h3>
          </ContC>
          <h2>R$ {price ? price.toFixed(2).replace('.',',') : ''}</h2>
        </Cont>
        <p>Mais detalhes</p>
        <ButtonStyled
          onClick={() => handleShowAlert()}
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
