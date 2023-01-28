import { Link } from "react-router-dom";
import Form from "./components/Form";

const SignInPage = () => {
  return (
    <>
      <Form />
      <p><Link to="/sign-up">Não possui cadastro? Cadastre-se já!</Link></p>
    </>
  );
};

export default SignInPage;
