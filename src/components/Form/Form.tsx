import { SubmitHandler, useForm } from "react-hook-form";
import { v4 } from "uuid";
import { useBudgetContext } from "../../context/BudgetContext/BudgetContext";
import { useExpensesContext } from "../../context/ExpensesContext/ExpensesContext";
import { ErrorSpan, StyledFormInput, StyledFormSubmit } from "./styles";
import { Title } from "../Title/Title";

export interface IFormValues {
  title: string;
  cost: number;
}

export const Form = () => {
  const { setNewExpense } = useExpensesContext();
  const { setRemainingValue, setSpentValue, budget } = useBudgetContext();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormValues>({ mode: "onBlur" });

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
        {...register("title", {
          required: "Name is required!",
          maxLength: { value: 15, message: "a lot of letters" },
          pattern: { value: /[A-Za-z]/, message: "Only letters!" },
        })}
        placeholder="enter name ..."
        type="text"
      />
      <ErrorSpan>{errors.title && errors.title.message}</ErrorSpan>
      <StyledFormInput
        {...register("cost", {
          required: "Cost is required!",
          maxLength: { value: 5, message: "High price!" },
          pattern: { value: /[0-9]/, message: "Only numbers!" },
        })}
        placeholder="enter cost ..."
        type="text"
      />
      <ErrorSpan>{errors.cost && errors.cost.message}</ErrorSpan>
      <StyledFormSubmit type="submit">Done</StyledFormSubmit>
    </form>
  );
};
