import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { COLOR } from '../../utils';
import { Controller } from './controller';
import * as CL from './list';

export const Reader = React.memo(() => {
    const [musicInfo, setMusicInfo] = useState(undefined);
    const [music, setMusic] = useState(undefined);

    useEffect(() => {
        const handleStorageChange = (event) => {
            if (event.detail.key === "musicInfo") {
                const storedMusicInfo = event.detail.newValue;
                if (storedMusicInfo) {
                    // console.log(storedMusicInfo);
                    console.log(CL.isPresentInList(storedMusicInfo));
                    if (!CL.isPresentInList(storedMusicInfo)) {
                        CL.addToList(storedMusicInfo);
                        CL.setCurrentIndex(CL.getList().length);
                    }
                    setMusicInfo(JSON.parse(storedMusicInfo));
                    localStorage.removeItem('musicInfo');
                    // console.log("Current List : ")
                    // console.log(CL.getList());
                    console.log("Current Index : " + CL.getCurrentIndex());
                }
            }
        };

        const readPlaylist = (evt) => {
            if(evt.detail.key === "batchPlay")
                setMusicInfo(CL.getCurrentValue());
        }

        window.addEventListener("storage", handleStorageChange);
        window.addEventListener("playlist", readPlaylist);
        CL.initaliseList();
        if (CL.getList().length > 0) setMusicInfo(CL.getCurrentValue())
        console.log(CL.getList());
        return () => {
            window.removeEventListener("storage", handleStorageChange);
        };
    }, []);

    useEffect(() => {
        if (musicInfo) {
            setMusic({ id: musicInfo.music_id, URL: musicInfo.track });

        }
    }, [musicInfo]);

    const handleMusicChange = (val) => {
        CL.setCurrentIndex(CL.getCurrentIndex() + val);
        console.log("Current Index: " + CL.getCurrentIndex());
        setMusicInfo(CL.getCurrentValue());
    }

    return (
        <Wrapper>
            <InfoWrapper>
                <Banner src={(musicInfo) ? musicInfo.rep_image : "https://source.unsplash.com/random/200x120"} />
                <TitleWrapper>
                    <p className="title">{(musicInfo) ? musicInfo.name : "Titre"}</p>
                    <p className="artist">By : {(musicInfo) ? musicInfo.artist : "Artist"}</p>
                </TitleWrapper>
            </InfoWrapper>
            <MyButton title="vider la liste de lecture" onClick={() => CL.initVoidList()}> <Svg viewBox="0 0 55 55"><use xlinkHref={`/images/icons/delete.svg#del`} /></Svg> </MyButton>
            <Controller music={music} handleChange={handleMusicChange} />
        </Wrapper>
    );

})

const Wrapper = styled.div`
    bottom: 15px;
    right: 50px;
    left: 100px;

    position: absolute;
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    min-width: 300px;

    height: 100px;
    border-radius: 32px;
    padding: 0px 0px;
    background-color: ${COLOR.darkAlt};
`;


const Banner = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 20px;
    background-color: ${COLOR.background};
    box-shadow: 0 0 10px white;
    margin: 10px;
`;

const TitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: space-between;
    height: 50px;
    p{
        margin: 2px 0px;
        padding: 0;
        font-family: Teko;
        &.title{

            height: 100px;
            font-weight: 900;
            font-size: 22px;
            color: white;
        }
        &.artist{
            font-weight: 300;
            font-size: 18px;
            color: grey;
        }
    }
`;

const InfoWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    width: 100%;
    height: 100px;
    gap: 10px;
`;

const MyButton = styled.button`
    background: transparent;
    border: none;
    .icon{
        width: 25px;
        height: 25px;
    }
    &:hover{
        cursor: pointer;
        use{
            fill: ${COLOR.secondary};
            transform: scale(1.2);
        }
    }
`
const Svg = styled.svg`
    width: 25px;
    height: 25px;
    use{
        fill: white;
        transition: 0.3s ease-in-out;
    }

`;




