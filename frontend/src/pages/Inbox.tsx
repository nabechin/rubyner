import React, { FC, useEffect, useState } from 'react';
import { Container, Flex, Box, Stack, Radio, Divider } from '@chakra-ui/react';
import { ArrowUpDownIcon, AddIcon } from '@chakra-ui/icons';
import { getTasks, Task } from '~/domain/task';

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

const Header: FC = () => {
  return (
    <Flex justifyContent="space-between" alignItems="center">
      <Box fontSize="20" fontWeight="bold">
        インボックス
      </Box>
      <Box>
        <Flex
          alignItems="center"
          _hover={{ backgroundColor: '#ededed' }}
          rounded="md"
          p="1"
        >
          <ArrowUpDownIcon marginRight="1" />
          <Box>表示</Box>
        </Flex>
      </Box>
    </Flex>
  );
};

type TaskListProps = {
  tasks: Task[];
};

const TaskList: FC<TaskListProps> = (props) => {
  const { tasks } = props;
  return (
    <Box>
      <Stack _hover={{ cursor: 'pointer' }}>
        {tasks.map((task) => (
          <>
            <Stack direction="row">
              <Radio />
              <Box>{task.name}</Box>
            </Stack>
            <Divider />
          </>
        ))}
        <CreateTask />
      </Stack>
    </Box>
  );
};

const CreateTask: FC = () => {
  return (
    <Stack direction="row" alignItems="center">
      <AddIcon />
      <Box>タスクを追加</Box>
    </Stack>
  );
};
