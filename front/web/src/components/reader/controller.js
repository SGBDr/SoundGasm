import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { COLOR } from '../../utils';
import * as CL from './list';

let isLoaded = false;

export const Controller = (props) => {
    // initialise Ref to manipulate inbuild audio tag
    const audioRef = useRef(null);
    const [music, setMusic] = useState(props.music);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [isPlaying, setIsPlaying] = useState({ state: false, text: "play" });
    const [isLiked, setIsLiked] = useState({ state: false, text: "like-off" });
    const [isRepeating, setIsRepeating] = useState({ state: false, text: "repeat-off" });

    //Listen to changes in music in parent component
    useEffect(() => {
        setMusic(props.music);
    }, [props.music]);

    // Listen to time update in inbuild audio player
    const handleTimeUpdate = () => {
        const newTime = audioRef.current.currentTime;
        setCurrentTime(newTime);
        if (currentTime === duration) setIsPlaying({ state: false, text: "play" });
    }

    // Listen to metadata loading in inbuild audio player
    const handleLoadedMetadata = () => {
        const newDuration = audioRef.current.duration;
        setDuration(newDuration);
        if (isLoaded) {
            audioRef.current.play();
            setIsPlaying({ state: true, text: "pause" });
        }
        checkLiked();
    }

    // Listen to end of music being played
    const handleAudioEnded = () => {
        if (isRepeating.state)
            setTimeout(() => {
                audioRef.current.play();
            }, 1000);
        else {
            setIsPlaying({ state: false, text: "play" });
        }
    }

    // Play/pause inbuild audio player onClick
    const handlePlayPause = () => {
        if (music) {
            if (isPlaying.state) {
                setIsPlaying({ state: false, text: "play" });
                audioRef.current.pause();
            }
            else {
                isLoaded = true;
                setIsPlaying({ state: true, text: "pause" });
                audioRef.current.play();
            }
        }
    };

    const handleLike = () => {
        if (music) {
            const url = `https://soundgasm.herokuapp.com/?controllers=music&method=UPDATE&action=${(isLiked.state) ? "UN" : ""}LIKE&music_id=${music.id}`;
            console.log("URL : " + url);
            fetch(url,
                {
                    method: "GET",
                    headers: {
                        Token: localStorage.getItem('authToken')
                    }
                })
                .then(res => res.json())
                .then(result => {
                    console.log(result.response)
                    setIsLiked((isLiked.state) ? { state: false, text: "like-off" } : { state: true, text: "like-on" })
                })
                .catch(err => console.log(err))
        }
    }

    const checkLiked = () => {
        const url = `https://soundgasm.herokuapp.com/?controllers=music&method=GET&by=LIKE`;
        fetch(url,
            {
                method: "GET",
                headers: {
                    Token: localStorage.getItem('authToken')
                }
            })
            .then(res => res.json())
            .then(result => {
                const likedMusics = result.response.musics;
                console.log("Liked Musics");
                console.log(likedMusics);
                const mySong = likedMusics.find((song) => song.music_id === music.id);
                setIsLiked((mySong) ? { state: true, text: "like-on" } : { state: false, text: "like-off" });

            })
            .catch(err => console.log(err))

    }


    const handleRepeat = () => {
        if (music) {
            if (isRepeating.state) {
                // code pour annuler la boucle
                setIsRepeating({ state: false, text: "repeat-off" });
            }
            else {
                // code pour lire en boucle
                setIsRepeating({ state: true, text: "repeat-on" });
            }
        }
    }

    const handleNext = () => {
        if (CL.getCurrentIndex() < CL.getList().length)
            props.handleChange(1);
    }

    const handlePrevious = () => {
        if (CL.getCurrentIndex() > 1)
            props.handleChange(-1);
    }


    // Synchronise range with inbuild audio player
    const handleRangeChange = (event) => {
        audioRef.current.currentTime = event.target.value;
        setCurrentTime(audioRef.current.currentTime);
    };

    // convert seconds to standard minutes
    const secondsToMinutes = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = Math.floor(seconds % 60);
        const formattedSeconds = remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds;
        return `${minutes}:${formattedSeconds}`;
    }


    return (
        <ControlWrapper>
            <audio ref={audioRef}
                preload="metadata"
                src={(music) ? music.URL : ""}
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
                onEnded={handleAudioEnded}
            />
            <ControlRangeWrapper>
                <input className="play-range"
                    type="range"
                    min="0" max={audioRef.current ? (audioRef.current.duration + 0.001).toString() : "0"}
                    step="0.01"
                    value={currentTime}
                    onChange={handleRangeChange} />
                <div className="start-stop">
                    <p>{secondsToMinutes(currentTime)}</p>
                    <p>{secondsToMinutes(duration - currentTime)}</p>
                </div>
            </ControlRangeWrapper>
            <ControlTabWrapper>
                <MyButton id="b-like" onClick={handleLike}> <Svg viewBox="0 0 55 55"><use xlinkHref={`/images/icons/player/like.svg#${isLiked.text}`} /></Svg> </MyButton>
                <MyButton id="b-prev" onClick={handlePrevious}><Svg viewBox="0 0 50 50"><use id="u-prev" xlinkHref="/images/icons/player/change.svg#previous" /></Svg></MyButton>
                <MyButton id="b-play" onClick={handlePlayPause}><Svg viewBox="0 0 50 50"><use xlinkHref={`/images/icons/player/play.svg#${isPlaying.text}`} /></Svg></MyButton>
                <MyButton id="b-next" onClick={handleNext}><Svg viewBox="0 0 50 50"><use id="u-next" xlinkHref="/images/icons/player/change.svg#next" /></Svg></MyButton>
                <MyButton id="b-rep" onClick={handleRepeat}><Svg viewBox="0 0 50 50"><use xlinkHref={`/images/icons/player/repeat.svg#${isRepeating.text}`} /></Svg></MyButton>
            </ControlTabWrapper>
        </ControlWrapper>
    );

}

const ControlWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    max-width: 400px;
    width: 100%;
    margin: 0 20px;
    // border: 1px solid orange;
`;

const ControlRangeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: auto;
    margin-bottom: 10px;
    width: 100%;
    *{
        margin: 0;
        padding: 0;
    }
    .play-range{
        width: 100%;
        margin: 0 0 5px  0;
        &:hover{
            cursor: pointer;
        }
    }
    .start-stop{
        width: 100%;
        display: flex;
        justify-content: space-between;
        font-family: Teko;
        font-size: 13px;
        font-weight: 800;
        color: white;
    }
`;

const ControlTabWrapper = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: auto;
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