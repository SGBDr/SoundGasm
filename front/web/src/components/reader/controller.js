import React, { useRef, useState, useEffect} from 'react';
import styled from 'styled-components';
import { COLOR } from '../../utils';

export const Controller = (props) => {
    // initialise Ref to manipulate inbuild audio tag
    const audioRef = useRef(null);
    const [musicURL, setMusicURL] = useState(props.musicURL);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    
    //Listen to changes in musicURL in parent component
    useEffect(() => {
        setMusicURL(props.musicURL);
      }, [props.musicURL]);
    
    // Listen to time update in inbuild audio player
    const handleTimeUpdate = () => {
        const newTime = audioRef.current.currentTime;
        setCurrentTime(newTime);
        if(currentTime == duration) setIsPlaying(false);
    }

    // Listen to metadata loading in inbuild audio player
    const handleLoadedMetadata = () => {
        const newDuration = audioRef.current.duration;
        setDuration(newDuration);
    }

    // Play/pause inbuild audio player onClick
    const handlePlayPause = () => {
        if(isPlaying) {
            setIsPlaying(false);
            audioRef.current.pause();
        }
        else{
            setIsPlaying(true);
            audioRef.current.play();
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
            />
            <ControlRangeWrapper>
                <input className="play-range"
                    type="range"
                    min="0" max={audioRef.current ? audioRef.current.duration : 0}
                    value={currentTime}
                    onChange={handleRangeChange}/>
                <div class="start-stop">
                    <p>{secondsToMinutes(currentTime)}</p>
                    <p>{secondsToMinutes(duration-currentTime)}</p>
                </div>
            </ControlRangeWrapper>
            <ControlTabWrapper>
                <MyButton id="b-prev"><img class="icon" alt="..." src="/images/icons/player/previous.png" /></MyButton>
                <MyButton id="b-back" onClick={handleBackward}><img class="icon" alt="..." src="/images/icons/player/backward.png" /></MyButton>
                <MyButton id="b-play" onClick={handlePlayPause}><img class="icon" alt="..." src={isPlaying?"/images/icons/player/pause.png":"/images/icons/player/play.png"} /></MyButton>
                <MyButton id="b-for" onClick={handleForward}><img class="icon" alt="..." src="/images/icons/player/forward.png" /></MyButton>
                <MyButton id="b-next"><img class="icon" alt="..." src="/images/icons/player/next.png" /></MyButton>
            </ControlTabWrapper>
        </ControlWrapper>
    );

}

const ControlWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;
    height: 200px;
    width: 100%;
    
    
`;

const ControlRangeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 20px;
    width: 100%;
    // &,*{
    //     border: 2px solid red;
    // }
    *{
        margin: 0;
        padding: 0;
    }
    .play-range{
        width: 100%;
        margin: 0 0 5px  0;
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
    height: 100px;
    
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
        border: 1px solid ${COLOR.secondary};
        border-radius: 5px;
    }
`
