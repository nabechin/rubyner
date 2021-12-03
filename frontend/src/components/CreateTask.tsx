import React, { FC, useState } from 'react';
import { Box, Stack, Button } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import Form from '~/components/Form';
import { Task, createTask } from '~/domain/task';
import { TextAreaField } from '~/components/Form/TextAreaField';

export const CreateTask: FC = () => {
  const [openTaskCreateForm, setOpenTaskCreateForm] = useState<boolean>(false);
  const onHandleSubmit = async (values: Omit<Task, 'id'>) => {
    await createTask(values);
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
