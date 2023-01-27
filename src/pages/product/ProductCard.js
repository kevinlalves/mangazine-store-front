import { ButtonStyled } from "../../styles/Button.styled"
import { ProductCardStyle, ContB, Cont, ContC } from "./ProductCard.styled"
import RatingStars from "../../styles/Stars.styled"
const ProductCard = () => {
    return (
        <ProductCardStyle>
        <img src="https://m.media-amazon.com/images/I/81+xh1mRSTL.jpg" alt="Capa do mangá"/>
        <ContB>
        <Cont><h1>Berserk Vol. 41</h1><ContC><RatingStars valor={3} size={24}/><h3>(2)</h3></ContC><h2>R$ 83,76</h2></Cont>
        <p>Mais detalhes</p>
        <ButtonStyled width={"100%"} fontSize={"14px"} height={"40px"}>Adicionar ao carrinho</ButtonStyled>
        </ContB>
        </ProductCardStyle>
        )}
export default ProductCard