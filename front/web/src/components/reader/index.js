import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { COLOR } from '../../utils';
import { Controller } from './controller';

export const Reader = () => {
    const [musicInfo, setMusicInfo] = useState(undefined);
    const [musicURL, setMusicURL] = useState(undefined);

    useEffect(() => {
        const handleStorageChange = (event) => {
            if(event.detail.key === "musicInfo"){
                const storedMusicInfo = event.detail.newValue;
                if (storedMusicInfo) {
                    setMusicInfo(JSON.parse(storedMusicInfo));
                    localStorage.removeItem('musicInfo');
                    
                }
            }
          };
      
          window.addEventListener("storage", handleStorageChange);
      
          return () => {
            window.removeEventListener("storage", handleStorageChange);
          };
      }, []);

    useEffect(() => {
        if(musicInfo) setMusicURL(musicInfo.track);
      }, [musicInfo]);

    return(
        <PlayerBox>
            <Wrapper>
                <TitleWrapper>
                    <p className="title">{(musicInfo)? musicInfo.name: "Titre"}</p>
                    <p className="artist">By : {(musicInfo)? musicInfo.artist: "Artist"}</p>
                </TitleWrapper>
                <ControlWrapper>
                    <Banner src={(musicInfo)?musicInfo.rep_image:"https://source.unsplash.com/random/200x120"} />
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
    background-color: ${COLOR.transparent};
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




