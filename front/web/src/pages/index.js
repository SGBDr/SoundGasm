import React from 'react';
import { ArtistList } from '../components/home/artist';
import { Recommande } from '../components/home/recommanded';

const IndexPage = () => {

  return (
    <div style={{margin: "0", padding: "0", display: "flex", flexDirection: "column"}}>
      <Recommande />
      <ArtistList />
    </div>
  )

}

export default IndexPage

export const Head = () => <title>Home Page</title>
