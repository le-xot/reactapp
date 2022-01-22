import Router from './Router';
import Header from './components/Header';
import React from 'react';
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <Header />
      <Router />
    </ChakraProvider>
  );
}

export default App;