import { useEffect, useState, useRef } from "react";
import Alert from "../../components/alert/Alert";
import Arrows from "../../components/arrows/Arrows";
import { StyledHome } from "./Index.styled";
import ProductCard from "./ProductCard";
import { listProducts } from "../../services/mangazine-store-api";
import per from "../../utils/constants/productsPer";
import LoadingProducts from "../../components/loadingProducts/LoadingProducts";
import { useMenu } from "../../providers/MenuProvider";
import CartPage from "../cart";

const ProductPage = () => {
  const [lastPage, setLastPage] = useState(0);
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState([]);
  const { statusButton } = useMenu();
  const [showAlert, setShowAlert] = useState(false);

  const divRef = useRef();
  const handleShowAlert = (parameters) => {
    setShowAlert(parameters);
    setTimeout(() => setShowAlert({ ...parameters, isShow: false }), 1500);
  };
  useEffect(() => {
    const promise = listProducts({ page, per });
    promise.then((e) => {
      setProducts(e.data.productsList);
      setLastPage(Math.floor((e.data.totalLength - 1) / per) + 1);
      divRef.current.scrollTo(0, 0);
    });
    promise.catch((e) => console.log(e));
  }, [page]);

  return (
    <StyledHome ref={divRef}>
      {products.length === 0 ? (
        <LoadingProducts color={`main`}/>
      ) : (
        products.map((i) => (
          <ProductCard
            handleShowAlert={handleShowAlert}
            key={i._id}
            id={i._id}
            name={i.name}
            image={i.image}
            rating={i.rating}
            price={i.price}
            reviewCount={i.reviewCount}
            product={i}
          />
        ))
      )}
      {products.length !== 0 ? (
        <Arrows page={page} setPage={setPage} lastPage={lastPage} />
      ) : (
        ""
      )}
      {showAlert && (
        <Alert
          description={showAlert.description}
          success={showAlert.success}
        />
      )}
      {statusButton && <CartPage />}
    </StyledHome>
  );
};

export default ProductPage;
