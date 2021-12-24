import { Alert, AlertIcon } from '@chakra-ui/react';
import P from 'proptypes';

const AlertError = ({ message }) => {
  return (
    <Alert width={'30%'} marginTop={'30px'} status="error">
      <AlertIcon />
      {message}
    </Alert>
  );
};

const AlertSuccess = ({ message }) => {
  return (
    <Alert width={'30%'} marginTop={'30px'} status="success">
      <AlertIcon />
      {message}
    </Alert>
  );
};

AlertError.propTypes = {
  message: P.string,
};

AlertSuccess.propTypes = {
  message: P.string,
};

export { AlertError, AlertSuccess };
