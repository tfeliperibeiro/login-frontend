import React, { useState } from 'react';

import { FormControl, FormLabel, Input, Button, Box, Text } from '@chakra-ui/react';
import { AlertError, AlertSuccess } from '../component/Alerts';
import { Link } from 'react-router-dom';

const Register = () => {
  const [dataRegister, setDataRegister] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [resultRegister, setResultRegister] = useState({});

  const handleDataRegister = ({ target }) => {
    setDataRegister({ ...dataRegister, [target.name]: target.value });
  };

  const handleClickRegister = async () => {
    const { name, email, password } = dataRegister;
    const data = await fetch('https://applogin2021.herokuapp.com/register', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
    });
    const dataJson = await data.json();

    setResultRegister(dataJson);
  };

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
          Register
        </Text>
        <FormControl
          isRequired
          display={'flex'}
          flexDirection={'column'}
          maxWidth={'80%'}
          justifyContent={'center'}
          className="form-control"
        >
          <FormLabel htmlFor="name">Nome:</FormLabel>
          <Input
            onChange={handleDataRegister}
            name="name"
            variant={'filled'}
            type="text"
            id="name"
          />
          <FormLabel htmlFor="email">Email:</FormLabel>
          <Input
            onChange={handleDataRegister}
            name="email"
            variant={'filled'}
            type="email"
            id="email"
          />
          <FormLabel htmlFor="password">Senha:</FormLabel>
          <Input
            onChange={handleDataRegister}
            name="password"
            variant={'filled'}
            type="password"
            id="password"
          />
          <Button
            onClick={handleClickRegister}
            size={'lg'}
            marginTop={'50px'}
            colorScheme={'telegram'}
            variant={'solid'}
          >
            Criar conta
          </Button>
        </FormControl>
        {resultRegister.status === 'Error' ? <AlertError message={resultRegister.message} /> : null}
        {resultRegister.status === 'Success' ? (
          <>
            <AlertSuccess message={resultRegister.message} />
            <Link style={{ marginTop: '30px' }} to={'/'}>
              Fazer login
            </Link>
          </>
        ) : null}
      </Box>
    </>
  );
};

export default Register;
