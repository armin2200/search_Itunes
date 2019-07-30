import React, { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';

const scaleIn1 = keyframes`

from {
    transform: scale(0.8);
  }
  to {
    transform: scale(1.5);
  }
`;
const scaleIn2 = keyframes`

from {
    transform: scale(0.5);
  }
  to {
    transform: scale(1.1);
  }
`;
const scaleIn3 = keyframes`

from {
    transform: scale(1.3);
  }
  to {
    transform: scale(0.6);
  }
`;

const animation1 = css`
  ${({ anime }) => (anime ? scaleIn1 : undefined)}
`;
const animation2 = css`
  ${({ anime }) => (anime ? scaleIn2 : undefined)}
`;
const animation3 = css`
  ${({ anime }) => (anime ? scaleIn3 : undefined)}
`;

const Container = styled.div`
  position: relative;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 100px 1fr;
  align-items: center;
  min-height: 100px;
  background-color: #f1f1f1;
  color: #222;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.15);
  .song__details {
    padding: 1rem 0;

    padding-right: 7px;
    display: flex;
    flex-direction: column;
  }
  .song__artist,
  .song__name,
  .song__genre {
    margin-top: 1rem;
    height: 7px;
    border-radius: 5px;
    background-color: steelblue;
    transform-origin: left;
  }

  .song__artist {
    margin: 0;
    width: 80px;
    animation: ${animation1} 0.6s infinite alternate;
  }
  .song__name {
    width: 100px;
    animation: ${animation2} 0.7s infinite alternate;
  }
  .song__genre {
    width: 70px;
    animation: ${animation3} 0.5s infinite alternate;
  }

  .song__cover {
    width: 100%;
    height: 100%;
    background-color: lightcoral;
  }

  .song__more {
    position: absolute;
    bottom: 5px;
    right: 10px;
    button {
      border: 0;
      border-radius: 50px;
      box-sizing: border-box;
      margin: 0;
      padding: 10px;
      background-color: lightcoral;
      color: #fff;
      transform-origin: center;

      animation: ${animation1} 0.5s infinite alternate;
      &:focus {
        outline: none;
      }
    }
  }

  @media (max-width: 300px) {
    grid-template-columns: 1fr;
    align-items: initial;
  }
`;

const BlurCardBtn = ({ loaded }) => {
  const [loadingCard, setLoadingCard] = useState(false);

  const loadingHandler = () => {
    setLoadingCard(true);
    loaded();
  };

  return (
    <Container anime={loadingCard}>
      <div className='song__cover' />
      <div className='song__details'>
        <div className='song__artist' />
        <div className='song__name ' />
        <div className='song__genre' />
        <div className='song__more'>
          <button onClick={loadingHandler} disabled={loadingCard}>
            {!loadingCard ? 'More' : ''}
          </button>
        </div>
      </div>
    </Container>
  );
};

export default BlurCardBtn;
