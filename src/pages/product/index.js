import { StyledHome } from "./Index.styled";
import ProductCard from "./ProductCard";

const ProductPage = () => {
  return (
    <StyledHome>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
    </StyledHome>
  );
};

export default ProductPage;
