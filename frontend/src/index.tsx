import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { store } from '~/store';
import { App } from '~/App';
import { ChakraProvider } from '@chakra-ui/react';

ReactDom.render(
  <Provider store={store}>
    <ChakraProvider>
      <App></App>
    </ChakraProvider>
  </Provider>,
  document.getElementById('root')
);
