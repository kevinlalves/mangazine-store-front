import styled from "styled-components";

export const ProductStyled = styled.div`
  display: flex;
  gap: .8rem;
  padding: .5rem;
  border-radius: 1rem;
  height: 8rem;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  img {
    width: 4rem;
    border-radius: 0.5rem;
  }
  & > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-grow: 1;
    color: ${({theme})=>theme.colors.secondary};
    & > div {
      display: flex;
      justify-content: space-between;
      width: 100%;
      padding: 0 .5rem .25rem 0;
    }
  }
`;

export const QuantityStyled = styled.div`
    display: flex;
    gap: .5rem;
    align-items: center;
`;

export const PriceStyled = styled.div`
    font-size: 1.25rem;
`;

export const Title = styled.p`
    font-family: ${({theme})=>theme.fonts.overpass};
    font-size: 1rem;
    padding-top: 0.25rem;
`;