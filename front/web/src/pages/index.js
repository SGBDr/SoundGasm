import React from 'react';
import { ArtistList } from '../components/home/artist';
import { Recommande } from '../components/home/recommanded';
import { Searchbar } from '../components/home/searchbar';
import Search from '../components/home/searchbar/Search';

import { SideBar } from '../components/sideBare';
import { GlobalStyles } from '../utils/GlobalStyles';

const IndexPage = () => {
  return (
    <>
      <GlobalStyles />
      {/* <Search /> */}
      <Searchbar />
      <SideBar />
      <Recommande />
      <ArtistList />
    </>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
