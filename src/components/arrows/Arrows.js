import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { ArrowsContainer } from "./Arrows.styled";
import ButtonStyled from "../../styles/Button.styled";
import useHome from "../../utils/hooks/useHome";

const Arrows = () => {
  const { page, setPage } = useHome();

  return (
    <ArrowsContainer>
      <ButtonStyled onClick={() => setPage(page - 1)} disabled={page === 1} width={"35px;"} height={"35px"}>
        <AiOutlineArrowLeft fontSize={"20px"} />
      </ButtonStyled>
      <ButtonStyled onClick={() => setPage(page + 1)} width={"35px;"} height={"35px"}>
        <AiOutlineArrowRight fontSize={"20px"} />
      </ButtonStyled>
    </ArrowsContainer>);
};

export default Arrows;
