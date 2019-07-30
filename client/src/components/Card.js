import React, { useState } from 'react';
import { useITunes } from '../context/ITunesContext';
import styled from 'styled-components';
import HeartBtn from './HeartBtn';

const Container = styled.div`
  position: relative;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: auto 1fr;
  align-items: center;
  /* padding: 1rem; */
  min-height: 100px;
  background-color: #f1f1f1;
  color: #222;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.15);
  .song__details {
    padding-right: 7px;
    display: flex;
    flex-direction: column;
    font-family: 'Dosis', sans-serif;
    font-weight: 500;
  }
  .song__artist,
  .song__name,
  .song__genre {
    padding-top: 0.25rem;
    max-height: 20px;
    overflow: hidden;
  }

  /* .song__info {
    padding-top: 0.75rem;
  } */

  .song__info a,
  .song__info a:link,
  .song__info a:active,
  .song__info a:visited {
    color: #666;
    text-decoration: none;
    font-size: 14px;
  }

  .song__info a:hover {
    text-decoration: underline;
  }

  .song__cover {
    width: 100%;
  }

  .song__favorite {
    position: absolute;
    bottom: 5px;
    right: 10px;
    /* transform: translate(-50%, -50%); */
  }

  /* @media (max-width: 300px) {
    grid-template-columns: 1fr;
    align-items: initial;
  } */
`;

const Card = ({ item }) => {
  const ITunesContext = useITunes();
  const [heartToggle, setHeartToggle] = useState(
    !!JSON.parse(localStorage.getItem('favorites'))[item.id]
  );

  const toggleHeartHandler = () => {
    const set = JSON.parse(localStorage.getItem('favorites'));

    !heartToggle ? (set[item.id] = true) : delete set[item.id];

    localStorage.setItem('favorites', JSON.stringify(set));
    ITunesContext.setFavoritesCount(Object.keys(set).length);

    setHeartToggle(!heartToggle);
  };
  return (
    <Container>
      <img className='song__cover' src={item.artwork} alt={item.name} />
      <div className='song__details'>
        <div className='song__artist'>{item.artist}</div>
        <div className='song__name song__info'>
          <a href={item.url}>{item.name}</a>
        </div>
        <div className='song__genre'>{item.genre}</div>
        <div className='song__favorite' onClick={toggleHeartHandler}>
          <HeartBtn toggle={heartToggle} />
        </div>
      </div>
    </Container>
  );
};

export default Card;
