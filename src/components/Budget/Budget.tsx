import { TotalBudget } from "../TotalBudget/TotalBudget";
import { CustomSelect } from "../Select/CustomSelect";
import { Title } from "../Title/Title";
import { TitleWrapper } from "./styles";
import { BudgetRemaining } from "../BudgetRemaining/BudgetRemaining";
import { BudgetSpent } from "../BudgetSpent/BudgetSpent";

export const Budget = () => {
  return (
    <div>
      <TitleWrapper>
        <Title text="Budget App" />
        <CustomSelect />
      </TitleWrapper>
      <TotalBudget />
      <BudgetRemaining />
      <BudgetSpent />
    </div>
  );
};
