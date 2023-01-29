import { Link } from "react-router-dom";
import SignInForm from "./components/Form";
import logo from "../../assets/logo-mangazine-header.png";
import SignInStyled from "./index.styled";
import CloudOverlay from "../../components/cloudOverlay/CloudOverlay";
import Footer from "../../components/footer/Footer";

const SignInPage = () => {
  return (
    <>
      <SignInStyled>
        <img src={logo} alt="mangazine logo" />
        <SignInForm />
        <p><Link to="/sign-up">Não possui cadastro? Cadastre-se já!</Link></p>
      </SignInStyled>
      <Footer />
      <CloudOverlay />
    </>

  );
};

export default SignInPage;
