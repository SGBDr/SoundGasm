import React from "react";
import styled from "styled-components";
import { COLOR } from "../../../utils";

export const RenderItem = React.memo(({ name, item }) => {
  const handlePlayMusic = (musicInfo) => {
    localStorage.setItem('musicInfo', JSON.stringify(musicInfo));
    window.dispatchEvent(new CustomEvent("storage", {
      detail: {
        key: "musicInfo",
        newValue: JSON.stringify(musicInfo)
      }
    }));
    console.log("Correctly Stored in local Storage");
    // redirect to MusicPlayer component
  }
  
  function handleKeyDown(event, musicInfo) {
    if (event.key === 'Enter') {
      handlePlayMusic(musicInfo);
    }
  }

  return (
    <Wrapper>
      <ContentWrapper>
        <Detail> <Text style={{ position: 'absolute', left: 55, top: 10}}>{name}</Text> </Detail>
        <Image
                atl={name}
                src={item.rep_image}
                layout="responsive"
                id="heroImg"
                priority
        />
        <div className="play" onClick={() => handlePlayMusic(item)} onKeyDown={(e) => handleKeyDown(e, item)}
          style={{ position: "relative", display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50px' }}
          role="tab" aria-selected="true" tabIndex="0" >
          <img src='/images/icons/play.svg' alt='play' />
        </div>
      </ContentWrapper>
    </Wrapper>
  );
})

const Wrapper = styled.div`
  position: relative;
  display: grid;
  margin-top: 20px;
  width: 400px;
  transition: 0.3s ease-in-out;
  :hover {
    transform: translateY(-5px);
  }
`;

const ContentWrapper = styled.div`

  display: flex;
  flex-direction: row;

  align-items: center;

  div.play{
    width: 32px; 
    height: 32px;
    background-color: rgba(124, 141, 181, .75);

    transition: 0.3s ease-out;
    &:hover{
      width: 36px;
      height: 36px;
      background-color: orange;
      cursor: pointer;
    }
  }  
`;

const Image = styled.img`

    position: absolute;
    width: 75px;
    height: 75px;

    border-radius: 20px;
`
const Detail = styled.div`
    position: relative;
    left: 10%;

    width: 90%;
    height: 85px;
    background-color: ${COLOR.text};
    
    border-radius: 20px;

`
const Text = styled.p`
    color: black;
    font-weight: 800;
`
