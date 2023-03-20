import React, { useEffect } from "react";
import styled from "styled-components";
import { COLOR } from "../../../utils";
import * as CL from "../../reader/list";

export const Card = React.memo(({ item, id }) => {
  const [isSelected, setIsSelected] = React.useState(false);

  useEffect(()=>{
    const checkSelected = (evt) => {
      console.log("I get the event");
      if (evt.detail.key === "playlistChange" && evt.detail.newId === id)
        setIsSelected(true);
      else setIsSelected(false);
    }
    window.addEventListener("playlist", checkSelected);
  },[])

  const handleClickPlaylist = () => {
    window.dispatchEvent(new CustomEvent("playlist", {
      detail: {
        key: "playlistChange",
        newValue: item,
        newId: id
      }
    }));
  }

  function handleKeyDown(event, musicInfo) {
    if (event.key === 'Enter') {
      handleListPlay(item.musics);
    }
  }

  function handleListPlay(){
    CL.initVoidList();
    CL.setCurrentIndex(1);
    CL.batchAddToList(item.musics);
    window.dispatchEvent(new CustomEvent("playlist", {
      detail: {
        key: "batchPlay",
      }
    }));
  }

  const len = item.name.split("(")[0].length;
  // console.log(len);
  return (
    <Wrapper className={(isSelected)?"select":""}>
      <ContentWrapper onClick={handleClickPlaylist}>
        <div title="Jouer la playlist" className="play" onClick={() => handleListPlay(item.musics)} onKeyDown={(e) => handleKeyDown(e, item)}
          style={{ position: "relative", display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50px' }}
          role="tab" aria-selected="true" tabIndex="0" >
          <img src='/images/icons/play.svg' alt='play' />
        </div>
        <div style={{ display: "flex", flexDirection: "column", height: '150px', alignItems: "center", justifyContent: "space-between", }}>
          <Image src={(item?.musics[0])?item.musics[0]?.rep_image : "https://picsum.photos/200/200/?random"} alt={item.name} />
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

  &.select{
    background-color: ${COLOR.menu};
  }

  background-color: ${COLOR.text};
  transition: 0.3s ease-in-out;
  :hover {
    cursor: pointer;
    transform: translateY(-5px);
    background-color: #FFED3;
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
      background-color: ${COLOR.secondary};
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
