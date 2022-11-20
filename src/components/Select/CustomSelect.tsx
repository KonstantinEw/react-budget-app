import React from "react";
import Select from "react-select";

interface IOption {
  value: string;
  label: string;
}

const options: IOption[] = [
  { value: "$", label: "USD" },
  { value: "€", label: "EUR" },
  { value: "£", label: "GBR" },
];

export const CustomSelect = () => {
  return <Select options={options} />;
};
