import React, { createContext, ReactNode, useContext, useState } from "react";

interface IBudgetContext {
  spent: number;
  budget: number;
  remaining: number;
  setNewBudget: (value: number) => void;
  setSpentBudgetContextValue: (value: number) => void;
}

export const BudgetContext = createContext<IBudgetContext>({} as IBudgetContext);

export const useBudgetContextValue = () => {
  const [budgetContextValue, setBudgetContextValue] = useState<IBudgetContext>(() => ({
    budget: 0,
    setNewBudget: (value) => {
      setBudgetContextValue((ctx) => ({
        ...ctx,
        budget: value,
      }));
    },
    remaining: 0,
    setRemainingBudgetContextValue: () => {
      setBudgetContextValue((ctx) => ({
        ...ctx,
        remaining: ctx.budget - ctx.spent,
      }));
    },
    spent: 0,
    setSpentBudgetContextValue: (value) => {
      setBudgetContextValue((ctx) => ({
        ...ctx,
        spending: ctx.spent + value,
      }));
    },
  }));

  return budgetContextValue;
};

export const useBudgetContext = () => useContext<IBudgetContext>(BudgetContext);

export const BudgetContextProvider = ({ children }: { children: ReactNode }) => {
  return (
    <BudgetContext.Provider value={useBudgetContextValue()}>{children}</BudgetContext.Provider>
  );
};
