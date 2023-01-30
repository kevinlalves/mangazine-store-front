import { useUser } from "../../../providers/UserProvider";
import { Data, Item, Title, Total, UserData, Payment, Select } from "../index.styled";
import logo from "../../../assets/logo-mangazine-header.png";
import ButtonStyled from "../../../styles/Button.styled";
import ProductCard from "../components/ProductCard";
import paymentMethod from "../../../utils/constants/paymentMethod";

const CheckoutData = ({
  handleBuyButtonClick,
  totalPrice,
  setSelectedPayment,
  selectedPayment,
}) => {
  const { user } = useUser();

  return (
    <>
      <img src={logo} alt={"logo"} />
      <Title>Dados do comprador</Title>
      <Data height={"6rem"}>
        <UserData>
          <span>Nome: {user.name}</span>
        </UserData>
        <UserData>
          <span>Endereço: {user.address}</span>
        </UserData>
      </Data>
      <Title>Produtos</Title>
      <Data height={"12rem"}>
        <Item>
          <div>Título</div>
          <div>Quantidade</div>
          <div>Preço</div>
        </Item>
        <section>
          {user.cart.map((c) => (
            <ProductCard
              key={c.product._id}
              product={c.product}
              quantity={c.quantity}
            />
          ))}
        </section>
      </Data>
      <Payment>
        <span>Forma de pagamento: </span>
        <Select
          value={selectedPayment}
          onChange={(e) => setSelectedPayment(e.target.value)}
        >
          {paymentMethod.map((method) => (
            <option key={method} value={method}>{`${method[0].toUpperCase()}${method.slice(1)}`}</option>
          ))}
        </Select>
      </Payment>
      <Total>
        <span>Total</span>
        <span>R$ {totalPrice}</span>
      </Total>
      <ButtonStyled
        fontSize={"1.5rem"}
        color={`selected`}
        height={"3rem"}
        width={"100%"}
        onClick={() => handleBuyButtonClick()}
      >
        Comprar
      </ButtonStyled>
    </>
  );
};
export default CheckoutData;
