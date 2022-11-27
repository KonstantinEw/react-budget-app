import styled, { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
*{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}
body{
    width: 100%;
    height: 100%;
    background-color: #1E3542;
    display:flex;
    justify-content: center;
    align-items: center;
}
`;

export const AppWrapper = styled.div`
  width: 100%;
  padding: 30px 10px 53px 10px;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  overflow-y: hidden;

  @media (min-width: 1024px) {
    width: 1000px;
    margin-top: 50px;
    padding: 30px 50px 0px 50px;
    flex-direction: row-reverse;
    justify-content: space-between;
    border-radius: 10px;
  }
`;
