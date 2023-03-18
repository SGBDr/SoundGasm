import React from 'react';
import styled from 'styled-components';
import { COLOR } from '../../utils';
import useMyContext from '../context/contextDialog';
import { showNav } from '../context/contextMenuManager';


export function RenderItem({ data }) {

    // Initialisation with useEffect

    const context = useMyContext();

    console.log("data", data)
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

    const Card = ({ name, src, artist, item, context }) => {
        return (
            <Wrapper onClick={() => handlePlayMusic(item)} onContextMenu={(event) => showNav(event, context, item)}>
                <img alt={name} src={src} style={{ marginRight: "5px", width: "32px", height: "32px" }} />
                <Text>{artist}  {name}</Text>
            </Wrapper>
        )
    }

    return (
        data === undefined || data.length === 0 ?
            <></> :
            <SearchContent>
                {data?.map((elm, i) => <Card key={i} item={elm} name={elm.name} src={elm.rep_image} artist={elm.artist} context={context} />)}
            </SearchContent>

    )
}


const SearchContent = styled.div`
    position: absolute;
    top: 40px;
    left: 10px;
    z-index: 10;

    
    width: 99%;
    border-radius: 8px;
    background-color: ${COLOR.textBlur};

    display: flex;
    flex-direction: column;

    box-shadow: 0 10px 10px white;

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