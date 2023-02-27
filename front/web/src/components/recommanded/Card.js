import React from 'react';
import styled from 'styled-components';
import { COLOR } from '../../utils';

export function Card({item}){

    return(
        <Wrapper></Wrapper>
    );
}

const Wrapper = styled.div`
    color: rgba(255, 255, 255, 1);

    margin: 10px;

    width: 200px;
    height: 200px;
    border-radius: 20px;

    background-color: ${COLOR.text}
`