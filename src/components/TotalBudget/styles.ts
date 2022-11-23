import styled from "styled-components";

export const TotalBudgetWrapper = styled.div`
  width: 335px;
  height: 100px;
  background: #7cc6fe;
  border-radius: 10px;
  padding: 32px 20px 32px 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #000000;
`;

export const StyledButton = styled.button`
  width: 85px;
  height: 36px;
  background: #ffffff;
  border: 1px solid #ffffff;
  border-radius: 10px;
  outline: none;
`;

export const StyledBudgetInput = styled.input`
  width: 153px;
  padding: 0px 10px;
  background: transparent;
  border: none;
  outline: none;
  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }
`;

export const StyledParagraph = styled.p`
  padding-top: 7px;
`;
