import React from 'react';
import styled from 'styled-components';
import { COLOR } from '../../../utils';
import {Card} from './Card'

const Data=[
    {nom: 'ok'},
    {nom: 'ok'},
    {nom: 'ok'},
    {nom: 'ok'},
    {nom: 'ok'},
    {nom: 'ok'},
    {nom: 'ok'},
    {nom: 'ok'},
    {nom: 'ok'},
    {nom: 'ok'},
    {nom: 'ok'},
    {nom: 'ok'},
    {nom: 'ok'},
    {nom: 'ok'},
    {nom: 'ok'},
    {nom: 'ok'},
    {nom: 'ok'},
    {nom: 'ok'},
    {nom: 'ok'},
    {nom: 'ok'},
    {nom: 'ok'},
    {nom: 'ok'},
    {nom: 'ok'},
    {nom: 'ok'},
    {nom: 'ok'},
    {nom: 'ok'},
    {nom: 'ok'},
    {nom: 'ok'},
    {nom: 'ok'},
    {nom: 'ok'},
    {nom: 'ok'},
    {nom: 'ok'},
    {nom: 'ok'},
    {nom: 'ok'},
    {nom: 'ok'},
    {nom: 'ok'},
];

export function Recommande(){

    const [recommandedData, setRecommandedData] = React.useState([]);

    React.useEffect(()=>{
        fetch(
            "https://soundgasm.herokuapp.com/?controllers=music&method=GET&by=TERM&term= ",
            {
              method: "GET",
              headers: {
                Token: localStorage.getItem('authToken')
              }
            }
          )
            .then(res => res.json())
            .then(data => { setRecommandedData(data.response.musics?.slice(0, 20))
                console.log("get music message : " + data.message)
                console.log("local storage token : " + localStorage.getItem("authToken"))
            })
            .catch(err => console.log(err) );
    }, [])


    return(
        <Wrapper>
            <Title>Recommanded</Title>
            <ContentWrapper>
                { recommandedData[0]?.music_id === undefined ? 
                    <></> : 
                    recommandedData?.map((elm, i) => <Card key={i} item={elm} />) }
            </ContentWrapper>
            
        </Wrapper>
    );
}

const Wrapper = styled.div`
    position: absolute;
    top: 96px;
    left: 100px;

    
    display: grid;

    width: 90%;
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