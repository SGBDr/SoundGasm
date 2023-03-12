import React, { useRef, useState, useEffect} from 'react';
import styled from 'styled-components';
import { COLOR } from '../../utils';

export const Controller = (props) => {
    // initialise Ref to manipulate inbuild audio tag
    const audioRef = useRef(null);
    const [musicURL, setMusicURL] = useState(props.musicURL);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [isPlaying, setIsPlaying] = useState({state: false, text: "play"});

    //Listen to changes in musicURL in parent component
    useEffect(() => {
        setMusicURL(props.musicURL);
      }, [props.musicURL]);

    // Listen to time update in inbuild audio player
    const handleTimeUpdate = () => {
        const newTime = audioRef.current.currentTime;
        setCurrentTime(newTime);
        if(currentTime === duration) setIsPlaying({state: false, text: "play"});
    }

    // Listen to metadata loading in inbuild audio player
    const handleLoadedMetadata = () => {
        const newDuration = audioRef.current.duration;
        setDuration(newDuration);
        audioRef.current.play();
        setIsPlaying({state: true, text: "pause"});
    }

    // Listen to end of music being played
    const handleAudioEnded = () =>{
        setIsPlaying({state: false, text: "play"});
    }

    // Play/pause inbuild audio player onClick
    const handlePlayPause = () => {
        if(musicURL) {
            if(isPlaying.state) {
                setIsPlaying({state: false, text: "play"});
                audioRef.current.pause();
            }
            else{
                setIsPlaying({state: true, text: "pause"});
                audioRef.current.play();
            }
        }
    };

    const handleForward = () => {
        let newTime=currentTime+10;
        newTime=(newTime<0)?0:(newTime>duration)?duration:newTime;
        setCurrentTime(newTime);
        audioRef.current.currentTime = newTime;
    }

    const handleBackward = () => {
        let newTime=currentTime-10;
        newTime=(newTime<0)?0:(newTime>duration)?duration:newTime;
        setCurrentTime(newTime);
        audioRef.current.currentTime = newTime;
    }
    // Synchronise range with inbuild audio player
    const handleRangeChange = (event) => {
        audioRef.current.currentTime = event.target.value;
        setCurrentTime(audioRef.current.currentTime);
    };

    // convert seconds to standard minutes
    const secondsToMinutes=(seconds)=> {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = Math.floor(seconds % 60);
        const formattedSeconds = remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds;
        return `${minutes}:${formattedSeconds}`;
    }


    return(
        <ControlWrapper>
            <audio ref={audioRef}
                preload="metadata"
                src={musicURL}
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
                onEnded={handleAudioEnded}
            />
            <ControlRangeWrapper>
                <input className="play-range"
                    type="range"
                    min="0" max={audioRef.current ? audioRef.current.duration+0.001 : 0}
                    step="0.01"
                    value={currentTime}
                    onChange={handleRangeChange}/>
                <div className="start-stop">
                    <p>{secondsToMinutes(currentTime)}</p>
                    <p>{secondsToMinutes(duration-currentTime)}</p>
                </div>
            </ControlRangeWrapper>
            <ControlTabWrapper>
                <MyButton id="b-like"> <Svg viewBox="0 0 55 55"><use xlinkHref="/images/icons/player/like.svg#like-off" /></Svg> </MyButton>
                <MyButton id="b-prev" onClick={handleBackward}><Svg viewBox="0 0 50 50"><use xlinkHref="/images/icons/player/change.svg#previous" /></Svg></MyButton>
                <MyButton id="b-play" onClick={handlePlayPause}><Svg viewBox="0 0 50 50"><use xlinkHref={`/images/icons/player/play.svg#${isPlaying.text}`} /></Svg></MyButton>
                <MyButton id="b-next" onClick={handleForward}><Svg viewBox="0 0 50 50"><use xlinkHref="/images/icons/player/change.svg#next" /></Svg></MyButton>
                <MyButton id="b-rep"><Svg viewBox="0 0 50 50"><use xlinkHref="/images/icons/player/repeat.svg#repeat-off" /></Svg></MyButton>
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