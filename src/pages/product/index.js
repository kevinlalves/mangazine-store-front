import { useEffect, useState } from "react";
import Alert from "../../components/alert/Alert";
import Arrows from "../../components/arrows/Arrows";
import { StyledHome } from "./Index.styled";
import ProductCard from "./ProductCard";
import useHome from "../../utils/hooks/useHome";
import { getProducts } from "../../services/mangazine-store-api";
import per from "../../utils/constants/productsPer";
import LoadingProducts from "../../components/loadingProducts/LoadingProducts";
const ProductPage = () => {
  const [showAlert, setShowAlert] = useState(false);
  const handleShowAlert = () => {
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 1500);
  };
  const { page, products, setProducts } = useHome();
  useEffect(() => {
    const promise = getProducts(page, per);
    promise.then((e) => {
      setProducts(e.data);
    });
    promise.catch((e) => console.log(e));
  }, [page, setProducts]);

  return (
    <StyledHome>
      {products.length === 0 ? (
        <LoadingProducts color={`main`} />
      ) : (
        products.map((i) => (
          <ProductCard
            handleShowAlert={handleShowAlert}
            name={i.name}
            image={i.image}
            rating={i.rating}
            price={i.price}
          />
        ))
      )}
      {products.length !== 0 ? <Arrows /> : ""}
      {showAlert && (
        <Alert
          description={`Adicionado ao carrinho com sucesso`}
          success={true}
        />
      )}
    </StyledHome>
  );
};

export default ProductPage;
