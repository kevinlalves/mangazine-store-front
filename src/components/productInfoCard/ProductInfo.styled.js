import styled from "styled-components";

export const ProductInfoStyled = styled.div`
background-color: #c9ae88;
width:310px;
border-radius: 20px;
display: flex;
flex-direction: column;
margin-inline: auto;
padding-inline: 12px;
padding-block: 5px;
flex-shrink: 0;
img{
    margin-block: 5px;
  height: 180px;
  border-radius: 10px;
  margin-right: 8px;

}
h1{
    font-family: ${props => props.theme.fonts.overpass};
    font-size: 24px;
    color:#243763;
    line-height: 24px;
  }
  h3{
    font-size: 24px;
    color:#243763;
    font-style: normal;
  }
p{
    color:#243763;
    font-size: 18px;
    margin-block: 3px;
    line-height: 22px;
}

h2{
    font-size: 22px;
    color:#243763;
    margin-inline: 5px;
}
h4{
    font-size: 24px;
    color:#243763;
    margin-block: 4px;
}
button{
    width: 100%;
    height: 40px;
    margin-top: 7px;
    margin-bottom: 4px;
    z-index: 1;
}
`
export const ContA = styled.div`
display: flex;
margin-block: 3px;
`

export const ContB = styled.div`
display: flex;
justify-content: space-between;
align-items: flex-end;
margin-block: 3px;
`