import { createContext, ReactNode, useContext, useState } from "react";

interface IExpensesContexProps {
  children: ReactNode;
}

export interface IExpense {
  id: string;
  title: string;
  cost: number;
}
export interface IExpenseContext {
  expenses: IExpense[];
  searchValue: string;
  setNewExpense: (expense: IExpense) => void;
  deleteExpense: (id: string) => void;
  searchExpense: (name: string) => void;
}

export const ExpensesContext = createContext<IExpenseContext>({} as IExpenseContext);

const useExpensesContextValue = () => {
  const [expensesContext, setExpensesContext] = useState<IExpenseContext>(() => ({
    expenses: [],
    setNewExpense: (newExpense) => {
      setExpensesContext((ctx) => ({ ...ctx, expenses: [...ctx.expenses, newExpense] }));
    },
    deleteExpense: (id) => {
      setExpensesContext((ctx) => ({
        ...ctx,
        expenses: ctx.expenses.filter((exp) => exp.id !== id),
      }));
    },
    searchValue: "",
    searchExpense: (name) => {
      setExpensesContext((ctx) => ({
        ...ctx,
        searchValue: name.toLowerCase(),
      }));
    },
  }));
  return expensesContext;
};

export const useExpensesContext = () => useContext<IExpenseContext>(ExpensesContext);

export const ExpensesContextProvider = ({ children }: IExpensesContexProps) => {
  return (
    <ExpensesContext.Provider value={useExpensesContextValue()}>
      {children}
    </ExpensesContext.Provider>
  );
};
