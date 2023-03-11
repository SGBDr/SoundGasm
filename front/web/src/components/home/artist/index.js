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
      .then((data) => {  setArtist(data.response)
        console.log("get artist message : " + data.message)
        console.log("local storage token : " + localStorage.getItem("authToken"))
      })
      .catch((err) => console.log("error", err));
  }, [ok]);

    return(
        <Wrapper>
            <ContentWrapper>
                {artist?.slice(0, 9)?.map((elm, i) => <RenderItem key={i} name={elm.name} />)}
            </ContentWrapper>
        </Wrapper>
    )
}

const Wrapper = styled.div`

    position: absolute;
    top: 380px;
    left: 100px;

    
    display: grid;
    align-items:center;
    justify-content: center;

    width:90%;
    margin-bottom: 30px;
    border-radius: 20px;

    background-color: ${COLOR.darkAlt};

`

const ContentWrapper = styled.div`

    display: flex;
    flex-wrap: wrap;
    padding: 30px;

    justify-content:space-between;
    
`