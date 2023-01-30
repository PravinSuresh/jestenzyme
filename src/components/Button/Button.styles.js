import styled from "styled-components";

export const ButtonWrapper = styled.button`
border: 2px solid #979695;
color: black;
width: auto;
height: 25px;
border-radius: 5px;
cursor: pointer;
background-color: ${({click})=>click?'#D1CFCF':'#E6E3E3'};
`;