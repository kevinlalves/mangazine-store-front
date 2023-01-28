import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import ProductPage from "./product";
import CartPage from "./cart";
import HomeStyled from "./Index.styled";
const HomePage = () => {
  return (
    <HomeStyled>
      <Header />
      <ProductPage />
       <CartPage />
      <Footer />
    </HomeStyled>
  );
};

export default HomePage;
