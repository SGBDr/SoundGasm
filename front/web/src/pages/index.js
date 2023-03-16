import React, { useState } from 'react';
import { ArtistList } from '../components/home/artist';
import { Recommande } from '../components/home/recommanded';
import { Searchbar } from '../components/home/searchbar';
import { LoginBox } from '../components/loginbox';
import { Reader } from '../components/reader';

import { SideBar } from '../components/sideBare';
import { GlobalStyles } from '../utils/GlobalStyles';

const IndexPage = () => {
  // localStorage.removeItem('authToken');
  const [authToken, setAuthToken] = useState(undefined);

  function handleSetAuthToken(newToken) {
    setAuthToken(newToken);
  }
  console.log('indexPage', authToken)

  return(
    <>
      <GlobalStyles />
      {
        (authToken == undefined)?
          <LoginBox
            setAuthToken = {handleSetAuthToken}
          />
          :
          <>
            <Searchbar />
            <SideBar setAuthToken = {handleSetAuthToken}/>
            <Recommande />
            <ArtistList />
            <Reader />
          </>
      }
    </>
  )

}

export default IndexPage

export const Head = () => <title>Home Page</title>
