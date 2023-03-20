import React from 'react';
import { css, keyframes } from '@emotion/react';

// Define the animation keyframes
const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

// Define the styles for the clipart
const clipartStyles = css`
  display: block;
  margin: 0 auto;
  animation: ${pulse} 2s ease-in-out infinite;
`;

// Define the styles for the "Coming soon!" text
const textStyles = css`
  text-align: center;
  font-size: 48px;
  font-weight: bold;
  margin-top: 40px;
`;

// Define the styles for the date text
const dateStyles = css`
  text-align: center;
  font-size: 24px;
  margin-top: 20px;
`;

function IndexPage() {
  return (
    <div>
      <img
        src="https://example.com/your-clipart.png"
        alt="Coming Soon Clipart"
        css={clipartStyles}
      />
      <div css={textStyles}>Coming soon!</div>
      <div css={dateStyles}>27th March 2023 :)</div>
    </div>
  );
}

export default IndexPage

export const Head = () => <title>Test</title>

// const ContentWrapper = styled.div`
//   height: auto;
//   width: 300px;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   background: ${COLOR.menu};
// `;

// const Tab = styled.p`
//   margin: 0px;
//   padding: 2px;
//   font-family: Teko;
//   font-size: 15px;
//   font-weight: 700;
//   color: ${COLOR.text};
// `;
