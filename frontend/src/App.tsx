import React, { FC, useEffect, useState } from 'react';
import { TopPage } from './pages/TopPage';
import { Flex, List, ListItem } from '@chakra-ui/react';

type LayoutProps = {
  component: React.ComponentType;
};

const MenuBar: FC = () => {
  const menuList = [{ name: 'インボックス' }];
  return (
    <List width="280px" height="100vh" background="#f7f7f7" pt="16px">
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
        <MenuBar />
        <Component />
      </Flex>
    </>
  );
};

export const App: FC = () => {
  return (
    <>
      <Layout component={TopPage}></Layout>
    </>
  );
};
