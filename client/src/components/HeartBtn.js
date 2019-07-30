import React from 'react';
import styled, { keyframes } from 'styled-components';

const loved = keyframes`
    0% {
      transform: scale(1);
    }
    25% {
      transform: scale(0.6, 0.8);
    }
    35% {
      transform: scale(0.8, 0.6);
    }
    70% {
      transform: scale(1.4);
    }
    100% {
      transform: scale(1);
    }
    /* to {
    opacity: 0;
    transform: scale(50);
  } */
`;

// const Switch = css`
//   ${props => (props.toggle ? blowUp : '')};
// `;

// const Icon = styled.i`
//   color: red;
//   .fa-heart {
//   }
//   animation: ${Switch} '1s ease-out';
// `;

const Content = styled.div`
  .heart {
    display: block;
    /* width: 2em;
    height: 2em; */
    font-size: 15px;
    cursor: pointer;

    .heart-inner {
      &,
      &::before,
      &::after {
        background-color: #ccc;
      }
    }

    &.loved .heart-inner {
      &,
      &::before,
      &::after {
        background-color: #f33;
      }
    }

    &.loved {
      animation: ${loved} 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      /* animation: ${loved} 1s linear; */

    }
  }

  .heart-inner {
    display: block;
    width: 1em;
    height: 1em;
    transform: rotate(45deg);

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 1em;
      height: 1em;
      border-radius: 1em;
    }

    &::before {
      left: 0;
      top: -50%;
    }
    &::after {
      left: -50%;
      top: 0;
    }
  }
`;

const heartBtn = ({ toggle }) => {
  return (
    <Content>
      <div className={`${toggle ? 'loved' : ' '} heart`}>
        <div className={`heart-inner`} />
      </div>
    </Content>
  );
};

export default heartBtn;
