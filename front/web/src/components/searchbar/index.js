import React from 'react';
import styled from 'styled-components';
// TEST THIS MY NIGGER
// https://bbbootstrap.com/snippets/bootstrap-5-search-bar-microphone-icon-inside-12725910

export function Searchbar(){
    const [term, setTerm] = React.useState("");

    const handleSubmit = (text) =>{
        // console.log(text);
        setTerm(text);
    }

    React.useEffect(()=> {
        fetch("https://soundgams.com", )
            .then(res=> res.json)
            .then(result=> console.log(result))
            .catch(err => console.log(err))
        console.log(term);
    },[term])

    return(
        <Wrapper
            type='text'
            placeholder='Research'
            onChange={(e) => handleSubmit(e.target.value)}/>
    )
}

const Wrapper = styled.input`

`