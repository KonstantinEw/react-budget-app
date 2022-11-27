import { useExpensesContext } from "../../context/ExpensesContext/ExpensesContext";
import { ExpensesItem } from "../ExpensesItem/ExpensesItem";
import { StyledPhrase } from "./styles";

export const ExpensesList = () => {
  const { expenses } = useExpensesContext();

  if (!expenses.length) return <StyledPhrase>Oooops 🙈</StyledPhrase>;
  return (
    <ul>
      {expenses.map(({ id, title, cost }) => (
        <ExpensesItem key={id} cost={cost} title={title} id={id} />
      ))}
    </ul>
  );
};
