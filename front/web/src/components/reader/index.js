import React from 'react';
import styled from 'styled-components';
import { COLOR } from '../../utils';
import { Controller } from './controller';

export const Reader = () => {
    const [musicURL, setMusicURL] = React.useState("/images/icons/Dedicace.mp3");

    return(
        <PlayerBox>
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
        </PlayerBox>
    );

}
const PlayerBox = styled.div`
    position: fixed;
    display: block;
    background-color: ${COLOR.background};
    bottom: 0px;
    right: 0px;
    left: 0px;
    height: 220px;
`;

const Wrapper = styled.div`
    position: absolute;
    left: 100px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    min-width: 300px;
    width: 87.5%;
    height: 200px;
    border-radius: 32px;
    padding: 0px 20px;
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
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 50px;
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
    height: 150px;
`;




