import { useUser } from "../../../providers/UserProvider";
import { Data, Item, Title, Total, UserData } from "../index.styled";
import logo from "../../../assets/logo-mangazine-header.png";
import ButtonStyled from "../../../styles/Button.styled";
import ProductCard from "../components/ProductCard";

const CheckoutData = ({handleBuyButtonClick, totalPrice}) => {
  const { user } = useUser();

  return (
    <>
      <img src={logo} alt={"logo"} />
      <Title>Dados do comprador</Title>
      <Data height={"8rem"}>
        <UserData>
          <span>Nome: {user.name}</span>
        </UserData>
        <UserData>
          <span>Endereço: {user.address}</span>
        </UserData>
      </Data>
      <Title>Produtos</Title>
      <Data height={"14rem"}>
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
