import React from "react";
import { StyledButton, TotalBudgetWrapper } from "./styles";

export const TotalBudget = () => {
  return (
    <TotalBudgetWrapper>
      <p>Budget: 3000</p>
      <StyledButton>Edit</StyledButton>
    </TotalBudgetWrapper>
  );
};
