import React, { FC, useEffect, useState } from 'react';
import { TopPage } from './pages/TopPage';

type LayoutProps = {
  component: React.ComponentType;
};

const Layout: FC<LayoutProps> = (props) => {
  const { component: Component } = props;
  return (
    <>
      <Component />
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
