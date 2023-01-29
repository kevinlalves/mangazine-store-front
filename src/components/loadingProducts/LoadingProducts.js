import { Rings } from "react-loader-spinner";
import StyledLoadingContainer from "./LoadingProducts.styled";
import colors from "../../utils/constants/colors";
const LoadingProducts = ({ color }) => {
  return (
    <StyledLoadingContainer>
      <Rings
        height="200"
        width="200"
        radius="9"
        color={colors[color]}
        ariaLabel="loading"
        wrapperStyle
        wrapperClass
      />
    </StyledLoadingContainer>
  );
};

export default LoadingProducts;
