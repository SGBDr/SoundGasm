import React from 'react';
import { ArtistList } from '../components/home/artist';
import { Recommande } from '../components/home/recommanded';

const IndexPage = () => {

  return (
    <>
      <Recommande />
      <ArtistList />
    </>
  )

}

export default IndexPage

export const Head = () => <title>Home Page</title>
