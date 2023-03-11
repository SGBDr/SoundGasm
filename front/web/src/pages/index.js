import React, { useState, useEffect } from 'react';
import { ArtistList } from '../components/home/artist';
import { Recommande } from '../components/home/recommanded';
import { Searchbar } from '../components/home/searchbar';
import { LoginBox } from '../components/loginbox';
import { Reader } from '../components/reader';

import { SideBar } from '../components/sideBare';
import { GlobalStyles } from '../utils/GlobalStyles';

const IndexPage = () => {
  // localStorage.removeItem('authToken');
  const [authToken, setAuthToken] = useState(localStorage.getItem('authToken'));

  useEffect(() => {
    // This code will be executed each time the authToken value changes
     if(authToken !== undefined) localStorage.setItem('authToken', authToken);
     console.log("local storage token : " + localStorage.getItem('authToken'));
     console.log("js var token : " + authToken);
  }, [authToken]);

  function handleSetAuthToken(newToken) {
    setAuthToken(newToken);
  }

  return(
    <>
      <GlobalStyles />
      {
        (authToken == null)?
          <LoginBox
            setAuthToken = {handleSetAuthToken}
          />
          :
          <>
            <Searchbar />
            <SideBar />
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
