import React, { FC } from 'react';
import { Box } from '@chakra-ui/react';
import Form from '~/components/Form';
import { Task } from '~/domain/task';
import { create } from '~/store/action/task';
import { TextAreaField } from '~/components/Form/TextAreaField';
import { useDispatch } from 'react-redux';
import { FormState } from 'react-hook-form';

type Props = {
  renderFooter?: (formState: FormState<Omit<Task, 'id'>>) => React.ReactNode;
  defaultValues?: Record<string, unknown>;
};

export const TaskForm: FC<Props> = (props) => {
  const diapatch = useDispatch();
  const onHandleSubmit = (values: Omit<Task, 'id'>) => {
    diapatch(create(values));
  };
  const { renderFooter, defaultValues } = props;
  return (
    <Form<Omit<Task, 'id'>>
      onSubmit={onHandleSubmit}
      id="task-create"
      options={{ defaultValues, mode: 'onChange' }}
    >
      {({ register, formState }) => {
        return (
          <>
            <Box border="solid gray" borderWidth="thin" borderRadius="md">
              <Box p={2}>
                <TextAreaField
                  variant="unstyled"
                  placeholder="タスク名"
                  resize="none"
                  rows={1}
                  register={register('name', { required: true })}
                ></TextAreaField>
                <TextAreaField
                  variant="unstyled"
                  placeholder="説明"
                  resize="none"
                  rows={2}
                  register={register('description')}
                ></TextAreaField>
              </Box>
            </Box>
            {renderFooter && renderFooter(formState)}
          </>
        );
      }}
    </Form>
  );
};
