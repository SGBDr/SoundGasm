import React from 'react';
import styled, { keyframes } from 'styled-components';
import { COLOR } from '../utils';

// Define the animation keyframes

function IndexPage() {
  return (
    <Wrapper>
      <Clipart
        src="/images/coming.gif"
        alt="Coming Soon Clipart"
      />
      <MyStyles>Coming soon. Next update !</MyStyles>
      <DateStyles>27th March 2023 😊</DateStyles>
    </Wrapper>
  );
}

export default IndexPage

export const Head = () => <title>Group</title>

const pulse = keyframes`
  0% { transform: scale(1); } 
  0% { transform: scale(1.1); }
  100% { transform: scale(1); };
`;

// Define the styles for the clipart
const Clipart = styled.img`
  display: block;
  margin: 0 auto;
  animation: ${pulse} 2s ease-in-out infinite;
`;

// Define the styles for the "Coming soon!" text
const MyStyles = styled.div`
  text-align: center;
  font-size: 48px;
  font-weight: bold;
  margin-top: 40px;
  font-family: Teko;
  color: ${COLOR.playButtonCard};
`;


// Define the styles for the date text
const DateStyles = styled.div`
  text-align: center;
  font-size: 24px;
  margin-top: 20px;
  font-weight: bold;
  font-family: Teko;
  color: ${COLOR.text}
`;



const Wrapper = styled.div`
  height: auto;
  width: auto;
  position: absolute;
  top: 10%;
  bottom: 10%;
  right: 10%;
  left: 10%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 32px;
  background: ${COLOR.darkAlt};
`;

// const Tab = styled.p`
//   margin: 0px;
//   padding: 2px;
//   font-family: Teko;
//   font-size: 15px;
//   font-weight: 700;
//   color: ${COLOR.text};
// `;
