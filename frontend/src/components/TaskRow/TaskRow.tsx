import React, { FC, useState } from 'react';

import { Box, Stack, Radio, Button, Flex } from '@chakra-ui/react';
import { EditIcon } from '@chakra-ui/icons';
import { TaskForm } from '~/components/Form/TaskForm';
import { Task } from '~/domain/task';
import { useDispatch } from 'react-redux';
import { put } from '~/store/action/task';

type Props = {
  task: Task;
  openTaskDetail: (task: Task) => void;
};

export const TaskRow: FC<Props> = (props) => {
  const [openTaskForm, setOpenTaskForm] = useState<boolean>(false);
  const { task, openTaskDetail } = props;
  const dispatch = useDispatch();

  const onHandleEdit = (e: React.MouseEvent) => {
    e.stopPropagation();
    setOpenTaskForm(true);
  };

  const onHandleSubmit = (values: Omit<Task, 'id'>) => {
    const data = { ...values, id: task.id };
    dispatch(put(data));
    setOpenTaskForm(false);
  };
  return (
    <>
      {openTaskForm ? (
        <TaskForm
          onSubmit={onHandleSubmit}
          defaultValues={task}
          renderFooter={(formState) => (
            <Stack direction="row" pt={2}>
              <Button
                size="md"
                colorScheme="blue"
                type="submit"
                isLoading={formState.isSubmitting}
                disabled={!formState.isValid}
                id="task-create"
              >
                保存
              </Button>
              <Button
                size="md"
                colorScheme="gray"
                variant="outline"
                onClick={() => setOpenTaskForm(false)}
              >
                キャンセル
              </Button>
            </Stack>
          )}
        ></TaskForm>
      ) : (
        <Stack
          key={task.id}
          direction="row"
          onClick={() => openTaskDetail(task)}
          borderBottom="1px"
          borderColor="gray.100"
          lineHeight="2.3rem"
        >
          <Radio />
          <Flex alignItems="center" justifyContent="space-between" width="100%">
            <Box>{task.name}</Box>
            <EditIcon onClick={onHandleEdit} />
          </Flex>
        </Stack>
      )}
    </>
  );
};
