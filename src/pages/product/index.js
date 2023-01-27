import { useState } from "react";
import Alert from "../../components/alert/Alert";
import { StyledHome } from "./Index.styled";
import ProductCard from "./ProductCard";

const ProductPage = () => {
  const [showAlert, setShowAlert] = useState(false);
  const handleShowAlert = () => {
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 1500);
  };
  return (
    <StyledHome>
      <ProductCard handleShowAlert={handleShowAlert} />
      <ProductCard />
      <ProductCard />
      <ProductCard />
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
