import { SingleProductPageStyled } from "./SingleProductPage.styled";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getSingleProduct } from "../../services/mangazine-store-api";
import ProductInfo from "../../components/productInfoCard/ProductInfo";
import { StyledHome } from "./Index.styled";
import CartPage from "../cart";
const SingleProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    const promise = getSingleProduct({ id });
    promise.then((e) => {
      setProduct(e.data);
    });
    promise.catch((e) => console.log(e));
  }, [id]);

  return (
    <StyledHome>
      <Header />
      <SingleProductPageStyled>
        <ProductInfo product={product} />
      </SingleProductPageStyled>
      <CartPage />
      <Footer />
    </StyledHome>
  );
};

export default SingleProductPage;
