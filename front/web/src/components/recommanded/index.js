import React from 'react';
import styled from 'styled-components';
import { COLOR } from '../../utils';
import {Card} from './Card'

const Data=[
    {nom: 'ok'},
    {nom: 'ok'},
    {nom: 'ok'},
    {nom: 'ok'},
    {nom: 'ok'},
    {nom: 'ok'},
    {nom: 'ok'},
    {nom: 'ok'},
    {nom: 'ok'},
    {nom: 'ok'},
    {nom: 'ok'},
    {nom: 'ok'},
    {nom: 'ok'},
    {nom: 'ok'},
    {nom: 'ok'},
    {nom: 'ok'},
    {nom: 'ok'},
    {nom: 'ok'},
    {nom: 'ok'},
    {nom: 'ok'},
    {nom: 'ok'},
    {nom: 'ok'},
    {nom: 'ok'},
    {nom: 'ok'},
    {nom: 'ok'},
    {nom: 'ok'},
    {nom: 'ok'},
    {nom: 'ok'},
    {nom: 'ok'},
    {nom: 'ok'},
    {nom: 'ok'},
    {nom: 'ok'},
    {nom: 'ok'},
    {nom: 'ok'},
    {nom: 'ok'},
    {nom: 'ok'},
];

export function Recommande(){



    return(
        <Wrapper>
            <Title>{Data?.length}</Title>
            <ContentWrapper>
                { Data.map(elm => <Card item={elm} />) }
            </ContentWrapper>
            
        </Wrapper>
    );
}

const Wrapper = styled.div`
    position: fixed;
    top: 96px;
    left: 100px;

    
    display: grid;
    gap: 10px;

    width: 90%;
    height: 300px;
    overflow: auto;
    ::-webkit-scrollbar { width: 0;};

    border-radius: 20px;

    background-color: ${COLOR.darkAlt};
`
const ContentWrapper = styled.div`

    
    display: grid;
    grid-template-columns: repeat(${Data?.length}, 200px);
    gap: 50px;

    width: 95%;
    height: 300px;
    margin: 30px;
    overflow: auto;
    ::-webkit-scrollbar { width: 0;};


    background-color: ${COLOR.darkAlt};
`

const Title = styled.p`

`