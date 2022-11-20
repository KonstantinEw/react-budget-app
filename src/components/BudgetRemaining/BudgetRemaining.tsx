import { useState } from "react";
import { StyledBudgetOverspending, StyledBudgetRemaining } from "./style";

export const BudgetRemaining = () => {
  const [isOverspending, setIsOverspending] = useState(false);

  const handleOverspending = () => {
    setIsOverspending(true);
  };

  return (
    <>
      {!isOverspending ? (
        <StyledBudgetRemaining>
          <p>Remaining: someBudget</p>
        </StyledBudgetRemaining>
      ) : (
        <StyledBudgetOverspending>
          <p>Overspending by someBudget</p>
        </StyledBudgetOverspending>
      )}
    </>
  );
};
