import React, { useState, useEffect } from 'react';

import { FormControl, FormLabel, Input, Button, Box, Text } from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import { AlertError, AlertSuccess } from '../component/Alerts';
import { Spinner } from '@chakra-ui/react';

const Login = () => {
  const [dataLogin, setDataLogin] = useState({
    email: '',
    password: '',
  });

  const [resultLogin, setResultLogin] = useState({});
  const navigate = useNavigate();
  const timeout = 3000;

  const handleDataLogin = ({ target }) => {
    setDataLogin({ ...dataLogin, [target.name]: target.value });
  };

  const handleClickLogin = async () => {
    const { email, password } = dataLogin;
    const data = await fetch('https://applogin2021.herokuapp.com/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
    const dataJson = await data.json();
    console.log(dataJson);
    setResultLogin(dataJson);
  };

  useEffect(() => {
    if (resultLogin.redirect) {
      setTimeout(() => {
        navigate('home');
      }, timeout);
    }

    localStorage.setItem('logged', resultLogin.redirect);
  }, [resultLogin, navigate]);

  return (
    <>
      <Box
        height={'100vh'}
        width={'100vw'}
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Text fontSize="4xl" style={{ marginBottom: '30px' }}>
          Login
        </Text>
        <FormControl
          isRequired
          display={'flex'}
          flexDirection={'column'}
          maxWidth={'80%'}
          justifyContent={'center'}
        >
          <FormLabel htmlFor="email">Email:</FormLabel>
          <Input
            onChange={handleDataLogin}
            variant={'filled'}
            type="email"
            id="email"
            name="email"
          />
          <FormLabel htmlFor="password">Senha:</FormLabel>
          <Input
            onChange={handleDataLogin}
            variant={'filled'}
            type="password"
            id="password"
            name="password"
          />
          <Button
            onClick={handleClickLogin}
            size={'lg'}
            marginTop={'50px'}
            colorScheme={'blue'}
            variant={'solid'}
          >
            Login
          </Button>
        </FormControl>
        <Link style={{ marginTop: '30px' }} to={'/register'}>
          Cadastre-se
        </Link>
        {resultLogin.status === 'Error' ? <AlertError message={resultLogin.message} /> : null}
        {resultLogin.redirect === true ? (
          <>
            <AlertSuccess message={resultLogin.message} />
            <Spinner color="blue" marginTop={'30px'} />
          </>
        ) : null}
      </Box>
    </>
  );
};

export default Login;
