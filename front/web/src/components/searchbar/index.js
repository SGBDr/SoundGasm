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

    // React.useEffect(()=> {
    //     fetch("https://soundgams.com", )
    //         .then(res=> res.json)
    //         .then(result=> console.log(result))
    //         .catch(err => console.log(err))
    //     console.log(term);
    // },[term])

    return(
        <>
        <Wrapper
            type='text'
            placeholder='Research'
            onChange={(e) => handleSubmit(e.target.value)}/>

        </>
    )
}

const Wrapper = styled.input`
    background: #d1d5db;
    height: 30px;
    
    :focus {

        box-shadow: none;
        border:none;
    }

`

const WrapperInput = styled.div`
body{

    background: #d1d5db;
}

.height{

    height: 100vh;
}


`

const WrapperInputContent= styled.div`
.form{

    position: relative;
}

.form .fa-search{

    position: absolute;
    top:20px;
    left: 20px;
    color: #9ca3af;

}

.form span{

    position: absolute;
    right: 17px;
    top: 13px;
    padding: 2px;
    border-left: 1px solid #d1d5db;

}

.left-pan{
    padding-left: 7px;
}

.left-pan i{
   
   padding-left: 10px;
}

.form-input{

    height: 55px;
    text-indent: 33px;
    border-radius: 10px;
}

.form-input:focus{

    box-shadow: none;
    border:none;
}
`