import React, {useState } from 'react';
import styled from 'styled-components';

import { SideBar } from '../components/sideBare';
import { LoginBox } from '../components/loginbox';
import { Reader } from '../components/reader';
import { GlobalStyles } from '../utils/GlobalStyles';

const Album = () => {
  const [authToken, setAuthToken] = useState(localStorage.getItem('authToken'));

  function handleSetAuthToken(newToken) {
    setAuthToken(newToken);
  }
  return (
    <>
      <GlobalStyles />
      {
        (localStorage.getItem("authToken") == undefined)?
          <LoginBox
            setAuthToken = {handleSetAuthToken}
          />
          :
          <>
            <SideBar setAuthToken = {handleSetAuthToken}/>
            <Title>Album</Title>
            <Reader />
          </>
      }
    </>
  )
}

export default Album

export const Head = () => <title>Album</title>

const Title = styled.p`
    position: absolute;
    top: 25px;
    left: 150px;

    font-weight: 900;
    font-family: Teko;
    font-size: 28px;
    color: white;
`