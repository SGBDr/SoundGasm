import React from 'react';

import styled from 'styled-components';
import { PlaylistList } from '../components/home/playlist';

const Playlist = React.memo(() => {

  return (
    <>
      <Title>Playlist</Title>
      <PlaylistList />
    </>
  )
})

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