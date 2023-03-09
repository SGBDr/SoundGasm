import React from 'react';
import { GlobalStyles } from '../utils/GlobalStyles';
import { Reader } from '../components/reader';

const IndexPage = () => {
  return (
    <>
      <GlobalStyles />
      <Reader />
      
    </>
  )
}

export default IndexPage

export const Head = () => <title>Test</title>
