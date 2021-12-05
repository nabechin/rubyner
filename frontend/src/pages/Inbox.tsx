import React, { FC, useEffect, useState } from 'react';
import { Container, Box } from '@chakra-ui/react';
import { TaskList } from '~/components/TaskList';
import { Header } from '~/components/Header';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '~/store/index';
import { loadAll } from '~/store/action/task';

export const Inbox: FC = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state: RootState) => state.task.tasks);
  useEffect(() => {
    dispatch(loadAll());
  }, []);
  return (
    <Container maxW="container.md" mt="8">
      <Header />
      <Box mt="4">
        <TaskList tasks={tasks} />
      </Box>
    </Container>
  );
};
