import { useState } from "react";
import { useBudgetContext } from "../../context/BudgetContext/BudgetContext";
import { useCurrencyContext } from "../../context/CurrencyContext/CurrencyContext";
import { StyledBudgetOverspending, StyledBudgetRemaining } from "./style";

export const BudgetRemaining = () => {
  const { remaining } = useBudgetContext();
  const { currentCurrency } = useCurrencyContext();

  return (
    <>
      {remaining >= 0 ? (
        <StyledBudgetRemaining>
          <p>
            Remaining: {currentCurrency.value} {remaining}
          </p>
        </StyledBudgetRemaining>
      ) : (
        <StyledBudgetOverspending>
          <p>
            Overspending by {currentCurrency.value} {remaining}
          </p>
        </StyledBudgetOverspending>
      )}
    </>
  );
};
