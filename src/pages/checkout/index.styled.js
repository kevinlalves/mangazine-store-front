import styled from "styled-components";

export const CheckoutStyled = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.8rem 2rem;
  gap: 0.25rem;
  img {
    width: 10rem;
    margin-bottom: 1.75rem;
  }
`;
export const Title = styled.h1`
  font-size: 1.8rem;
  align-self: flex-start;
  color: ${({ theme }) => theme.colors.main};
`;
export const Data = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.productBackground};
  border: 1px solid transparent;
  border-radius: 1rem;
  padding: 0.5rem;
  height: ${({ height }) => height};
  margin-bottom: 0.5rem;
  section {
    height: 85%;
    overflow-y: auto;
  }
`;
export const UserData = styled.div`
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  word-wrap: break-word;
  color: ${({ theme }) => theme.colors.main};
`;
export const Total = styled.div`
  font-size: 1.8rem;
  display: flex;
  justify-content: space-between;
  width: 100%;
  color: ${({ theme }) => theme.colors.main};
  height: 2rem;
`;
export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ad8e70;
  height: 2rem;
  align-items: center;
  gap: 1rem;
  div:nth-child(1),
  p:nth-child(1) {
    width: 10rem;
    text-align: center;
  }
  p:not(:nth-child(1)),
  div:not(:nth-child(1)) {
    flex-basis: 2rem;
    text-align: center;
  }
  div {
    color: ${({ theme }) => theme.colors.main};
  }
`;
export const Name = styled.p`
  font-family: ${({ theme }) => theme.fonts.overpass};

  font-size: 0.8rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  height: 100%;
  padding-top: 0.5rem;
`;
export const Payment = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.5rem;
  width: 100%;
  align-items: center;
  height: 3rem;
  color: ${({theme})=> theme.colors.main}
`;
export const Select = styled.select`
  width: 4rem;
  font-size: 1rem;
  background-color: ${({theme})=>theme.colors.button};
  color: ${({theme})=>theme.colors.secondary};
  border-radius: 0.5rem;
`;