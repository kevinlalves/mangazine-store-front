import { Item, Name } from "../index.styled";

const ProductCard = ({product, quantity}) => {
  return (
    <Item>
      <Name>{product.name}</Name>
      <p>{quantity}</p>
      <p>{product.price.toFixed(2).replace(".",",")}</p>
    </Item>
  );
};

export default ProductCard;
