import React from "react";
import styled from "styled-components";
import {COLOR} from '../../../utils/index'

export function List({data}){

    return(
        <Wrapper  style={{marginTop: '15px', position: "relative", left: "1%"}}>
            {data.map(elm => 
                <ContentWrapper >
                    <div style={{width:'80%'}}><p>{elm.artist} {elm.name}</p></div>
                    <div style={{width:'20%'}}><p>{elm.style}</p></div>
                    
                    
                </ContentWrapper>
            )}
        </Wrapper>
    );
}

const Wrapper = styled.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;
border-radius: 12px;

width: 49%;
height: 540px;

overflow: auto;
::-webkit-scrollbar { width: 0;};

color: white;
background-color: ${COLOR.darkAlt};
`

const ContentWrapper = styled.div`

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 3px;
    background-color: ${COLOR.darkAlt};

:hover{
    background-color: #111550;
}

`