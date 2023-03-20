import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { COLOR } from '../../utils';
import { CardAlbum } from './CardAlbum';
import { Link } from 'gatsby';
import * as cleanUp from '../../../utils/authClean';

export function PlaylistList() {

  const [playlist, setPlaylist] = React.useState();
  const [name, setName] = useState("");
  const [ok, isOk] = React.useState(false);
  React.useEffect(() => {
    fetch(
      "https://soundgasm.herokuapp.com/?controllers=playlist&method=GET&by=USER",
      {
        method: "GET",
        headers: {
          Token: localStorage.getItem("authToken")
        }
      }
    )
      .then((res) => res.json())
      .then((res) => {
        if (res.response === cleanUp.errMsg) cleanUp.tokenCleanUp();
        setPlaylist(res.response.playlists);
        console.log(res);
      })
      .catch((err) => console.log(err));

  }, [ok]);

  const [showConfirmation, setShowConfirmation] = useState(false);
  const confRef = useRef(null);

  const handleNewPlaylist = () => {
    setShowConfirmation(true);
    //   confRef.current.focus();
  };

  const handleConfirm = (evt) => {
    const val = evt.target.textContent;
    setShowConfirmation(false);
    // Perform the action of disconnecting here
    if (localStorage.getItem("authToken") && val === "valider") {
      fetch(
        "https://soundgasm.herokuapp.com/?controllers=playlist&method=PUT&name=" + name,
        {
          method: "POST",
          headers: {
            Token: localStorage.getItem('authToken')
          }
        })
        .then((res) => res.json())
        .then((data) => {
          if (data.response === cleanUp.errMsg) cleanUp.tokenCleanUp();
          console.log(data)
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <>

      <Wrapper>
        <TitleHead>Playlist</TitleHead>
        <Link style={{ position: 'absolute', left: '125px', top: '26px' }} to="#" onClick={handleNewPlaylist}> <Img className='icon' alt="kk" src="/images/icons/setting.svg" /> </Link>

        <ContentWrapper>
          {playlist === undefined ? null : playlist?.map((elm, i) => <CardAlbum key={i} item={elm} />)}
        </ContentWrapper>
      </Wrapper>
      {showConfirmation && (
        <ConfirmationBox ref={confRef} tabIndex={-1}>
          <p>entrer les infos de la playlist</p>
          <Label>
            Nom: <Input type="text" value={name} onChange={(event) => setName(event.target.value)} />
          </Label>
          <div style={{ width: "65%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0, 20px" }} >
            <button className='bttn' onClick={handleConfirm} style={{ backgroundColor: `${COLOR.primary}` }} >valider</button>
            <button className='bttn' onClick={handleConfirm} style={{ backgroundColor: `${COLOR.secondary}` }} >annuler</button>
          </div>
        </ConfirmationBox>
      )}
    </>
  )
}

const TitleHead = styled.p`
margin: 10px 0 0 0;
height: 40px;
font-weight: 900;
font-family: Teko;
color: white;
font-size: 28px;
padding-left: 30px;
`

const Wrapper = styled.div`
    position: absolute;
    top: 98px;
    left: 100px;
    right: 50px;
    display: grid;
    height: 280px;

    align-items: center;

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
    height: 230px;
    margin-left: 30px;
    margin-top: 20px;

    overflow: auto;
    ::-webkit-scrollbar { width: 0; display:none; };


    background-color: ${COLOR.darkAlt};
`

const Title = styled.p`
    margin-bottom: 10px;
    font-weight: 1100;
    font-family: Teko;
    color: white;
    font-size: 28px;
    margin-left: 30px;
`
const Img = styled.img`
    transition: 0.2s ease-in-out;
    :hover{
        transform: scale(2);
    }
`;
const ConfirmationBox = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding: 10px;
    border-radius: 32px;
    background-color: ${COLOR.background};
    border: 10px solid ${COLOR.playButtonCard};
    box-shadow: 0 0 10px ${COLOR.playButtonCard};
    z-index: 9999;
    p, .bttn{
        font-size: 25px;
        font-weight: 700;
        color: white;
    }

    .bttn{
        font-size: 20px;
        padding: 5px 10px;
        border-radius: 32px;
        border: none;
        transition: 0.3s ease-in-out;
        :hover{
            cursor: pointer;
            transform: scale(1.1);
            border: 2px solid;
        }
    }

`;
const Input = styled.input`
  padding: 10px;
  width: 80%;
  margin-bottom: 10px;
  border: none;
  border-radius: 5px;
`;
const Label = styled.label`
  color: ${COLOR.text};
  font-size: 18px;
  width: 100%;
`;

