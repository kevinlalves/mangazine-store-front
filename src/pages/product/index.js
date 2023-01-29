import { useEffect, useState } from "react";
import Alert from "../../components/alert/Alert";
import Arrows from "../../components/arrows/Arrows";
import { StyledHome } from "./Index.styled";
import ProductCard from "./ProductCard";
import { listProducts } from  "../../services/mangazine-store-api"
import per from "../../utils/constants/productsPer"
import LoadingProducts from "../../components/loadingProducts/LoadingProducts";

const ProductPage = () => {
  const [lastPage, setLastPage] = useState(0)
  const [page, setPage] = useState(1)
  const [products, setProducts] = useState([])
  const [showAlert, setShowAlert] = useState(false);
  const handleShowAlert = () => {
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 1500);
  };
  useEffect(() => {
    const promise = listProducts({page, per})
    promise.then((e) => {
      setProducts(e.data.productsList)
      setLastPage(Math.floor((e.data.totalLength-1)/per)+1)
      
    })
    promise.catch((e) => console.log(e))
  }, [page])

  return (
    <StyledHome>
      {products.length===0 ? <LoadingProducts/> : products.map((i) => <ProductCard handleShowAlert={handleShowAlert} key={i._id} name={i.name} image={i.image} rating={i.rating} price={i.price}/>)}
      {products.length!==0 ? <Arrows page={page} setPage={setPage} lastPage={lastPage}/> : ''}
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
