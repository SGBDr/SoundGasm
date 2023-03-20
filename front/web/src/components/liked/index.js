import React from "react";
import { LikeRecommand } from "./likeRecommand";
import * as cleanUp from "../../utils/authClean";
import { List } from "./list";

export const Like = React.memo(() => {

    const [data, setData] = React.useState([]);
    const [count, setCount] = React.useState([]);
    const [likeButton, setLikeButton] = React.useState([]);
    const handlePlayMusic = (musicInfo) => {
      localStorage.setItem('musicInfo', JSON.stringify(musicInfo));
      window.dispatchEvent(new CustomEvent("storage", {
          detail: {
              key: "musicInfo",
              newValue: JSON.stringify(musicInfo)
          }
      }));
      console.log("Correctly Stored in local Storage");
      // redirect to MusicPlayer component
  }

    

    React.useEffect(()=>{
        fetch(
            `https://soundgasm.herokuapp.com/?controllers=music&method=GET&by=LIKE`,
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
              console.log(data?.response?.musics); 
              setData(data?.response?.musics)
            })
            .catch((err) => console.log(err));
    }, [likeButton])

    React.useEffect(()=>{
      const handleIsLikedChange = (event) => {
        if (event.detail.key === "like")
          console.log(event.detail);
          setLikeButton(!likeButton);
      }
      window.addEventListener("likeChange", handleIsLikedChange)
    },[data])

    return (
        data[0]?.music_id === undefined ? <></> :
      <>
        <div style={{display: 'flex', flexDirection:'row',}}>
          <LikeRecommand data={data[0]} handlePlay={handlePlayMusic} />
          <List data={data} handlePlay={handlePlayMusic} />
        </div>
      </>
    );
})