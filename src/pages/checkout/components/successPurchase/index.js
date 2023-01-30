import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../../../assets/logo-mangazine-header.png";
import { useUser } from "../../../../providers/UserProvider";
import { SuccessStyled, Title, Subtitle, Avatar } from "./index.styled";
import avatar from "../../../../assets/success-avatar.png";
import { useMenu } from "../../../../providers/MenuProvider";
import activateMenuButton from "../../../../utils/functions/activateMenuButton"
const SuccessPurchasePage = () => {
  const { user, setUser } = useUser();
  const {setStatusButton} = useMenu();
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      setUser({ ...user, cart: [] });
      setStatusButton(activateMenuButton("home"));
    }, 2000);
  }, [setUser, user, navigate, setStatusButton]);

  return (
    <SuccessStyled>
      <img src={logo} alt={`logo`} />
      <Title>Estamos finalizando a sua compra, {user.name}. Uhull!</Title>
      <Subtitle>Muito obrigado por comprar conosco!</Subtitle>
      <Subtitle>Te redirecionaremos para página principal!</Subtitle>
      <Avatar src={avatar} alt={`Mangazito`} />
    </SuccessStyled>
  );
};
export default SuccessPurchasePage;
