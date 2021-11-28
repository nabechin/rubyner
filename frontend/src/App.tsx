import React, { FC, useEffect, useState } from 'react';
import { Inbox } from './pages/Inbox';
import { Flex, List, ListItem, Box } from '@chakra-ui/react';

type LayoutProps = {
  component: React.ComponentType;
};

const MenuBar: FC = () => {
  const menuList = [{ name: 'インボックス' }];
  return (
    <List>
      {menuList.map((menu) => (
        <ListItem
          _hover={{ backgroundColor: '#ededed' }}
          width="85%"
          marginLeft="auto"
          p="10px"
          rounded="md"
        >
          {menu.name}
        </ListItem>
      ))}
    </List>
  );
};

const Layout: FC<LayoutProps> = (props) => {
  const { component: Component } = props;
  return (
    <>
      <Flex>
        <Box pt="8" width="280px" height="100vh" background="#f7f7f7">
          <MenuBar />
        </Box>
        <Component />
      </Flex>
    </>
  );
};

export const App: FC = () => {
  return (
    <>
      <Layout component={Inbox}></Layout>
    </>
  );
};
