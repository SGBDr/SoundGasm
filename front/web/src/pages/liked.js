import React, { useState, useEffect} from 'react';

import styled from 'styled-components';
import { SideBar } from '../components/sideBare';
import { LoginBox } from '../components/loginbox';
import { Reader } from '../components/reader';
import { GlobalStyles } from '../utils/GlobalStyles';

const Liked = () => {
  const [authToken, setAuthToken] = useState(localStorage.getItem('authToken') || null);

  useEffect(() => {
    // This code will be executed each time the authToken value changes
     if(authToken != null) localStorage.setItem('authToken', authToken);
  }, [authToken]);

  function handleSetAuthToken(newToken) {
    setAuthToken(newToken);
  }
  return (
    <>
      <GlobalStyles />
      {
        (localStorage.getItem("authToken") == null)?
          <LoginBox
            setAuthToken = {handleSetAuthToken}
          />
          :
          <>
            <SideBar />
            <Title>Liked</Title>
            <Reader />
          </>
      }
    </>
  )
}

export default Liked

export const Head = () => <title>Liked</title>
const Title = styled.p`
    position: absolute;
    top: 25px;
    left: 150px;

    font-weight: 900;
    font-family: Teko;
    font-size: 28px;
    color: white;
`