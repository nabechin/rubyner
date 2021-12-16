import React, { FC, useEffect, useState } from 'react';
import { Container, Box } from '@chakra-ui/react';
import TaskList from '~/components/TaskList';
import { Header } from '~/components/Header';
import { TaskDetailDialog } from '~/components/Dialog/TaskDetailDialog';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '~/store/index';
import { loadAll } from '~/store/action/task';
import { useDisclosure } from '~/hooks/useDisclosure';
import { put as putTask } from '~/store/action/task';
import { Task } from '~/domain/task';

export const Inbox: FC = () => {
  const dispatch = useDispatch();
  const [task, setTask] = useState<Task | null>(null);
  const tasks = useSelector((state: RootState) => state.task.tasks);
  const { open, close, isOpen } = useDisclosure();
  useEffect(() => {
    dispatch(loadAll());
  }, []);
  const onHandleOpen = (task: Task) => {
    setTask(task);
    open();
  };

  const onHandleTaskPut = (param: Task) => {
    dispatch(putTask(param));
    setTask(param);
  };

  return (
    <Container maxW="container.md" mt="8">
      <Header />
      <Box mt="4">
        <TaskList tasks={tasks} openTaskDetail={onHandleOpen} />
        <TaskDetailDialog
          close={close}
          isOpen={isOpen}
          task={task}
          onTaskPut={onHandleTaskPut}
        />
      </Box>
    </Container>
  );
};
