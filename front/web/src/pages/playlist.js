import React from 'react';

import styled from 'styled-components';
import { PlaylistList } from '../components/playlist';
import { MusicList } from '../components/playlist/musics';

const Playlist = React.memo(() => {

  return (
    <>
      <PlaylistList />
      <MusicList />
    </>
  )
})

export default Playlist

export const Head = () => <title>Playlist</title>