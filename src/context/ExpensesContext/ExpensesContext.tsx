import { createContext, ReactNode, useContext, useState } from "react";

interface IExpensesContexProps {
  children: ReactNode;
}

interface IExpense {
  id: string;
  title: string;
  cost: number;
}
interface IExpenseContext {
  expenses: IExpense[];
  setNewExpense: (expense: IExpense) => void;
}

export const ExpensesContext = createContext<IExpenseContext>({} as IExpenseContext);

const useExpensesContextValue = () => {
  const [expensesContext, setExpensesContext] = useState<IExpenseContext>(() => ({
    expenses: [
      {
        id: "12333",
        title: "lopata",
        cost: 123,
      },
    ],
    setNewExpense: (newExpense) => {
      setExpensesContext((ctx) => ({ ...ctx, expenses: [...ctx.expenses, newExpense] }));
    },
    deleteExpense: (id: string) => {
      setExpensesContext((ctx) => ({
        ...ctx,
        expenses: ctx.expenses.filter((exp) => exp.id! === id),
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
