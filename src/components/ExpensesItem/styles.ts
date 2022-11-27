import styled from "styled-components";

export const StyledItem = styled.li`
  display: grid;
  grid-template-columns: 4fr 1fr 1fr;
  margin-bottom: 30px;
  padding: 0px 10px 18px 10px;
  border-bottom: 2px solid #ccd5ff;
  list-style: none;
`;

export const StyledSpan = styled.span`
  height: 21px;
  padding: 0px 10px 0px 10px;
  border: 1px solid #23c8ff;
  border-radius: 10px;
  text-align: center;
  justify-self: center;
  background-color: #23c9ff;
  color: #ffff;
`;

export const StyledButton = styled.button`
  justify-self: end;
  width: 16px;
  height: 16px;
  border: none;
  background: none;
`;
