import React, { FC } from 'react';
import { Flex, Box } from '@chakra-ui/react';
import { ArrowUpDownIcon } from '@chakra-ui/icons';

export const Header: FC = () => {
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
