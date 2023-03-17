import React from 'react';

export function List({artist, id}){

    const [data, setData] = React.useState([]);

    React.useEffect(()=>{
        fetch(
            `https://soundgasm.herokuapp.com/?controllers=music&method=GET&by=TERM&term=${artist}`,
            {
              method: "GET",
              headers: {
                Token: "TOKEN_5e9234e1d7f9778089233419799ca7cb27136cb7"
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