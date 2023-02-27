import React from 'react';
import styled from 'styled-components';
import { COLOR } from '../../utils';

export function Card({item}){

    return(
        <Wrapper>
            <ContentWrapper><p>{item.nom}</p></ContentWrapper>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    color: rgba(255, 255, 255, 1);
    display: grid;
    align-items: center;
    justify-content: center;

    width: 200px;
    height: 200px;
    border-radius: 20px;

    background-color: ${COLOR.text};
`
const ContentWrapper = styled.div`
    color: black;
    display: grid;
    align-items: center;
    justify-content: center;

    width: 180px;
    height: 180px;
    border-radius: 20px;

    border: 1px solid green;
`