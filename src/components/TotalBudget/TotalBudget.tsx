import { useState } from "react";
import { StyledBudgetInput, StyledButton, TotalBudgetWrapper } from "./styles";

export const TotalBudget = () => {
  const [isEditMode, setIsEditMode] = useState(false);

  const handleEdit = () => {
    setIsEditMode(true);
  };

  const handleSave = () => {
    setIsEditMode(false);
  };
  return (
    <TotalBudgetWrapper>
      {!isEditMode ? (
        <>
          <p>Budget: 3000</p>
          <StyledButton onClick={handleEdit}>Edit</StyledButton>
        </>
      ) : (
        <>
          <StyledBudgetInput type="text" placeholder="Enter budget..." />
          <StyledButton onClick={handleSave}>Save</StyledButton>
        </>
      )}
    </TotalBudgetWrapper>
  );
};
