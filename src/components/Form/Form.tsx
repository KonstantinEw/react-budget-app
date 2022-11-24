import { FormEvent } from "react";
import { useForm } from "react-hook-form";
import { FormInput } from "../FormInput/FormInput";
import { FormSubmit } from "../FormSubmit/FormSubmit";
import { Title } from "../Title/Title";

export const Form = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form>
      <Title text="Add Expense" />
      <FormInput
        {...register("name", { required: true, minLength: { value: 4, message: "less than 4" } })}
        placeholder="enter name ..."
      />
      <FormInput
        {...register("cost", { required: true, minLength: { value: 2, message: "less than 2" } })}
        placeholder="enter cost ..."
      />
      <FormSubmit />
    </form>
  );
};
