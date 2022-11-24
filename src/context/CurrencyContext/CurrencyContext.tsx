import { createContext, ReactNode, useState } from "react";
import { Currency } from "../../config/currency";
interface ICurrencyOption {
  label: keyof typeof Currency;
  value: Currency;
}

interface ICurrencyContext {
  currentCurrency: ICurrencyOption;
  currencies: ICurrencyOption[];
  setCurrency: (option: ICurrencyOption) => void;
}

const options: ICurrencyOption[] = [
  { value: Currency.USD, label: "USD" },
  { value: Currency.EUR, label: "EUR" },
  { value: Currency.GBR, label: "GBR" },
];

export const CurrencyContext = createContext<ICurrencyContext>({} as ICurrencyContext);

export const useCurrencyContextValue = () => {
  const [currencyContextValue, setCurrencyContextValue] = useState<ICurrencyContext>(() => ({
    currentCurrency: options[0],
    currencies: options,
    setCurrency: (option) => {
      setCurrencyContextValue((ctx) => ({
        ...ctx,
        currentCurrency: option,
      }));
    },
  }));
  return currencyContextValue;
};

export const CurrencyContextProvider = ({ children }: { children: ReactNode }) => {
  return (
    <CurrencyContext.Provider value={useCurrencyContextValue()}>
      {children}
    </CurrencyContext.Provider>
  );
};
