import React from 'react';
import styled from 'styled-components';
import { COLOR } from '../../utils';
// import { Modal } from 'bootstrap';
import { RenderItem } from './RenderItem';

export function Searchbar(){
    const [term, setTerm] = React.useState("");
    const [data, setData] = React.useState([]);

    const handleSubmit = (text) =>{
        setTerm(text);
    }

    React.useEffect((e)=> {

        fetch( `https://soundgasm.herokuapp.com/?controllers=music&method=GET&by=TERM&term=${term}`,
        {
          method: "GET",
          headers: {
            Token: "TOKEN_01036ee5c48a425148cf6a127cdfe4d3a416d8cb",
          }
        }  )
            .then(res=> res.json())
            .then(result=> {setData(term===""? []:result?.response?.musics?.slice(0,5))})
            .catch(err => console.log(err))
    },[term])

    return(
        <>
            <Wrapper>
              <div style={{position: "relative", display: "flex", width: "100%", margin: "0", padding: "0"}}>
                <SearchBarContainer>
                    <SearchIcon src='/images/icons/search.svg' alt='...'/>
                    <SearchInput
                        type='text'
                        placeholder='Research'
                        onChange={(e) => handleSubmit(e.target.value)}/>
                </SearchBarContainer>
                {term === ""?
                  <></>:
                  <RenderItem data={data} />
                  
                }
              </div>
                <Logo src='/images/soundgasm.png' />
            </Wrapper>
        </>
    )
}

const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius: 8px;
  background-color: ${COLOR.darkAlt};
  padding: 5px 10px;
  height: 25px;
  width: 100%;
`;

const SearchInput = styled.input`
  border: none;
  outline: none;
  background-color: transparent;
  color: #fff;
  flex: 1;
  &::placeholder {
    color: #c0c0c0;
  }
`;

const SearchIcon = styled.img`
  color: #fff;
  margin-right: 10px;
  &:hover{
    cursor: pointer;
  }
`;

const Wrapper = styled.div`
    position: absolute;
    height: 60px;
    width: 90%;
    top: 0;
    gap: 30px;
    left: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    &:focus {

        box-shadow: none;
        border:none;
    }

`

const Logo = styled.img`
    width: 200px;
    height: auto;
    margin-top: 10px;
    transition: 0.3s ease-in-out;
    :hover{
      cursor: pointer;
      transform: scale(1.1);
    }
`;

