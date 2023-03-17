import React from 'react';

export function List({artist, id}){

    const [data, setData] = React.useState([]);

    React.useEffect(()=>{
        fetch(
            `https://soundgasm.herokuapp.com/?controllers=music&method=GET&by=TERM&term=${artist}`,
            {
              method: "GET",
              headers: {
                Token: localStorage.getItem("authToken")
              }
            }
          )
            .then(res => res.json())
            .then(rep => {console.log("List"); setData(rep.response.musics.filter(elm => elm.artist === artist))
            })
            .catch(err => console.log(err) );
    }, [])
    
    console.log("ok", data);
    return(
        data[0]?.music_id === undefined?
            <></> :
            data?.filter(elm => elm.music_id !== id)?.map(elm => <p>{elm.name}</p>)
    )
}