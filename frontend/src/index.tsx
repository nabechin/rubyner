import React from 'react';
import ReactDom from 'react-dom';
import { App } from '~/App';
import { ChakraProvider } from '@chakra-ui/react';

ReactDom.render(
  <ChakraProvider>
    <App></App>
  </ChakraProvider>,
  document.getElementById('root')
);
