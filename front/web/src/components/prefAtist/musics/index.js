import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { COLOR } from '../../../utils';
import { RenderItem } from './RenderItem';

export const MusicList = React.memo(() => {
  const [artist, setArtist] = useState(undefined);
  const [musics, setMusics] = useState([]);

  useEffect(()=>{
    const handleArtistChange = (event) => {
      if(event.detail.key==="artist"){
        setArtist(event.detail.newValue);
      }
    }
    window.addEventListener("artistChange", handleArtistChange);

  },[])

  // const [ok, isOk] = React.useState(false);
  useEffect(() => {
    if(artist)
      fetch(
        `https://soundgasm.herokuapp.com/?controllers=music&method=GET&by=TERM&term=${artist}`,
        {
          method: "GET",
          headers: {
            Token: localStorage.getItem("authToken")
          }
        }
      )
        .then((res) => res.json())
        .then((data) => {  setMusics(data.response.musics)
          console.log("get music message : " + data.message)
          console.log("local storage token : " + localStorage.getItem("authToken"))
        })
        .catch((err) => console.log("error", err));
  }, [artist]);

    return(
        <Wrapper>
            <Title>{`${artist} Musics`}</Title>
            <ContentWrapper>
                {musics===undefined?null:musics?.slice(0, 20)?.map((elm, i) => <RenderItem key={elm.music_id} name={elm.name} item={elm}/>)}
            </ContentWrapper>
        </Wrapper>
    )
})

const Wrapper = styled.div`

    position: absolute;
    top: 380px;
    left: 100px;
    right: 50px;
    bottom: 130px;

    display: flex;
    flex-direction: column;
    align-items: space-between;
    justify-content: space-evenly;

    border-radius: 20px;
    // border: 1px solid red;
    background-color: ${COLOR.darkAlt};

`;

const ContentWrapper = styled.div`
    display: flex;
    flex 1;
    flex-wrap: wrap;
    padding: 0 30px;
    overflow: auto;
    ::-webkit-scrollbar { width: 0;};
    // border: 1px solid blue;
    justify-content:space-between;
    align-items: start;

`;

const Title = styled.p`
    margin: 10px 0 0 0;
    height: 40px;
    font-weight: 900;
    font-family: Teko;
    color: white;
    font-size: 28px;
    padding-left: 30px;
    // border: 1px solid orange;
`;