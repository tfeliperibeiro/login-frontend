import React from 'react';

import { FormControl, FormLabel, Input, Button, Box } from '@chakra-ui/react';

const Login = () => {
  return (
    <Box
      height={'100vh'}
      width={'100vw'}
      border={'1px solid black'}
      display={'flex'}
      justifyContent={'center'}
    >
      <FormControl
        isRequired
        display={'flex'}
        flexDirection={'column'}
        maxWidth={'30%'}
        justifyContent={'center'}
      >
        <FormLabel htmlFor="email">Email:</FormLabel>
        <Input variant={'filled'} type="email" id="email" />
        <FormLabel htmlFor="password">Senha:</FormLabel>
        <Input variant={'filled'} type="password" id="password" />
        <Button size={'lg'} marginTop={'50px'} colorScheme={'blue'} variant={'solid'}>
          Login
        </Button>
      </FormControl>
    </Box>
  );
};

export default Login;
