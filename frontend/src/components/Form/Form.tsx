import React from 'react';
import {
  useForm,
  SubmitHandler,
  UseFormReturn,
  UseFormProps,
} from 'react-hook-form';

type FormProps<TFieldValues> = {
  options?: UseFormProps<TFieldValues>;
  onSubmit: SubmitHandler<TFieldValues>;
  id?: string;
  children: (formReturns: UseFormReturn<TFieldValues>) => React.ReactNode;
};

export const Form = <
  TFieldValues extends Record<string, unknown> = Record<string, unknown>
>(
  props: FormProps<TFieldValues>
) => {
  const { options, onSubmit, id, children } = props;
  const formReturns = useForm<TFieldValues>(options);
  return (
    <form id={id} onSubmit={formReturns.handleSubmit(onSubmit)}>
      {children(formReturns)}
    </form>
  );
};
