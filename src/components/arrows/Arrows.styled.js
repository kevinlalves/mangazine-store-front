import styled from "styled-components";

export const ArrowsContainer = styled.div`
margin-inline:auto;
margin-top: 20px;
display:flex;
justify-content: center;
align-items: center;
button{
    padding-top: 5px;
    padding-inline: 3px;
    margin-inline: 8px;
}
button:disabled{
    opacity: 0.75;
}
`