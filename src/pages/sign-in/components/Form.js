import { useState } from "react";
import { signIn } from "../../../services/mangazine-store-api";
import { ButtonStyled } from "../../../styles/Button.styled";
import FormStyled from "../../../styles/Form.styled";
import { InputStyled } from "../../../styles/Input.styled";
import validateSchema from "../../../utils/functions/validateSchema";

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isValidForm = validateSchema({ email, password });
    if (!isValidForm) {
      return;
    }

    try {
      const { token } = await signIn({ email, password });
    }
    catch (error) {
      window.alert(error);
    }
  }

  return (
    <FormStyled onSubmit={handleSubmit}>
      <InputStyled
        name="email"
        placeholder="E-mail"
        value={email}
        onChange={e => setEmail(e.target.value)}
        height="60px"
        width="100%"
      />
      <InputStyled
        name="password"
        placeholder="Senha"
        value={password}
        onChange={e => setPassword(e.target.value)}
        height="60px"
        width="100%"
      />
      <ButtonStyled>Entrar</ButtonStyled>
    </FormStyled>
  );
};

export default Form;
