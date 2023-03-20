import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { COLOR } from '../../../utils';
import { Card } from './Card'
import useMyContext from '../../context/contextDialog';
import * as cleanUp from '../../../utils/authClean';

export const PlaylistList = React.memo(() => {

    const [playlist, setPlaylist] = useState([]);
    const [selectedId, setSelectedId] = useState(undefined);
    const contextPlaylist = useMyContext();

    useEffect(() => {
        updateList();
        const handlePlaylistEvent = (evt) => {
            if (evt.detail.key === "playlistAdd")
                updateList();
            else if (evt.detail.key === "playlistChange"){
                console.log("playlistChange")
                setSelectedId(evt.detail.newId);
                console.log("Hey select: "+selectedId)
            }
        }


        window.addEventListener("playlist", handlePlaylistEvent);
    }, [])

    useEffect(() => {
        const userName = localStorage.getItem("userName");
        const list = playlist.map((elm, i) => ({ id: elm.playlist_id, name: elm.name }))
        // console.log("list"); console.log(list);
        localStorage.setItem(`${userName}Playlist`, JSON.stringify(list));
        console.log('userPlaylist : ' + localStorage.getItem(`${userName}Playlist`))
    }, [playlist])

    const updateList = () => {
        fetch(
            "https://soundgasm.herokuapp.com/?controllers=playlist&method=GET&by=USER",
            {
                method: "GET",
                headers: {
                    Token: localStorage.getItem("authToken")
                }
            }
        )
            .then(res => res.json())
            .then(data => {
                if (data.response === cleanUp.errMsg) cleanUp.tokenCleanUp();
                setPlaylist(data.response.playlists);
                console.log(data.response);
                console.log("local storage token : " + localStorage.getItem("authToken"))
            })
            .catch((err) => console.log(err));
    }

    const handleCreate = async () => {
        const name = await contextPlaylist("confirm", { message: "Nommez la nouvelle playlist", confirmBtnLabel: "Créer", isEdit: true });
        if (name) {
            console.log("New playlist Name = " + name);
            // Requete pour creer la nouvelle playlist
            fetch(
                `https://soundgasm.herokuapp.com/?controllers=playlist&method=PUT&name=${name}`,
                {
                    method: "POST",
                    headers: {
                        Token: localStorage.getItem('authToken')
                    }
                }
            )
                .then((res) => res.json())
                .then((data) => {
                    if (data.response === cleanUp.errMsg) cleanUp.tokenCleanUp();
                    if (data.response?.add) updateList();
                    console.log(data)
                })
                .catch((err) => console.log(err));
        }
    };

    const handleDelete = async () => {
        if (selectedId) {
            const choix = await contextPlaylist("confirm", { message: "Supprimer la playlist ?", confirmBtnLabel: "Oui" });
            if (choix) {
                fetch(
                    `https://soundgasm.herokuapp.com/?controllers=playlist&method=DELETE&playlist_id=${selectedId}`,
                    {
                        method: "POST",
                        headers: {
                            Token: localStorage.getItem('authToken')
                        }
                    }
                )
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.response === cleanUp.errMsg) cleanUp.tokenCleanUp();
                        else updateList();
                        console.log(data)
                    })
                    .catch((err) => console.log(err));
            }
        }
    }

    return (
        <Wrapper>
            <TitleWrapper>
                <Title>My Playlists</Title>
                <Flex>
                    <Img className='tooltip' id="Delete" onClick={handleDelete}> <Svg viewBox="0 0 55 55"><use xlinkHref={`/images/icons/delete.svg#delete`} /></Svg> </Img>
                    <Img className='tooltip' id="Create" onClick={handleCreate}> <Svg viewBox="0 0 55 55"><use xlinkHref={`/images/icons/add.svg#add`} /></Svg> </Img>
                </Flex>
            </TitleWrapper>
            <ContentWrapper>

                {playlist === undefined ? null : playlist?.map((elm, i) => <Card key={i} item={elm} id={elm.playlist_id} />)}
            </ContentWrapper>

        </Wrapper>
    );
})

const Wrapper = styled.div`
    position: absolute;
    top: 60px;
    left: 100px;
    right: 50px;
    
    display: grid;

    height: 300px;

    overflow: auto;
    ::-webkit-scrollbar { width: 0;};
    border-radius: 20px;
    background-color: ${COLOR.darkAlt};
`
const ContentWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(20, 200px);
    gap: 50px;

    width: 95%;
    height: 200px;
    margin-left: 30px;
    margin-bottom: 20px;
    padding-top: 10px;
    overflow: auto;
    ::-webkit-scrollbar { width: 0; display:none; };


    background-color: ${COLOR.darkAlt};
`

const TitleWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: auto;
    margin: 0;
    padding: 0;
    width: 100%;
`;

const Title = styled.p`
    margin: 10px 0 0 0;
    height: 40px;
    font-weight: 900;
    font-family: Teko;
    color: white;
    font-size: 28px;
    padding-left: 30px;
`

const Img = styled.button`
    background: transparent;
    // border: 1px solid red;
    border: none;
    .icon{
        width: 25px;
        height: 25px;
    }
    &.tooltip{ pointer-events: all ;}

    &.tooltip::after {
        // z-index: 9999;
        content: attr(id);
        position: fixed;
        bottom: auto;
        padding: 5px;
        background-color: ${COLOR.text};
        color: ${COLOR.darkAlt};
        font-size: 15px;
        font-weight: 700;
        border-radius: 5px;
        opacity: 0;
        transition: opacity 0.3s ease;
      }

    &.tooltip:hover::after {
        opacity: 1;
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

const Flex = styled.div`
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 50px;
    margin: 0;
    padding: 0;
`;