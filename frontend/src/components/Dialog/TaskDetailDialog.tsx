import React, { FC, useState } from 'react';
import {
  Box,
  Button,
  Stack,
  Modal,
  ModalContent,
  ModalOverlay,
  ModalHeader,
  ModalBody,
  Radio,
  Flex,
  Spacer,
} from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';

import { TaskForm } from '~/components/Form/TaskForm';
import { Task } from '~/domain/task';

type Props = {
  close: () => void;
  isOpen: boolean;
  task: Task | null;
  onTaskPut: (task: Task) => void;
};

export const TaskDetailDialog: FC<Props> = (props) => {
  const { close, isOpen, task, onTaskPut } = props;
  const [openTaskForm, setOpenTaskForm] = useState<boolean>(false);
  const onHandleClose = () => {
    setOpenTaskForm(false);
    close();
  };
  if (!task) return null;

  const onHandleTaskPut = (values: Omit<Task, 'id'>) => {
    const param = { ...values, id: task.id };
    onTaskPut(param);
    setOpenTaskForm(false);
  };
  return (
    <Modal isOpen={isOpen} onClose={onHandleClose} size={'xl'}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Flex alignItems="center">
            インボックス
            <Spacer />
            <CloseIcon onClick={onHandleClose} />
          </Flex>
        </ModalHeader>
        <ModalBody>
          {openTaskForm ? (
            <TaskForm
              onSubmit={(values) => onHandleTaskPut(values)}
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
            />
          ) : (
            <Flex>
              <Box>
                <Radio size="lg" marginTop="5px"></Radio>
              </Box>
              <Box
                marginLeft="10px"
                onClick={() => setOpenTaskForm(true)}
                width="100%"
              >
                <Box marginLeft="10px" fontWeight="bold" fontSize="lg">
                  {task.name}
                </Box>
                <Box marginLeft="10px" fontSize="sm" fontWeight="thin">
                  {task.description}
                </Box>
              </Box>
            </Flex>
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
