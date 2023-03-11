import React from 'react';
import styled from 'styled-components';
import { COLOR } from '../../utils';
import { Controller } from './controller';

export const Reader = () => {
    const [musicURL, setMusicURL] = React.useState("/images/icons/Dedicace.mp3");

    return(
        <Wrapper>
            <TitleWrapper>
                <p className="title">Living My Best Life</p>
                <p className="artist">By : Ben Hector</p>
            </TitleWrapper>
            <ControlWrapper>
                <Banner />
                <Controller
                    musicURL={musicURL} />
            </ControlWrapper>
        </Wrapper>
    );

}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    bottom: 20px;
    left: 20px;
    right: 20px;
    min-width: 300px;
    height: 200px;
    border-radius: 32px;
    padding: 10px 20px;
    background-color: ${COLOR.darkAlt};
`;


const Banner = styled.img`
    width: 200px;
    height: 120px;
    border-radius: 5px;
    background-color: ${COLOR.background};
    margin: 10px;
`;

const TitleWrapper = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 60px;
    p{
        margin: 2px 0px; 
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

const ControlWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 140px;
    padding: 10px;
`;




