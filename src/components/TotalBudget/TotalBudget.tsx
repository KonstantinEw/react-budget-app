import { useState } from "react";
import { useBudgetContext } from "../../context/BudgetContext/BudgetContext";
import { useCurrencyContext } from "../../context/CurrencyContext/CurrencyContext";
import { useInput } from "../../hooks/useInput";
import { StyledBudgetInput, StyledButton, StyledParagraph, TotalBudgetWrapper } from "./styles";

export const TotalBudget = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  const { currentCurrency } = useCurrencyContext();
  const { budget, setRemainingValue, setNewBudget } = useBudgetContext();
  const budgetValue = useInput();

  const handleEdit = () => {
    setIsEditMode(true);
  };

  const handleSave = () => {
    setIsEditMode(false);
    setNewBudget(+budgetValue.value);
    setRemainingValue();
  };
  return (
    <TotalBudgetWrapper>
      {!isEditMode ? (
        <>
          <StyledParagraph>
            Budget: {currentCurrency.value} {budget}
          </StyledParagraph>
          <StyledButton onClick={handleEdit}>Edit</StyledButton>
        </>
      ) : (
        <>
          <StyledBudgetInput type="text" placeholder="Enter budget..." {...budgetValue} />
          <StyledButton onClick={handleSave}>Save</StyledButton>
        </>
      )}
    </TotalBudgetWrapper>
  );
};
