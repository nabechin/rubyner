import React, { FC, useState } from 'react';
import { Box, Stack, Button } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import Form from '~/components/Form';
import { Task } from '~/domain/task';
import { create } from '~/store/action/task';
import { TextAreaField } from '~/components/Form/TextAreaField';
import { useDispatch } from 'react-redux';

export const CreateTask: FC = () => {
  const [openTaskCreateForm, setOpenTaskCreateForm] = useState<boolean>(false);
  const diapatch = useDispatch();
  const onHandleSubmit = (values: Omit<Task, 'id'>) => {
    diapatch(create(values));
  };
  return (
    <>
      {openTaskCreateForm ? (
        <Form<Omit<Task, 'id'>>
          onSubmit={onHandleSubmit}
          id="task-create"
          options={{ mode: 'onChange' }}
        >
          {({ register, formState }) => {
            const { isValid, isSubmitting } = formState;
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
                <Stack direction="row" pt={2}>
                  <Button
                    size="md"
                    colorScheme="blue"
                    type="submit"
                    isLoading={isSubmitting}
                    disabled={!isValid}
                    id="task-create"
                  >
                    タスクを追加
                  </Button>
                  <Button
                    size="md"
                    colorScheme="gray"
                    variant="outline"
                    onClick={() => setOpenTaskCreateForm(false)}
                  >
                    キャンセル
                  </Button>
                </Stack>
              </>
            );
          }}
        </Form>
      ) : (
        <Stack
          direction="row"
          alignItems="center"
          onClick={() => setOpenTaskCreateForm(true)}
        >
          <AddIcon />
          <Box>タスクを追加</Box>
        </Stack>
      )}
    </>
  );
};
