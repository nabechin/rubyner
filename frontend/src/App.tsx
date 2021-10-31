import React, { FC, useEffect, useState } from 'react';
import { Container, Flex, Box } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import axios from 'axios';

export const App: FC = () => {
  const client = axios.create({
    baseURL: 'http://localhost:4000',
    headers: {
      'Content-Type': 'application/json',
    },
    timeout: 3000,
  });
  type Tasks = {
    id: string;
    name: string;
  };
  const [tasks, setTasks] = useState<Tasks[]>([]);
  useEffect(() => {
    client.get('tasks').then((res) => {
      setTasks(res.data.tasks);
    });
  }, []);

  return (
    <Container>
      <Flex
        align="center"
        direction="column"
        justifyContent="center"
        height="100vh"
      >
        {tasks.map((t) => (
          <Flex align="center" mb={2}>
            <Box
              borderBottom="1px solid grey"
              minWidth="100px"
              textAlign="center"
              mr={2}
            >
              {t.name}
            </Box>
            <DeleteIcon></DeleteIcon>
          </Flex>
        ))}
      </Flex>
    </Container>
  );
};
