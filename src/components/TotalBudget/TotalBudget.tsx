import { useState } from "react";
import { StyledButton, TotalBudgetWrapper } from "./styles";

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
          <input type="text" placeholder="Enter budget..." />
          <StyledButton onClick={handleSave}>Save</StyledButton>
        </>
      )}
    </TotalBudgetWrapper>
  );
};
