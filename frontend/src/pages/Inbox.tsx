import React, { FC, useEffect, useState } from 'react';
import { Container, Box } from '@chakra-ui/react';
import { getTasks, Task } from '~/domain/task';
import { TaskList } from '~/components/TaskList';
import { Header } from '~/components/Header';

export const Inbox: FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  useEffect(() => {
    const get = async () => {
      const tasks = await getTasks();
      setTasks(tasks);
    };
    get();
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
