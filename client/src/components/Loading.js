import React from 'react';
import styled, { keyframes } from 'styled-components';

const equalize = keyframes`
 
  0% {
    height: 48px;
  }
  4% {
    height: 42px;
  }
  8% {
    height: 40px;
  }
  12% {
    height: 30px;
  }
  16% {
    height: 20px;
  }
  20% {
    height: 30px;
  }
  24% {
    height: 40px;
  }
  28% {
    height: 10px;
  }
  32% {
    height: 40px;
  }
  36% {
    height: 48px;
  }
  40% {
    height: 20px;
  }
  44% {
    height: 40px;
  }
  48% {
    height: 48px;
  }
  52% {
    height: 30px;
  }
  56% {
    height: 10px;
  }
  60% {
    height: 30px;
  }
  64% {
    height: 48px;
  }
  68% {
    height: 30px;
  }
  72% {
    height: 48px;
  }
  76% {
    height: 20px;
  }
  80% {
    height: 48px;
  }
  84% {
    height: 38px;
  }
  88% {
    height: 48px;
  }
  92% {
    height: 20px;
  }
  96% {
    height: 48px;
  }
  100% {
    height: 48px;
  }


`;

const Div = styled.div`
  height: 100vh;
  margin: 0;
  background-color: #343d46;
  font-family: 'ubuntu', Arial, sans-serif;
  overflow-x: hidden;
  display: grid;
  place-items: center;

  .music {
    position: relative;
    width: 180px;
    height: 160px;
    border: 8px solid #bebebe;
    border-bottom: 0px;
    border-top-left-radius: 110px;
    border-top-right-radius: 110px;
  }
  .music:before,
  .music:after {
    content: '';
    position: absolute;
    bottom: -20px;
    width: 40px;
    height: 82px;
    background-color: #bebebe;
    border-radius: 15px;
  }
  .music:before {
    right: -25px;
  }
  .music:after {
    left: -25px;
  }

  .line {
    position: absolute;
    width: 6px;
    min-height: 30px;
    transition: 0.5s;
    animation: ${equalize} 4s 0s infinite;
    animation-timing-function: linear;
    vertical-align: middle;
    bottom: 0 !important;
    box-shadow: inset 0px 0px 16px -2px rgba(0, 0, 0, 0.15);
  }

  .line1 {
    left: 30%;
    bottom: 0px;
    animation-delay: -1.9s;
    background-color: #ff5e50;
  }

  .line2 {
    left: 40%;
    height: 60px;
    bottom: -15px;
    animation-delay: -2.9s;
    background-color: #a64de6;
  }

  .line3 {
    left: 50%;
    height: 30px;
    bottom: -1.5px;
    animation-delay: -3.9s;
    background-color: #5968dc;
  }

  .line4 {
    left: 60%;
    height: 65px;
    bottom: -16px;
    animation-delay: -4.9s;
    background-color: #27c8f8;
  }

  .line5 {
    left: 70%;
    height: 60px;
    bottom: -12px;
    animation-delay: -5.9s;
    background-color: #cc60b5;
  }
`;
const Loading = () => {
  return (
    <Div>
      <div className='container'>
        <div className='music'>
          <span className='line line1' />
          <span className='line line2' />
          <span className='line line3' />
          <span className='line line4' />
          <span className='line line5' />
        </div>
      </div>
    </Div>
  );
};

export default Loading;
