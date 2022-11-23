import { FormInput } from "../FormInput/FormInput";
import { FormSubmit } from "../FormSubmit/FormSubmit";
import { Title } from "../Title/Title";

export const Form = () => {
  return (
    <form>
      <Title text="Add Expense" />
      <FormInput placeholder="enter name ..." />
      <FormInput placeholder="enter cost ..." />
      <FormSubmit />
    </form>
  );
};
