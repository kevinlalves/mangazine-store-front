import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import ProductPage from "./product";
import HomeStyled from "./index.styled";

const HomePage = () => {
  return (
    <HomeStyled>
      <Header />
      <ProductPage />
      <Footer />
    </HomeStyled>
  );
};

export default HomePage;
