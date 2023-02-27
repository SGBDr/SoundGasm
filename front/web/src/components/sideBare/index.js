import React from 'react';
import styled from 'styled-components'
import { COLOR } from '../../utils';

export const SideBar = () => {


    return(
        <Wrapper>
            <ContentWrapper>
                <img className='icon' alt="kk" src="/images/icons/home2.svg" />
                <img className='icon' alt="kk" src="/images/icons/heart.svg" />
                <img className='icon' alt="kk" src="/images/icons/album.svg" />
                <img className='icon' alt="kk" src="/images/icons/playlist.svg" />
                <img className='icon' alt="kk" src="/images/icons/profil.svg" />
            </ContentWrapper>

        </Wrapper>
    );

}

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    position: fixed;
    left: 20px;
    top: 96px;

    width: 52px;
    height: 300px;
    border-radius: 32px;

    
    background-color: ${COLOR.darkAlt};
`;

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    
    
    height: 250px;

    .icon: hover {
        fill: #DA4567;
        left: 30;
    }
`;
