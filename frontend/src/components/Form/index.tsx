import React, { FC } from 'react';
import { useForm, SubmitHandler, UseFormReturn } from 'react-hook-form';

type FormProps<TFieldValues> = {
  defaultValues?: TFieldValues;
  onSubmit: SubmitHandler<TFieldValues>;
  id?: string;
  children: (formReturns: UseFormReturn<TFieldValues>) => React.ReactNode;
};

const Form = <
  TFieldValues extends Record<string, unknown> = Record<string, unknown>
>(
  props: FormProps<TFieldValues>
) => {
  const { defaultValues, onSubmit, id, children } = props;
  const formReturns = useForm<TFieldValues>(defaultValues);
  return (
    <form id={id} onSubmit={formReturns.handleSubmit(onSubmit)}>
      {children(formReturns)}
    </form>
  );
};

export default Form;
