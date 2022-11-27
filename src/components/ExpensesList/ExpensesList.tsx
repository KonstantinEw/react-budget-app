import { useEffect, useState } from "react";
import { useExpensesContext } from "../../context/ExpensesContext/ExpensesContext";
import { ExpensesItem } from "../ExpensesItem/ExpensesItem";

export const ExpensesList = () => {
  const { expenses, searchValue } = useExpensesContext();
  const [, setSearchExpenses] = useState(expenses);
  useEffect(() => {
    setSearchExpenses(expenses.filter((exp) => exp.title.toLowerCase().includes(searchValue)));
  }, [searchValue, expenses]);
  return (
    <ul>
      {expenses.map(({ id, title, cost }) => (
        <ExpensesItem key={id} cost={cost} title={title} id={id} />
      ))}
    </ul>
  );
};
