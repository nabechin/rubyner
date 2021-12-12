import React, { FC, useState } from 'react';

import { Box, Stack, Radio, Divider, Button } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import { TaskForm } from '~/components/TaskForm';
import { Task } from '~/domain/task';

type TaskListProps = {
  tasks: Task[];
  openTaskDetail: (task: Task) => void;
};

const TaskList: FC<TaskListProps> = (props) => {
  const { tasks, openTaskDetail } = props;
  const [openTaskForm, setOpenTaskForm] = useState<boolean>(false);

  return (
    <Box>
      <Stack _hover={{ cursor: 'pointer' }}>
        {tasks.map((task) => (
          <>
            <Stack direction="row" onClick={() => openTaskDetail(task)}>
              <Radio />
              <Box>{task.name}</Box>
            </Stack>
            <Divider />
          </>
        ))}
        {openTaskForm ? (
          <TaskForm
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
                  タスクを追加
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
          />
        ) : (
          <Stack
            direction="row"
            alignItems="center"
            onClick={() => setOpenTaskForm(true)}
          >
            <AddIcon />
            <Box>タスクを追加</Box>
          </Stack>
        )}
      </Stack>
    </Box>
  );
};

export default React.memo(TaskList);
