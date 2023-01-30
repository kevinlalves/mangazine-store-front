import styled from "styled-components";

export const SuccessStyled = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  position: relative;
  img {
    width: 10rem;
    margin-bottom: 1.75rem;
  }
  color: ${({ theme }) => theme.colors.main};
  text-align: left;
`;
export const Title = styled.h1`
  font-size: 2rem;
  width: 100%;
  margin-bottom: 1rem;
`;
export const Subtitle = styled.h1`
  font-size: 1.4rem;
  width: 100%;
`;
export const Avatar = styled.img`
 position: absolute;
 bottom: 0;
 right: 1rem;

`;