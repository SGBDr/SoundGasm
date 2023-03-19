import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { COLOR } from "../../../utils";
import useMyContext from "../../context/contextDialog";
import { showNav } from "../../context/contextMenuManager";
import { isMusicLiked } from "../../context/contextMenuManager";

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

export const Card = React.memo(({ item }) => {
  const [isLiked, setIsLiked] = useState(false);

  // Initialisation with useEffect
  useEffect(() => {
    isMusicLiked(item.music_id, setIsLiked, false);
    const handleIsLikedChange = (event) => {
      if (event.detail.key === "like" && event.detail.id === item.music_id)
        setIsLiked(event.detail.newValue)
    }
    window.addEventListener("likeChange", handleIsLikedChange);
  }, [ item ]);

  // Changes in Liked state in reader are sent to recomended cards but not the reverse
  // Liking current playing music via recommended tab won't update like on reader
  

  const context = useMyContext();

  const len = item.name.split("(")[0].length;
  // console.log(len);
  return (
    <Wrapper>
      <ContentWrapper onContextMenu={(event) => showNav(event, context, item, isLiked, setIsLiked)}>
        <div className="play" onClick={() => handlePlayMusic(item)} onKeyDown={(e) => handleKeyDown(e, item)}
          style={{ position: "relative", display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50px' }}
          role="tab" aria-selected="true" tabIndex="0" >
          <img src='/images/icons/play.svg' alt='play' />
        </div>
        <div style={{ display: "flex", flexDirection: "column", height: '150px', alignItems: "center", justifyContent: "space-between", }}>
          <Image src={item.rep_image} alt={item.name} />
          <Text className="text">{len <= 20 ? item.name.split("(")[0] : item.name.split("(")[0].slice(0, 17).replace(/.$/, '...')}</Text>
        </div>
      </ContentWrapper>
    </Wrapper>
  );
})

const Wrapper = styled.div`
  color: rgba(255, 255, 255, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 200px;
  height: 200px;
  border-radius: 20px;

  background-color: ${COLOR.text};
  transition: 0.3s ease-in-out;
  :hover {
    transform: translateY(-5px);
    background-color: #FFE2D3;
  }
`;
const ContentWrapper = styled.div`
  color: black;
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  width: 180px;
  height: 180px;
  border-radius: 20px;

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

const Text = styled.p`
  text-align: center;
  margin-bottom: 0px;
  font-weight: 700;
  
`;

const Image = styled.img`
  width: 125px;
  height: 125px;

  resize-mode: contain;
`;
