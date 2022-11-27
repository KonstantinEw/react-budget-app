import { SubmitHandler, useForm } from "react-hook-form";
import { v4 } from "uuid";
import { useBudgetContext } from "../../context/BudgetContext/BudgetContext";
import { useExpensesContext } from "../../context/ExpensesContext/ExpensesContext";
import { StyledFormInput, StyledFormSubmit } from "./styles";
import { Title } from "../Title/Title";

export interface IFormValues {
  title: string;
  cost: number;
}

export const Form = () => {
  const { setNewExpense } = useExpensesContext();
  const { setRemainingValue, setSpentValue, budget } = useBudgetContext();
  const { register, handleSubmit, reset } = useForm<IFormValues>({ mode: "onBlur" });

  const onSubmit: SubmitHandler<IFormValues> = ({ title, cost }) => {
    if (budget > 0) {
      setNewExpense({ title, cost, id: v4() });
      setSpentValue(+cost);
      setRemainingValue();
      reset();
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Title text="Add Expense" />
      <StyledFormInput
        {...register("title", { required: true, minLength: { value: 4, message: "less than 4" } })}
        placeholder="enter name ..."
        type="text"
      />
      <StyledFormInput
        {...register("cost", { required: true, minLength: { value: 2, message: "less than 2" } })}
        placeholder="enter cost ..."
        type="text"
      />
      <StyledFormSubmit type="submit">Done</StyledFormSubmit>
    </form>
  );
};
