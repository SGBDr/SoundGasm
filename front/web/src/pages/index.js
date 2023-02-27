import React from 'react';
import { Recommande } from '../components/recommanded';

import { SideBar } from '../components/sideBare';
import { GlobalStyles } from '../utils/GlobalStyles';

const IndexPage = () => {
  return (
    <>
      <GlobalStyles />
      <SideBar />
      <Recommande />
    </>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
