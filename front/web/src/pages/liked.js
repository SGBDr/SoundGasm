import React from 'react';

import styled from 'styled-components';

const Liked = () => {

  return (
    <>
        <Title>Liked</Title>
    </>
  )
}

export default Liked

export const Head = () => <title>Liked</title>
const Title = styled.p`
    position: absolute;
    top: 25px;
    left: 150px;

    font-weight: 900;
    font-family: Teko;
    font-size: 28px;
    color: white;
`