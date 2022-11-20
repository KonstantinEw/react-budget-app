import styled from "styled-components";

export const StyledBudgetRemaining = styled.div`
  width: 335px;
  height: 100px;
  background: #ccd5ff;
  border: 1px solid #ccd5ff;
  border-radius: 10px;
  padding: 36px 20px 40px 20px;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
`;

export const StyledBudgetOverspending = styled(StyledBudgetRemaining)`
  background: #ff0000;
`;
