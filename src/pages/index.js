import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import ProductPage from "./product";
import CartPage from "./cart";
import { HomeContainer } from "./Index.styled";
const HomePage = () => {
  return (
    <HomeContainer>
      <Header />
      <ProductPage />
       <CartPage />
      <Footer />
    </HomeContainer>
  );
};

export default HomePage;
