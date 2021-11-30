import React, { FC } from 'react';
import { Textarea, TextareaProps } from '@chakra-ui/react';
import { UseFormRegisterReturn } from 'react-hook-form';

type Props = TextareaProps & {
  register: Partial<UseFormRegisterReturn>;
};
export const TextAreaField: FC<Props> = (props) => {
  return <Textarea {...props}></Textarea>;
};
