import styled, { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
*{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}
body{
    width: 100%;
    height:100vh;
    background-color: #1E3542;
    display:flex;
    justify-content: center;
    align-items: center;
}
`;

export const AppWrapper = styled.div`
    width: 375px;
    padding: 30px 20px 53px 20px;
    background-color:#FFFFFF;
`;