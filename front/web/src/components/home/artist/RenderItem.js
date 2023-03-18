import React from "react";
import styled from "styled-components";
import { COLOR } from "../../../utils";

export function RenderItem({ id, name }) {
  const [imgSrc, setSrc] = React.useState("");
  const [isPref, setIsPref] = React.useState(false);
  //const [mainImgHeight, setMainImgHeight] = React.useState(100);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setIsLoading(true)
    const url = `https://soundgasm.herokuapp.com/?controllers=music&method=GET&by=TERM&term=${name}`
    fetch(url,
      {
        method: "GET",
        headers: {
          Token: localStorage.getItem("authToken"),
        },
      }
    )
      .then((res) => res.json())
      .then((resp) => {
        console.log(name);
        console.log(resp.response.musics[0]?.rep_image);
        setSrc(resp.response.musics[0]?.rep_image);
        setIsLoading(false);
      })
      .catch((err) => console.log("ok"));
  }, [name]);

  const handlePrefArtist = () => {
    const url = `https://soundgasm.herokuapp.com/?controllers=artist&method=UPDATE&for=ADD_PREF&artist_id=${id}`
    console.log("is Preference : "+isPref);
    if(!isPref)
      fetch(url,
        {
          method: "GET",
          headers: {
            Token: localStorage.getItem("authToken"),
          },
        }
      )
        .then((res) => res.json())
        .then((resp) => {
          console.log(resp.response);
          setIsPref(true);
        })
        .catch((err) => console.log(err.message));
  }

  return (
    <Wrapper>
        { isLoading ? (<p style={{color: "white", fontSize: "20px"}}>loading...</p>) : 
          (
              <ContentWrapper className="tooltip" data-tooltip={(!isPref)?"Suivre l'artist ?":"Déjà suivi"} onClick={handlePrefArtist}>
              <Detail> <Text style={{ position: 'absolute', left: 55, top: 10}}>{name}</Text> </Detail>
              <Image
                atl={name}
                src={imgSrc}
                layout="responsive"
                id="heroImg"
                priority
              />
              </ContentWrapper>
          )
        }
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

  &.tooltip{ pointer-events: all ;}

  &.tooltip::after {
      content: attr(data-tooltip);
      position: absolute;
      bottom: 80%;
      left: 50%;
      padding: 5px;
      background-color: ${COLOR.playButtonCard};
      color: ${COLOR.darkAlt};
      font-size: 15px;
      font-weight: 700;
      border-radius: 5px;
      opacity: 0;
      transition: opacity 0.3s ease;
    }

  &.tooltip:hover::after {
      opacity: 1;
  }
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
