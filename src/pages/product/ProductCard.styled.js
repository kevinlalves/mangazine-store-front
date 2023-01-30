import styled from "styled-components";

export const ProductCardStyle = styled.div`
background-color: #c9ae88;
width:310px;
height: 200px;
border-radius: 20px;
margin-top: 20px;
display: flex;
margin-inline: auto;
padding-inline: 10px;
flex-shrink: 0;
img{
    margin-block: auto;
  height: 180px;
  border-radius: 10px;
  margin-right: 8px;
}
`
export const Cont = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
height: 100px;
padding-block:2px;
h1{
    font-family: ${props => props.theme.fonts.overpass};
    font-size: 19px;
    color:#243763;
    display: -webkit-box;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
overflow: hidden;
text-overflow: ellipsis;
    max-height: 40px;
    line-height: 20px;
  }
  h2{
    font-size: 22px;
    color:#243763;
    font-style: normal;
  }
`
export const ContB = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
height: 100%;
width: 150px;
padding-block: 13px;
overflow: hidden;
button{
  z-index:1;
}
a{
  font-family: ${props => props.theme.fonts.overpass};
  font-size: 12px;
  color:#243763;
}
`

export const ContC = styled.div`
display: flex;
align-items: center;
h3{
  margin-inline: 8px;
  font-size: 14px;
  color:#243763;
  font-family: ${props => props.theme.fonts.overpass};
}
`