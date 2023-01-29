import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { ArrowsContainer } from "./Arrows.styled";
import ButtonStyled from "../../styles/Button.styled";

const Arrows = ( { page, setPage, lastPage} ) => {
  
  
  return (
    <ArrowsContainer>
      <ButtonStyled onClick={() => setPage(page - 1)} disabled={page === 1} width={"35px;"} height={"35px"}>
        <AiOutlineArrowLeft fontSize={"20px"} />
      </ButtonStyled>
      <ButtonStyled onClick={() => setPage(page + 1)} disabled={lastPage === page} width={"35px;"} height={"35px"}>
        <AiOutlineArrowRight fontSize={"20px"} />
      </ButtonStyled>
    </ArrowsContainer>);
};

export default Arrows;

