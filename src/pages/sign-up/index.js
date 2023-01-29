import CloudOverlay from "../../components/cloudOverlay/CloudOverlay";
import SignUpForm from "./components/Form";
import { Link } from "react-router-dom";
import SignUpStyled from "./index.styled";
import RightLogo from "./components/rightLogo/RightLogo";
import Footer from "../../components/footer/Footer";

const SignUpPage = () => {
  return (
    <>
      <SignUpStyled>
        <RightLogo />
        <p>Cadastro</p>
        <SignUpForm />
        <p><Link to="/sign-in">Já possui cadastro? Clique aqui!</Link></p>
      </SignUpStyled>
      <Footer />
      <CloudOverlay />
    </>
  );
};

export default SignUpPage;
