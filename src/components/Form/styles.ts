import styled from "styled-components";

export const StyledFormInput = styled.input`
  width: 100%;
  height: 50px;
  margin-bottom: 20px;
  padding: 0px 10px;
  background: #ffffff;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
  border: 1px solid #ffffff;
  border-radius: 10px;
  outline: none;
  &::placeholder {
    color: #999999;
  }
`;

export const StyledFormSubmit = styled.button`
  width: 100%;
  height: 50px;
  background: #23c9ff;
  border: 1px solid #23c9ff;
  border-radius: 10px;
  color: #ffffff;
`;

export const ErrorSpan = styled.span`
  display: block;
  color: red;
  margin-bottom: 10px;
`;
