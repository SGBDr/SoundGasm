import React, { useState } from 'react';
import styled from 'styled-components';

import { SideBar } from '../components/sideBare';
import { LoginBox } from '../components/loginbox';
import { Reader } from '../components/reader';
import { GlobalStyles } from '../utils/GlobalStyles';

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