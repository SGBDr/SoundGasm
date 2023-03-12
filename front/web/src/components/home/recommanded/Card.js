import React from "react";
import styled from "styled-components";
import { COLOR } from "../../../utils";

export function Card({ item }) {
  const len = item.name.split("(")[0].length;
  console.log(len)
  return (
    <Wrapper>
      <ContentWrapper>
        <div className="play" style={{ position: "relative", display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50px'}}>
            <img src='/images/icons/play.svg' alt='play' />
        </div>
        <div style={{ display: "flex", flexDirection: "column", height: '150px', alignItems: "center", justifyContent: "space-between",}}>
          <Image src={item.rep_image} alt={item.name} />
          <Text class="text">{len <=20? item.name.split("(")[0] : item.name.split("(")[0].slice(0, 17).replace(/.$/, '...')}</Text>
        </div>
      </ContentWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  color: rgba(255, 255, 255, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 200px;
  height: 200px;
  border-radius: 20px;

  background-color: ${COLOR.text};
  transition: 0.3s ease-in-out;
  :hover {
    transform: translateY(-5px);
    background-color: #FFE2D3;
  }
`;
const ContentWrapper = styled.div`
  color: black;
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  width: 180px;
  height: 180px;
  border-radius: 20px;

  div.play{
    width: 32px; 
    height: 32px;
    background-color: rgba(124, 141, 181, .75);

    transition: 0.3s ease-out;
    &:hover{
      width: 36px;
      height: 36px;
      background-color: ${COLOR.secondary};
      cursor: pointer;
    }
  }  
  
`;

const Text = styled.p`
  text-align: center;
  margin-bottom: 0px;
  font-weight: 700;
  
`;

const Image = styled.img`
  width: 125px;
  height: 125px;

  resize-mode: contain;
`;
