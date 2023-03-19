import React, { useEffect } from "react";
import styled from "styled-components";
import { COLOR } from "../../../utils";


export const Card = React.memo(({ name, id }) => {
  const [imgSrc, setSrc] = React.useState("");
  const [isSelected, setIsSelected] = React.useState(false);

  useEffect(()=>{
    const checkSelected = (evt) => {
      console.log("I get the event");
      if (evt.detail.key === "artist" && evt.detail.newId === id)
        setIsSelected(true);
      else setIsSelected(false);
    }
    window.addEventListener("artistChange", checkSelected);
  },[])

  useEffect(() => {
    // setIsLoading(true)
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
        // setIsLoading(false);
      })
      .catch((err) => console.log(err.message));
  }, [name]);

  const handleClickArtist = () => {
    window.dispatchEvent(new CustomEvent("artistChange", {
      detail: {
        key: "artist",
        newValue: name,
        newId: id
      }
    }));
  }

  const len = name.split("(")[0].length;
  // console.log(len);
  return (
    <Wrapper className={(isSelected)?"select":""}>
      <ContentWrapper onClick={handleClickArtist}>
        <div style={{ display: "flex", flexDirection: "column", height: '150px', alignItems: "center", justifyContent: "space-between", }}>
          <Image src={imgSrc} alt={name} />
          <Text className="text">{len <= 20 ? name.split("(")[0] : name.split("(")[0].slice(0, 17).replace(/.$/, '...')}</Text>
        </div>
      </ContentWrapper>
    </Wrapper>
  );
})

const Wrapper = styled.div`
  color: rgba(255, 255, 255, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 200px;
  height: 200px;
  border-radius: 20px;

  &.select{
    background-color: ${COLOR.menu};
  }

  background-color: ${COLOR.text};
  transition: 0.3s ease-in-out;
  :hover {
    cursor: pointer;
    transform: translateY(-5px);
    background-color: #FFED3;
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