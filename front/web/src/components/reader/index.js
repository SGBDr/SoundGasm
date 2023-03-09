import React from 'react';
import styled from 'styled-components';
import { COLOR } from '../../utils';
import { Controller } from './controller';

export const Reader = () => {
    const [musicURL, setMusicURL] = React.useState("/images/icons/Dedicace.mp3");

    return(
        <Wrapper>
            <Banner />
            <TitleWrapper>
                <p class="title">Living My Best Life</p>
                <p class="artist">Ben Hector</p>
            </TitleWrapper>
            <Controller
                musicURL={musicURL} />
        </Wrapper>
    );

}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    top: 100px;
    left: 100px;
    width: 300px;
    height: 400px;
    border-radius: 32px;
    padding: 20px;
    
    background-color: ${COLOR.darkAlt};
`;


const Banner = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 32px;
    background-color: ${COLOR.background};
`;

const TitleWrapper = styled.div`
    margin: 10px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 60px;
    p{
        margin: 2px 0; 
        padding: 0;
        font-family: Teko;
        &.title{
            font-weight: 900;
            font-size: 25px;
            color: white;
        }
        &.artist{
            font-weight: 300;
            font-size: 18px;
            color: grey;
        }
    }
`;







