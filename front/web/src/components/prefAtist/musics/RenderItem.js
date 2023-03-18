import React from "react";
import styled from "styled-components";
import { COLOR } from "../../../utils";

export function RenderItem({ name, item }) {
  // const [imgSrc, setSrc] = React.useState("");
  //const [mainImgWidth, setMainImgWidth] = React.useState(100);
  //const [mainImgHeight, setMainImgHeight] = React.useState(100);
  // const [isLoading, setIsLoading] = React.useState(true);

  // React.useEffect(() => {
    
  // }, [name]);

  return (
    <Wrapper>
      <ContentWrapper>
        <Detail> <Text style={{ position: 'absolute', left: 55, top: 10}}>{name}</Text> </Detail>
          <Image
                atl={name}
                src={item.rep_image}
                layout="responsive"
                id="heroImg"
                priority
          />
      </ContentWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  display: grid;
  margin-top: 20px;
  width: 400px;
  transition: 0.3s ease-in-out;
  :hover {
    transform: translateY(-5px);
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
    position: relative;
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
