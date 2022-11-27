import { useCurrencyContext } from "../../context/CurrencyContext/CurrencyContext";
import { useExpensesContext } from "../../context/ExpensesContext/ExpensesContext";
import { StyledButton, StyledItem, StyledSpan } from "./styles";
import { ReactComponent as DeleteIcon } from "../../assets/icons/DeleteIcon.svg";
import { useBudgetContext } from "../../context/BudgetContext/BudgetContext";

interface IProps {
  title: string;
  cost: number;
  id: string;
}

export const ExpensesItem = ({ title, cost, id }: IProps) => {
  const { deleteExpense } = useExpensesContext();
  const { currentCurrency } = useCurrencyContext();
  const { setRemainingValue, setSpentValue } = useBudgetContext();

  const handleDelete = () => {
    deleteExpense(id);
    setRemainingValue();
    setSpentValue(cost);
  };
  return (
    <StyledItem>
      <p>{title}</p>
      <StyledSpan>
        {currentCurrency.value}
        {cost}
      </StyledSpan>
      <StyledButton onClick={handleDelete}>
        <DeleteIcon />
      </StyledButton>
    </StyledItem>
  );
};
