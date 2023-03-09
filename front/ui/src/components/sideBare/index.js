import React from 'react';
import styled from 'styled-components'
import { COLOR } from '../../utils';

export const SideBar = () => {


    return(
        <div></div>
        // <Wrapper>
        //     <Home alt="ok" src="/images/icons/home.svg" />

        // </Wrapper>
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

    .home {
        
    }
`;

const Home = styled.div`
    width: 20x;
    height: 10px;
    top: 100;
`