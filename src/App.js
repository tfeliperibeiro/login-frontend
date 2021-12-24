import React from 'react';

import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import './App.css';

import { Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <>
      <ChakraProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </ChakraProvider>
    </>
  );
}

export default App;
