import {ProductInfoStyled} from "../../components/productInfoCard/ProductInfo.styled"
import RatingStars from "../../styles/Stars.styled"
import ButtonStyled from "../../styles/Button.styled"
import { ContA, ContB } from "../../components/productInfoCard/ProductInfo.styled"
const ProductInfo = ({product}) =>{
    const {name, author, genre, description, image, rating, price, reviewCount} = product
    return(
        <ProductInfoStyled>
<p>{author}</p>
<h1>{name}</h1>
<p>{genre?.join(', ')}</p>
<ContA><RatingStars valor={rating} size={24} /><h2>({reviewCount})</h2></ContA>
<ContB><img src={image} alt="Capa do mangá"/> <h3>R$ {price ? price.toFixed(2).replace(".", ",") : ""}</h3></ContB>
<h4>Descrição</h4>
<p>{description}</p>
<ButtonStyled fontSize={"22px"}>Adicionar ao carrinho</ButtonStyled>
       </ProductInfoStyled>
   )
}
export default ProductInfo