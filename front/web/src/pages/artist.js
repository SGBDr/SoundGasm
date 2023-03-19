import React from 'react';
import { PrefArtists } from '../components/prefAtist/artists';
import { MusicList } from '../components/prefAtist/musics';
const Artist = React.memo(() => {

  return (
    <>
      <PrefArtists />
      <MusicList />
    </>
  )
})

export default Artist

export const Head = () => <title>Artist</title>
