import { Rings } from 'react-loader-spinner'
import LoadingProductsStyled from './LoadingProducts.styled';

const LoadingProducts = () => {
  return (
    <LoadingProductsStyled>
      <Rings
        height="200"
        width="200"
        radius="9"
        color="#243763"
        ariaLabel="loading"
        wrapperStyle
        wrapperClass
      />
    </LoadingProductsStyled>
  );
};

export default LoadingProducts;
