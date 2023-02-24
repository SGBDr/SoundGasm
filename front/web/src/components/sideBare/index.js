import React from 'react';
import styled from 'styled-components'
import { COLOR } from '../../utils';

export const SideBar = () => {


    return(
        <Wrapper>
            <Home alt="kk" src="/images/home.svg" />

        </Wrapper>
    );

}

const Wrapper = styled.div`
    position: fixed;
    left: 20px;
    top: 96px;

    width: 52px;
    height: 230px;
    border-radius: 32px;

    
    background-color: ${COLOR.darkAlt};
`;

const Home = styled.img`
    position: absolute;
    left: 16px;
    right: 10.42%;
    top: 8.33%;
    bottom: 8.33%;

    :hover {
        fill: #307DB8;
    }
`