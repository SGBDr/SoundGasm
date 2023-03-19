import React from "react";
import { LikeRecommand } from "./likeRecommand";
import styled from "styled-components";
import { List } from "./list";

export function Like() {

    const [data, setData] = React.useState([]);

    React.useEffect(()=>{
        fetch(
            `https://soundgasm.herokuapp.com/?controllers=music&method=GET&by=LIKE`,
            {
              method: "GET",
              headers: {
                Token: "TOKEN_01036ee5c48a425148cf6a127cdfe4d3a416d8cb",
              }
            }
          )
            .then(res => res.json())
            .then(data => { console.log(data?.response?.musics); setData(data?.response?.musics)
            })
            .catch(err => console.log(err) );
    }, [])

    return (
        data[0]?.music_id === undefined ? <></> :
      <>
        <div style={{display: 'flex', flexDirection:'row',}}>
          <LikeRecommand data={data[data.length-1]} />
          <List data={data} />
        </div>
      </>
    );
}