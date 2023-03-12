import React from 'react';
import styled from 'styled-components';
import { COLOR } from '../../../utils';
import { RenderItem } from './RenderItem';

export function ArtistList(){
    
  const [artist, setArtist] = React.useState();
  const [ok, isOk] = React.useState(false);
  React.useEffect(() => {
    fetch(
      "https://soundgasm.herokuapp.com/?controllers=artist&method=GET&all=true",
      {
        method: "GET",
        headers: {
          Token: "TOKEN_5d8eb3591e61a4ff112aa5b9c3a5d80f51b50bb6"
        }
      }
    )
      .then((res) => res.json())
      .then((res) => {setArtist(res.response); console.log(res.response)})
      .catch((err) => console.log("error", err));
  }, [ok]);

    return(
        <Wrapper>
            <ContentWrapper>
                { artist?.length == 0 ?
                    <></> :
                  artist?.slice(0, 20)?.map(elm => <RenderItem name={elm.name} />)
                }
            </ContentWrapper>
        </Wrapper>
    )
}

const Wrapper = styled.div`

    position: absolute;
    top: 430px;
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