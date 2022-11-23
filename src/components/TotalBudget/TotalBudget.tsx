import { useState } from "react";
import { StyledBudgetInput, StyledButton, StyledParagraph, TotalBudgetWrapper } from "./styles";

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
          <StyledParagraph>Budget: 3000</StyledParagraph>
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
