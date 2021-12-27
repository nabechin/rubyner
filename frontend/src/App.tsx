import React, { FC } from 'react';
import { Inbox } from '~/pages/Inbox';
import { Flex, List, ListItem, Box } from '@chakra-ui/react';
import { useActions, useAppState } from './components/App';

type Page = 'inbox' | 'null';
type Menu = {
  type: Page;
  name: string;
};

const MenuBar: FC = () => {
  const actions = useActions();
  const menuList: Menu[] = [{ type: 'inbox', name: 'インボックス' }];
  return (
    <List>
      {menuList.map((menu) => (
        <ListItem
          _hover={{ backgroundColor: '#ededed' }}
          width="85%"
          marginLeft="auto"
          p="10px"
          rounded="md"
          onClick={() => actions.goTo(menu.type)}
        >
          {menu.name}
        </ListItem>
      ))}
    </List>
  );
};

type LayoutProps = {
  page: Page;
};

const Layout: FC<LayoutProps> = (props) => {
  const { page } = props;
  return (
    <>
      <Flex>
        <Box pt="8" width="280px" height="100vh" background="#f7f7f7">
          <MenuBar />
        </Box>
        <AppContent page={page} />
      </Flex>
    </>
  );
};

type AppContentProps = {
  page: Page;
};

const AppContent: FC<AppContentProps> = (props) => {
  switch (props.page) {
    case 'inbox': {
      return <Inbox />;
    }
    default: {
      return null;
    }
  }
};

export const App: FC = () => {
  const { page, AppProvider } = useAppState();
  return (
    <AppProvider>
      <Layout page={page}></Layout>
    </AppProvider>
  );
};
