import { useEffect } from "react";
import { useExpensesContext } from "../../context/ExpensesContext/ExpensesContext";
import { useInput } from "../../hooks/useInput";
import { StyledExpensesSearch } from "./style";

export const ExpensesSearch = () => {
  const { searchExpense } = useExpensesContext();
  const search = useInput();
  useEffect(() => {
    searchExpense(search.value);
  }, [searchExpense, search.value]);

  return <StyledExpensesSearch type="search" placeholder="search ..." {...search} />;
};
