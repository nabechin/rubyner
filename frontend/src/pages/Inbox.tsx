import React, { FC, useEffect, useState } from 'react';
import {
  Container,
  Box,
  Modal,
  ModalContent,
  ModalOverlay,
  ModalHeader,
  ModalBody,
  Stack,
  Radio,
  Flex,
  Spacer,
} from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import TaskList from '~/components/TaskList';
import { Header } from '~/components/Header';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '~/store/index';
import { loadAll } from '~/store/action/task';
import { useDisclosure } from '~/hooks/useDisclosure';
import { Task } from '~/domain/task';

export const Inbox: FC = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state: RootState) => state.task.tasks);
  const [task, setTask] = useState<Task | null>(null);
  const { open, close, isOpen } = useDisclosure();
  const onHandleOpen = (task: Task) => {
    setTask(task);
    open();
  };
  useEffect(() => {
    dispatch(loadAll());
  }, []);
  return (
    <Container maxW="container.md" mt="8">
      <Header />
      <Box mt="4">
        <TaskList tasks={tasks} openTaskDetail={onHandleOpen} />
        <TaskDetailDialog close={close} isOpen={isOpen} task={task} />
      </Box>
    </Container>
  );
};

type Props = {
  close: () => void;
  isOpen: boolean;
  task: Task | null;
};

const TaskDetailDialog: FC<Props> = (props) => {
  const { close, isOpen, task } = props;
  const onHandleClose = () => {
    close();
  };
  if (!task) return null;
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
          <Flex>
            <Box>
              <Radio size="lg" marginTop="5px"></Radio>
            </Box>
            <Box marginLeft="10px">
              <Box marginLeft="10px" fontWeight="bold" fontSize="lg">
                {task.name}
              </Box>
              <Box marginLeft="10px" fontSize="sm" fontWeight="thin">
                {task.description}
              </Box>
            </Box>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
