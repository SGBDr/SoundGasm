import React from 'react';
import styled from 'styled-components';
import { COLOR } from '../../../utils';

export function RenderItem({data}) {
    console.log("data", data)
    const handlePlayMusic = (musicInfo) => {
        localStorage.setItem('musicInfo', JSON.stringify(musicInfo));
        window.dispatchEvent(new CustomEvent("storage",{
        detail: { key: "musicInfo",
                  newValue: JSON.stringify(musicInfo) }
          }));
        console.log("Correctly Stored in local Storage");
        // redirect to MusicPlayer component
      }
    const Card = ({name, src, artist, item}) =>{
        return(
            <Wrapper onClick={()=>handlePlayMusic(item)}>
                <img alt={name} src={src} style={{marginRight: "5px", width:"32px", height:"32px"}}/>
                <Text>{artist}  {name}</Text>
            </Wrapper>
        )
    }
    return(
        data === undefined || data.length == 0? 
            <></>:
            <SearchContent>
                {data?.map((elm, i) => <Card key={i} item={elm} name={elm.name} src={elm.rep_image} artist={elm.artist} />)}
            </SearchContent>

    )
}


const SearchContent = styled.div`

    position: absolute;
    top: 65px;
    left: 10px;
    z-index: 1;

    
    width: 96.3%;
    border-radius: 8px;
    background-color: ${COLOR.text};

    display: flex;
    flex-direction: column;


`

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items:center;
    padding: 8px;
    :hover{
        background-color: rgba(0,0,0,.1);
        cursor: pointer;
    }
`

const Text = styled.p`

    font-weight: 900;
`