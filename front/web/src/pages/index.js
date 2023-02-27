import React from 'react';
import { Recommande } from '../components/recommanded';
import { Searchbar } from '../components/searchbar';

import { SideBar } from '../components/sideBare';
import { GlobalStyles } from '../utils/GlobalStyles';

const IndexPage = () => {
  return (
    <>
      <GlobalStyles />
      <Searchbar />
      <SideBar />
      <Recommande />
    </>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
