import React from 'react';

import { LoginBox } from '../components/loginbox';
import { GlobalStyles } from '../utils/GlobalStyles';

const Login = () => {
  return (
    <>
      <GlobalStyles />
      <LoginBox />
    </>
  )
}

export default Login

export const Head = () => <title>Login</title>
