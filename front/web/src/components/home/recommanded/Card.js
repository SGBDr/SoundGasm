import React from "react";
import styled from "styled-components";
import { COLOR } from "../../../utils";

export function Card({ item }) {
  const len = item.name.split("(")[0].length;
  console.log(len)
  return (
    <Wrapper>
      <ContentWrapper>
        <div className="play" style={{ position: "relative", display: 'flex', alignItems: 'center', justifyContent: 'center', width: '32px', height: '32px', borderRadius: '50px', backgroundColor: 'rgba(124, 141, 181, .75)'}}>
            <img src='/images/icons/play.svg' alt='play'  />
        </div>
        <div style={{ display: "flex", flexDirection: "column", height: '150px', alignItems: "center", justifyContent: "space-between",}}>
          <Image src={item.rep_image} alt={item.name} />
          <Text>{len <=20? item.name.split("(")[0] : item.name.split("(")[0].slice(0, 17).replace(/.$/, '...')}</Text>
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
  
`;

const Text = styled.p`
  text-align: center;
  margin-bottom: 0px;
  
`;

const Image = styled.img`
  width: 125px;
  height: 125px;

  resize-mode: contain;
`;
