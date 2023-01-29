import CloudOverlay from "../../components/cloudOverlay/CloudOverlay";
import SignUpForm from "./components/Form";
import logo from "../../assets/logo-mangazine-header.png";
import { Link } from "react-router-dom";
import SignUpStyled from "./index.styled";

const SignUpPage = () => {
  return (
    <>
      <SignUpStyled>
        <img src={logo} alt="mangazine logo" />
        <SignUpForm />
        <p><Link to="/sign-in">Já possui cadastro? Clique aqui!</Link></p>
      </SignUpStyled>
      <CloudOverlay />
    </>
  );
};

export default SignUpPage;
