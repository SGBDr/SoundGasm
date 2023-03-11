import React from 'react';
import styled from 'styled-components';
import { COLOR } from '../../../utils';

export function Searchbar(){
    const [term, setTerm] = React.useState("");

    const handleSubmit = (text) =>{
        console.log(term);
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
            <Wrapper>
                <SearchBarContainer>
                    <SearchIcon src='/images/icons/search.svg' alt='...'/>
                    <SearchInput
                        type='text'
                        placeholder='Research'
                        onChange={(e) => handleSubmit(e.target.value)}/>
                </SearchBarContainer>
                <Logo src='images/soundgasm.png' />
            </Wrapper>
        </>
    )
}

const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius: 5px;
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
`;
