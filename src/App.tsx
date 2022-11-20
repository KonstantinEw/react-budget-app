import { Budget } from "./components/Budget/Budget";
import { Expenses } from "./components/Expenses/Expenses";
import { Form } from "./components/Form/Form";
import {
  ExpensesContext,
  ExpensesContextProvider,
} from "./context/ExpensesContext/ExpensesContext";
import { AppWrapper } from "./GlobalStyles";

export const App = () => {
  return (
    <ExpensesContextProvider>
      <AppWrapper>
        <Budget />
        <Expenses />
        <Form />
      </AppWrapper>
    </ExpensesContextProvider>
  );
};
