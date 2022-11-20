import { TotalBudget } from "../TotalBudget/TotalBudget";
import { CustomSelect } from "../Select/CustomSelect";
import { Title } from "../Title/Title";
import { TitleWrapper } from "./styles";

export const Budget = () => {
  return (
    <div>
      <TitleWrapper>
        <Title text="Budget App" />
        <CustomSelect />
      </TitleWrapper>
      <TotalBudget />
    </div>
  );
};
