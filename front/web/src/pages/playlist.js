import React, { useState } from 'react';

import styled from 'styled-components';
import { SideBar } from '../components/sideBare';
import { LoginBox } from '../components/loginbox';
import { Reader } from '../components/reader';
import { GlobalStyles } from '../utils/GlobalStyles';
import { PlaylistList } from '../components/home/playlist';

const Playlist = () => {
  const [authToken, setAuthToken] = useState("TOKEN_5e9234e1d7f9778089233419799ca7cb27136cb7");

  function handleSetAuthToken(newToken) {
    setAuthToken(newToken);
  }
  
  return (
    <>
      <GlobalStyles />
      {
        (authToken == undefined)?
          <LoginBox
            setAuthToken = {handleSetAuthToken}
          />
          :
          <>
            <SideBar setAuthToken = {handleSetAuthToken}/>
            <Title>Playlist</Title>
              <PlaylistList />
            <Reader />
          </>
      }
    </>
  )
}

export default Playlist

export const Head = () => <title>Playlist</title>
const Title = styled.p`
    position: absolute;
    top: 25px;
    left: 150px;

    font-weight: 900;
    font-family: Teko;
    font-size: 28px;
    color: white;
`