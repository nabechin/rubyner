import React, { FC } from 'react';
import { Box, Stack } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';

export const CreateTask: FC = () => {
  return (
    <Stack direction="row" alignItems="center">
      <AddIcon />
      <Box>タスクを追加</Box>
    </Stack>
  );
};
