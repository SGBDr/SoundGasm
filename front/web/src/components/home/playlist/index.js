import React from 'react';
import styled from 'styled-components';
import { COLOR } from '../../../utils';
import { CardAlbum } from './CardAlbum';

export function PlaylistList(){
    
  const [playlist, setPlaylist] = React.useState();
  const [ok, isOk] = React.useState(false);
  React.useEffect(() => {
    fetch(
      "https://soundgasm.herokuapp.com/?controllers=playlist&method=GET&by=USER",
      {
        method: "GET",
        headers: {
          Token: localStorage.getItem('authToken')
        }
      }
    )
      .then((res) => res.json())
      .then((res) => {setPlaylist(res.response.playlists);console.log(res);})
      .catch((err) => console.log("error", err));
  }, [ok]);

    return(
        <Wrapper>
            <ContentWrapper>
                {playlist===undefined?null:playlist?.map((elm, i) => <CardAlbum key={i} item={elm} />)}
            </ContentWrapper>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    position: absolute;
    top: 98px;
    left: 100px;

    
    display: grid;

    width: 90%;
    height: 78%;

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
    overflow: auto;
    ::-webkit-scrollbar { width: 0; display:none; };


    background-color: ${COLOR.darkAlt};
`

const Title = styled.p`
    margin-bottom: 10px;

    font-weight: 900;
    font-family: Teko;
    color: white;
    font-size: 28px;
    margin-left: 30px;
`