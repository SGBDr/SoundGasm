import React from 'react';

import { SideBar } from '../components/sideBare';
import { GlobalStyles } from '../utils/GlobalStyles';

const IndexPage = () => {
  return (
    <>
      <GlobalStyles />
      <SideBar />
    </>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
