import { CheckoutStyled, Data, Item, Name, Title, Total } from "./index.styled";
import logo from "../../assets/logo-mangazine-header.png";
import ButtonStyled from "../../styles/Button.styled";
const CheckoutPage = () => {
  return (
    <CheckoutStyled>
      <img src={logo} alt={"logo"} />
      <Title>Dados do comprador</Title>
      <Data height={"8rem"}><div><span>Nome: {`oko`}</span></div><div><span>Endereço: {`jiji`}</span></div></Data>
      <Title>Produtos</Title>
      <Data height={"14rem"}>
        <Item><div>Título</div><div>Quantidade</div><div>Preço</div></Item>
        <Item><Name>Titutlo enorme que vai crashar tue sitenujhiuhuihiu</Name><p>10</p><p>23,90</p></Item>
        <Item><Name>Titutlo enorme que vai crashar tue sitenujhiuhuihiu</Name><p>Quantidade</p><p>Preço</p></Item>
        <Item><Name>Titutlo enorme que vai crashar tue sitenujhiuhuihiu</Name><p>Quantidade</p><p>Preço</p></Item>
        <Item><Name>Titutlo enorme que vai crashar tue sitenujhiuhuihiu</Name><p>Quantidade</p><p>Preço</p></Item>
        <Item><Name>Titutlo enorme que vai crashar tue sitenujhiuhuihiu</Name><p>Quantidade</p><p>Preço</p></Item>
      </Data>
      <Total>
        <span>Total</span>
        <span>R$ {"23,42"}</span>
      </Total>
      <ButtonStyled fontSize={"1.5rem"} color={`selected`} height={"3rem"} width={"100%"}>
        Comprar
      </ButtonStyled>
    </CheckoutStyled>
  );
};

export default CheckoutPage;
