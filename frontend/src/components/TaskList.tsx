import React, { FC } from 'react';

import { Box, Stack, Radio, Divider } from '@chakra-ui/react';
import { CreateTask } from '~/components/CreateTask';
import { Task } from '~/domain/task';

type TaskListProps = {
  tasks: Task[];
};

export const TaskList: FC<TaskListProps> = (props) => {
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
