import { useForm } from "react-hook-form";
import { useInput } from "../../hooks/useInput";
import { StyledFormInput } from "./styles";

interface IProps {
  placeholder: string;
}

export const FormInput = ({ placeholder }: IProps) => {
  const { value, onChange } = useInput();

  return (
    <StyledFormInput type="text" placeholder={placeholder} value={value} onChange={onChange} />
  );
};
