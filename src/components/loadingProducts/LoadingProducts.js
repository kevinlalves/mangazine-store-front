import { Rings } from 'react-loader-spinner'
import LoadingProductsStyled from './LoadingProducts.styled';
import colors from "../../utils/constants/colors";
const LoadingProducts = ({color}) => {
  return (
    <LoadingProductsStyled>
      <Rings
        height="200"
        width="200"
        radius="9"
        color={colors[color]}
        ariaLabel="loading"
        wrapperStyle
        wrapperClass
      />
    </LoadingProductsStyled>
  );
};

export default LoadingProducts;
