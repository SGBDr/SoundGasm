import React from 'react';
import styled from 'styled-components';

const Album = () => {

  return (
    <>
      <Title>Album</Title>
    </>
  )
}

export default Album

export const Head = () => <title>Album</title>

const Title = styled.p`
    position: absolute;
    top: 25px;
    left: 150px;

    font-weight: 900;
    font-family: Teko;
    font-size: 28px;
    color: white;
`