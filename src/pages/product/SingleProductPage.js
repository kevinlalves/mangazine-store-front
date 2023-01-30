import { SingleProductPageStyled } from "./SingleProductPage.styled";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { getSingleProduct } from "../../services/mangazine-store-api";
import { useEffect } from "react";
import ProductInfo from "../../components/productInfoCard/ProductInfo";
import { StyledHome } from "./Index.styled";
const SingleProductPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({})
    useEffect(() => {
        const promise = getSingleProduct({ id });
        promise.then((e) => {
          setProduct(e.data)
        })
        promise.catch((e) => console.log(e))
      },[])
    
    return (
        <StyledHome>
          <Header />
          <SingleProductPageStyled>
            <ProductInfo product={product}/>
          </SingleProductPageStyled>
          <Footer />
        </StyledHome>
      );
}

export default SingleProductPage