import ButtonStyled from "../../../styles/Button.styled";
import {
  PriceStyled,
  QuantityStyled,
  ProductStyled,
  Title,
} from "./Product.styled";
const ProductCard = ({ product, quantity }) => {
  const { name, image, price } = product;
  return (
    <ProductStyled>
      <img src={image} alt={`Mangá`} />
      <div>
        <Title>{name}</Title>
        <div>
          <QuantityStyled>
            <ButtonStyled
              width={`1.25rem`}
              height={`1.25rem`}
              fontSize={`12px`}
            >
              -
            </ButtonStyled>
            <span>{quantity}</span>
            <ButtonStyled
              width={`1.25rem`}
              height={`1.25rem`}
              fontSize={`12px`}
            >
              +
            </ButtonStyled>
          </QuantityStyled>
          <PriceStyled>
            <span>R$ {price}</span>
          </PriceStyled>
        </div>
      </div>
    </ProductStyled>
  );
};
export default ProductCard;
