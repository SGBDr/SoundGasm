import React from 'react';
import { Like } from '../components/liked';

import styled from 'styled-components';

const Liked = React.memo(() => {

  return (
    <Wrapper>
        <Title>Liked</Title>
        <Like />
    </Wrapper>
  )
})

export default Liked

export const Head = () => <title>Liked</title>

const Wrapper = styled.div`

    position: relative;
    left: 100px;
    top: 50px;

    width: 90%;
    height: 605px;

`

const Title = styled.div`
    position: relative;
    top: 0px;
    left: 0px; 

    padding: 3px;
    font-weight: 900;
    font-family: Teko;
    font-size: 28px;
    color: white;
`