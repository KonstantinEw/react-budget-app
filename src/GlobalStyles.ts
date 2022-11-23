import styled, { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');
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
    font-family: serif;
}
`;

export const AppWrapper = styled.div`
  width: 375px;
  padding: 30px 20px 53px 20px;
  background-color: #ffffff;
`;
