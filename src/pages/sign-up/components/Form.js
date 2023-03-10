import { useState } from "react";
import signUpSchema from "../../../schemas/signUp";
import { signUp } from "../../../services/mangazine-store-api";
import FormStyled from "../../../styles/Form.styled";
import validateSchema from "../../../utils/functions/validateSchema";
import InputStyled from "../../../styles/Input.styled";
import ButtonStyled from "../../../styles/Button.styled";
import { useNavigate } from "react-router-dom";

const SignUpForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAdress] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isValidForm = validateSchema({ name, email, address, password, passwordConfirmation }, signUpSchema);
    if (!isValidForm) {
      return;
    }

    try {
      await signUp({ name, email, address, password });

      navigate("/sign-in");
    }
    catch (error) {
      window.alert(error.response?.data);
    }
  };

  return (
    <FormStyled onSubmit={handleSubmit}>
      <InputStyled
        name="name"
        placeholder="Nome"
        value={name}
        onChange={e => setName(e.target.value)}
        height="60px"
        width="100%"
      />
      <InputStyled
        name="email"
        placeholder="E-mail"
        value={email}
        onChange={e => setEmail(e.target.value)}
        height="60px"
        width="100%"
      />
      <InputStyled
        name="address"
        placeholder="Endereço"
        value={address}
        onChange={e => setAdress(e.target.value)}
        height="60px"
        width="100%"
      />
      <InputStyled
        name="password"
        placeholder="Senha"
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        height="60px"
        width="100%"
      />
      <InputStyled
        name="password-confirmation"
        placeholder="Confirme a senha"
        type="password"
        value={passwordConfirmation}
        onChange={e => setPasswordConfirmation(e.target.value)}
        height="60px"
        width="100%"
      />
      <ButtonStyled height="60px" width="100%" fontSize="1.5rem" >Cadastrar</ButtonStyled>
    </FormStyled>
  );
};

export default SignUpForm;
