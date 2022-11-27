import ReactDOM from "react-dom/client";
import { App } from "./App";
import { AppContextProvider } from "./context/AppContext/AppContext";
import { BudgetContextProvider } from "./context/BudgetContext/BudgetContext";
import { CurrencyContextProvider } from "./context/CurrencyContext/CurrencyContext";
import { ExpensesContextProvider } from "./context/ExpensesContext/ExpensesContext";
import { Global } from "./GlobalStyles";

const providers = [BudgetContextProvider, CurrencyContextProvider, ExpensesContextProvider];

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <>
    <Global />
    <AppContextProvider components={providers}>
      <App />
    </AppContextProvider>
  </>,
);
