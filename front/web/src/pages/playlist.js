import React from 'react';

import styled from 'styled-components';
import { SideBar } from '../components/sideBare';
import { GlobalStyles } from '../utils/GlobalStyles';

const Playlist = () => {
  return (
    <>
      <GlobalStyles />
      <SideBar />
      <Title>Playlist</Title>
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