import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { COLOR } from '../../../utils';
import {Card} from './Card'
import * as cleanUp from '../../../utils/authClean';

export const PrefArtists = React.memo(() => {

    const [artists, setArtists] = useState([]);

    useEffect(()=>{
        fetch(
            `https://soundgasm.herokuapp.com/?controllers=artist&method=GET&all=false`,
            {
              method: "GET",
              headers: {
                Token: localStorage.getItem("authToken")
              }
            }
          )
            .then(res => res.json())
            .then(data => { 
                if(data.response === cleanUp.errMsg) cleanUp.tokenCleanUp();
                setArtists(data.response)
                console.log("local storage token : " + localStorage.getItem("authToken"))
            })
            .catch((err) => console.log(err));
    }, [])


    return(
        <Wrapper>
            <Title>Followed Artists</Title>
            <ContentWrapper>
                {artists===undefined?null:artists?.map((elm, i) => <Card key={i} name={elm.name} id={elm.artist_id} />) }
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

const Title = styled.p`
    margin: 10px 0 0 0;
    height: 40px;
    font-weight: 900;
    font-family: Teko;
    color: white;
    font-size: 28px;
    padding-left: 30px;
`