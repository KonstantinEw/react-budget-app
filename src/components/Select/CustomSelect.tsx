import React from "react";
import Select from "react-select";
import { Currency } from "../../config/currency";

interface CurrencyOption {
  label: keyof typeof Currency;
  value: Currency;
}

const options: CurrencyOption[] = [
  { value: Currency.USD, label: "USD" },
  { value: Currency.EUR, label: "EUR" },
  { value: Currency.GBR, label: "GBR" },
];

export const CustomSelect = () => {
  return <Select options={options} />;
};
