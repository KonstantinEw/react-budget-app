import { useBudgetContext } from "../../context/BudgetContext/BudgetContext";
import { useCurrencyContext } from "../../context/CurrencyContext/CurrencyContext";
import { StyledBudgetSpent } from "./style";

export const BudgetSpent = () => {
  const { spent } = useBudgetContext();
  const { currentCurrency } = useCurrencyContext();
  return (
    <StyledBudgetSpent>
      <p>
        Spent so far: {currentCurrency.value} {spent}
      </p>
    </StyledBudgetSpent>
  );
};
