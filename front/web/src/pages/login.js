import React from 'react';

import styled from 'styled-components';
import { LoginBox } from '../components/loginbox';
import { GlobalStyles } from '../utils/GlobalStyles';

const Login = () => {
  return (
    <LoginContainer>
      <GlobalStyles />
      <Title>Login</Title>
      <LoginBox />
    </LoginContainer>
  )
}

export default Login

export const Head = () => <title>Login</title>

const Title = styled.p`
    font-weight: 900;
    font-family: Teko;
    font-size: 28px;
    color: white;
`;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;