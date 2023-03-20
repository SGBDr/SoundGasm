import React from 'react';
import styled from 'styled-components';
import * as cleanUp from '../../../utils/authClean';
import {COLOR} from '../../../utils/index';

export const List = ({artist, id}) => {

    const [data, setData] = React.useState([]);

    React.useEffect(()=>{
      console.log(artist, id);
        fetch(
            `https://soundgasm.herokuapp.com/?controllers=music&method=GET&by=TERM&term=${artist}`,
            {
              method: "GET",
              headers: {
                Token: localStorage.getItem("authToken")
              }
            }
          )
            .then(res => res.json())
            .then(rep => {
              if(rep.response === cleanUp.errMsg) cleanUp.tokenCleanUp();
              console.log(rep.response.musics); 
              setData(rep.response.musics.filter(elm => elm.artist === artist))
            })
            .catch((err) =>  console.log(err));
    }, [])
    
    const Render = ({elm}) =>{

      return(
        <Wrapper>
          <ContentWrapper>
            <img style={{borderRadius: "12px", width: "50px", height: "50px"}} src={elm.rep_image} alt={elm.name} />
            <div>
              <p style={{marginLeft: "30px"}}>{elm.name}</p>
            </div>
          </ContentWrapper>
        </Wrapper>
      );
    }
    return(
        data[0]?.music_id === undefined?
            <></> :
            data?.filter(elm => elm.music_id !== id)?.slice(0, 5)?.map(elm => <Render elm={elm} />)
    )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  
  border-radius: 12px;
  background-color: ${COLOR.darkAlt};
`

const ContentWrapper = styled.div`
  color: ${COLOR.text};
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 12px;

  padding: 3px;

  :hover{
      background-color: #111550;
  }
`
