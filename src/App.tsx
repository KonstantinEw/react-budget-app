import { Budget } from "./components/Budget/Budget";
import { Expenses } from "./components/Expenses/Expenses";
import { Form } from "./components/Form/Form";
import { AppWrapper } from "./GlobalStyles";

export const App = () => {
  return (
    <AppWrapper>
      <Budget />
      <Expenses />
      <Form />
    </AppWrapper>
  );
};
