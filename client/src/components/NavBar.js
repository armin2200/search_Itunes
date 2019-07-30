import React from 'react';
import styled from 'styled-components';
import SearchBox from './SearchBox';
import { useITunes } from '../context/ITunesContext';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  position: fixed;
  z-index: 100;
  padding: 10px;
  top: 0;
  width: 100%;
  svg {
    display: block;
    padding-top: 2px;
  }
`;
const Count = styled.div`
  color: #ffffffd9;
  font-family: 'Dosis';
  position: absolute;
  top: 35px;
  right: 44px;
  text-align: center;
  font-size: 13px;
  font-weight: bold;
`;

const NavBar = props => {
  const ITunesContext = useITunes();
  return (
    <Container>
      <SearchBox />

      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        width='60'
        // height='60'
        className='icon'
        tabIndex='0'
      >
        <g fill='none' fillRule='evenodd'>
          <path
            stroke='#ff333386'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='1.5'
            d='M9 18.161s8.02-3.463 8.02-10.05c-.075-2.224-1.848-3.986-4.01-3.986-2.161 0-3.934 1.762-4.01 3.986-.076-2.224-1.849-3.986-4.01-3.986-2.162 0-3.935 1.762-4.01 3.986C.98 14.698 9 18.16 9 18.16z'
          />
          <g fill='#f33' fillRule='nonzero' transform='translate(1.667)'>
            <circle cx='12.833' cy='.917' r='1' fillOpacity='.773' />
            <circle cx='.688' cy='2.521' r='1' fillOpacity='.773' />
            <circle cx='15.354' cy='4.354' r='1' opacity='.446' />
          </g>
          <path
            fill='#f33'
            fillOpacity='.169'
            d='M9.458 16.5s5.959-2.488 5.959-7.22a2.975 2.975 0 0 0-2.98-2.863A2.975 2.975 0 0 0 9.459 9.28 2.975 2.975 0 0 0 6.48 6.417 2.975 2.975 0 0 0 3.5 9.28c0 4.732 5.958 7.22 5.958 7.22z'
          />
        </g>
      </svg>
      <Count>{ITunesContext.favoritesCount}</Count>
    </Container>
  );
};

export default NavBar;
