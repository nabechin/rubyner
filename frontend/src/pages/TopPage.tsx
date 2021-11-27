import React, { FC, useEffect, useState } from 'react';
import {
  Container,
  Flex,
  Grid,
  Box,
  Button,
  FormControl,
  Input,
  FormLabel,
} from '@chakra-ui/react';
import { Formik, Form, Field, FormikHelpers, FieldProps } from 'formik';
import { DeleteIcon } from '@chakra-ui/icons';
import axios from 'axios';

export const TopPage: FC = () => {
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

  const onHandleSubmit = async (
    values: Values,
    { setSubmitting }: FormikHelpers<Values>
  ) => {
    const res = await client.post('tasks', values);
    setTasks([...tasks, res.data.task]);
    setSubmitting(false);
  };

  const onHandleDelete = async (id: string) => {
    const res = await client.delete(`tasks/${id}`);
    setTasks(tasks.filter((v) => v.id !== res.data.task.id));
  };

  return (
    <Container padding={100}>
      <Grid gap={10}>
        <Flex align="center">
          <Formik initialValues={{ name: '' }} onSubmit={onHandleSubmit}>
            {(props) => (
              <Form>
                <Field name="name">
                  {({ field }: FieldProps) => (
                    <FormControl>
                      <FormLabel>task name</FormLabel>
                      <Input {...field}></Input>
                    </FormControl>
                  )}
                </Field>
                <Button mt={4} type="submit" isLoading={props.isSubmitting}>
                  登録
                </Button>
              </Form>
            )}
          </Formik>
        </Flex>
        <Flex direction="column">
          {tasks.map((t, idx) => (
            <Flex align="center" mb={2} key={idx}>
              <Box
                borderBottom="1px solid grey"
                minWidth="100px"
                textAlign="center"
                mr={2}
              >
                {t.name}
              </Box>
              <DeleteIcon
                onClick={async () => await onHandleDelete(t.id)}
              ></DeleteIcon>
            </Flex>
          ))}
        </Flex>
      </Grid>
    </Container>
  );
};
