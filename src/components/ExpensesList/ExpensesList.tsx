import { useExpensesContext } from "../../context/ExpensesContext/ExpensesContext";

export const ExpensesList = () => {
  const { expenses } = useExpensesContext();
  return (
    <ul>
      {expenses.map(({ id, cost, title }) => {
        return (
          <li key={id}>
            {title} = {cost}
          </li>
        );
      })}
    </ul>
  );
};
