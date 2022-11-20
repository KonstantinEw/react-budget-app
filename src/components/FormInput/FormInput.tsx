import { StyledFormInput } from "./styles";

interface IProps {
  placeholder: string;
}

export const FormInput = ({ placeholder }: IProps) => {
  return <StyledFormInput type="text" placeholder={placeholder} />;
};
