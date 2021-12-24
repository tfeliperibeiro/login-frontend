import React from 'react';

import Register from './pages/Register';
import Login from './pages/Login';
import './App.css';

import { Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <>
      <ChakraProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </ChakraProvider>
    </>
  );
}

export default App;
