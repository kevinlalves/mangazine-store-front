import { Rings } from 'react-loader-spinner'
import StyledLoadingContainer from './LoadingProducts.styled'

const LoadingProducts = () => {
  return (
    <StyledLoadingContainer>
      <Rings
        height="200"
        width="200"
        radius="9"
        color="#243763"
        ariaLabel="loading"
        wrapperStyle
        wrapperClass
      />
    </StyledLoadingContainer>
  );
};

export default LoadingProducts;
