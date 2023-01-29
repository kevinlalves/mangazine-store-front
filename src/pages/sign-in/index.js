import { Link } from "react-router-dom";
import Form from "./components/Form";
import logo from "../../assets/logo-mangazine-header.png";
import SignInStyled from "./index.styled";
import CloudOverlay from "../../components/cloudOverlay/CloudOverlay";

const SignInPage = () => {
  return (
    <>
      <SignInStyled>
        <img src={logo} alt="mangazine logo" />
        <SignInForm />
        <p><Link to="/sign-up">Não possui cadastro? Cadastre-se já!</Link></p>
      </SignInStyled>
      <CloudOverlay />
    </>

  );
};

export default SignInPage;
