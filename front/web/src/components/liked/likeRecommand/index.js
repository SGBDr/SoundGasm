import React from "react";
import styled from "styled-components";
import { List } from "./List";

export function LikeRecommand({data}){
    const {name, rep_image, artist} = data
    return(
        <Wrapper style={{marginTop: '15px', width: "50%",}}>
            <ContentWrapper 
            style={{
            position: "relative",
            top: "0px",
            left: "0px",
            width: "100%",
            }}>

                <img style={{width: "200px", height: "200px",}} src={rep_image} alt={name}/>
                <TextWrapper style={{width: '100%'}}>
                    <Text>Artist: {artist}</Text>
                    <Text>Name:  {name}</Text>
                </TextWrapper>

            </ContentWrapper>
            <div style={{border: '1px solid white', marginTop:'30px'}}>
                <List data={data} />
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 12px;
`;
const SecondWrapper = styled.div`
    display: flex;
    flex-direction: row;
    border-radius: 12px;
`;

const ContentWrapper = styled.div`

    display: flex;
    flex-direction: row;
    border-radius: 12px;

`

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    padding: 15px;

    width: 100%;
    border-radius: 0px 12px 12px 0px;
    background-color: white;
`;

const Text = styled.h3`
font-family: Teko;


`