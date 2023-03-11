import React from 'react';
import styled from 'styled-components';
import { COLOR } from '../../../utils';
import { RenderItem } from './RenderItem';

export function ArtistList(){
    
  const [artist, setArtist] = React.useState([]);
  const [ok, isOk] = React.useState(false);
  React.useEffect(() => {
    fetch(
      "https://soundgasm.herokuapp.com/?controllers=artist&method=GET&all=true",
      {
        method: "GET",
        headers: {
          Token: localStorage.getItem('authToken')
        }
      }
    )
      .then((res) => res.json())
      .then((res) => {  setArtist(res.response)
        console.log("get artist message : " + res.message)
        console.log("local storage token : " + localStorage.getItem("authToken"))
      })
      .catch((err) => console.log("error", err));
  }, [ok]);

    return(
        <Wrapper>
            <Title>Artist</Title>
            <ContentWrapper>
                {artist?.slice(0, 15)?.map((elm, i) => <RenderItem key={i} name={elm.name} />)}
            </ContentWrapper>
        </Wrapper>
    )
}

const Wrapper = styled.div`

    position: absolute;
    top: 380px;
    left: 100px;

    
    display: grid;
    align-items:space-between;
    justify-content: center;

    width:90%;
    height: 320px;
    margin-bottom: 30px;
    border-radius: 20px;

    background-color: ${COLOR.darkAlt};

`;

const ContentWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 0 30px;
    height: 240px;

    overflow: auto;
    ::-webkit-scrollbar { width: 0;};

    justify-content:space-between;
    
`;

const Title = styled.p`
    margin: 10px 0 0 0;
    height: 40px;
    font-weight: 900;
    font-family: Teko;
    color: white;
    font-size: 28px;
    padding-left: 30px;
`;