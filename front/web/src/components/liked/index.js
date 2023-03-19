import React from "react";
import { LikeRecommand } from "./likeRecommand";
import * as cleanUp from "../../utils/authClean";
import { List } from "./list";

export const Like = React.memo(() => {

    const [data, setData] = React.useState([]);

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
    }, [])

    return (
        data[0]?.music_id === undefined ? <></> :
      <>
        <div style={{display: 'flex', flexDirection:'row',}}>
          <LikeRecommand data={data[0]} />
          <List data={data} />
        </div>
      </>
    );
})