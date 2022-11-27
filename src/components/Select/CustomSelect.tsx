import Select, { SingleValue } from "react-select";
import { ICurrencyOption, useCurrencyContext } from "../../context/CurrencyContext/CurrencyContext";

export const CustomSelect = () => {
  const { currentCurrency, currencies, setCurrency } = useCurrencyContext();

  const handleCustomSelect = (option: SingleValue<ICurrencyOption>) => {
    if (option) {
      setCurrency(option);
    }
  };

  return (
    <Select
      options={currencies}
      onChange={handleCustomSelect}
      value={currentCurrency}
      isMulti={false}
    />
  );
};
