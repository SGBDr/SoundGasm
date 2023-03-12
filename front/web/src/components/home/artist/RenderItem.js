import React from "react";
import styled from "styled-components";
import { COLOR } from "../../../utils";

export function RenderItem({ name }) {
  const [imgSrc, setSrc] = React.useState("");
  const [mainImgWidth, setMainImgWidth] = React.useState(100);
  const [mainImgHeight, setMainImgHeight] = React.useState(100);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    fetch(
      `https://soundgasm.herokuapp.com/?controllers=music&method=GET&by=TERM&term=${name}`,
      {
        method: "GET",
        headers: {
          Token: "TOKEN_5d8eb3591e61a4ff112aa5b9c3a5d80f51b50bb6",
        },
      }
    )
      .then((res) => res.json())
      .then((resp) => {
        console.log(name);
        console.log(resp.response.musics[0]?.rep_image);
        setSrc(resp.response.musics[0]?.rep_image);
      })
      .catch((err) => console.log("ok"));
  }, []);

  return (
    <Wrapper>
      <ContentWrapper>
        <Detail> <Text style={{ position: 'absolute', left: 55, top: 10}}>{name}</Text> </Detail>
        <Image
          atl={name}
          src={imgSrc}
          layout="responsive"
          id="heroImg"
          priority
        />
      </ContentWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  margin-top: 20px;
  width: 400px;
  transition: 0.3s ease-in-out;
  :hover {
    transform: translateY(-10px);
  }
`;

const ContentWrapper = styled.div`

  display: flex;
  flex-direction: row;

  align-items: center;
`;

const Image = styled.img`

    position: absolute;
    width: 75px;
    height: 75px;

    border-radius: 20px;
`
const Detail = styled.div`
    position:relative;
    left: 10%;

    width: 90%;
    height: 85px;
    background-color: ${COLOR.text};
    
    border-radius: 20px;

`
const Text = styled.p`
    color: black;
    font-weight: 800;
`
