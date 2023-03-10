import { useState } from "react";
import { signIn } from "../../../services/mangazine-store-api";
import ButtonStyled from "../../../styles/Button.styled";
import FormStyled from "../../../styles/Form.styled";
import InputStyled from "../../../styles/Input.styled";
import validateSchema from "../../../utils/functions/validateSchema";
import { useAuth } from "../../../providers/AuthProvider";
import signInSchema from "../../../schemas/signIn";
import { useNavigate } from "react-router";

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setToken } = useAuth();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const isValidForm = validateSchema({ email, password }, signInSchema);
    if (!isValidForm) {
      return;
    }

    try {
      const { data } = await signIn({ email, password });
      setToken(data.token);
      navigate("/");
    } catch (error) {
      window.alert(error.response?.data);
    }
  };

  return (
    <FormStyled onSubmit={handleSubmit}>
      <InputStyled
        name="email"
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        height="60px"
        width="100%"
      />
      <InputStyled
        name="password"
        placeholder="Senha"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        height="60px"
        width="100%"
      />
      <ButtonStyled height="60px" width="100%" fontSize="1.5rem">
        Entrar
      </ButtonStyled>
    </FormStyled>
  );
};

export default SignInForm;
