import React, { useState } from 'react';
import styled from 'styled-components';
import { useITunes } from '../context/ITunesContext.js';
const Box = styled.div`
  /* height: 50px; */
  /* position: fixed;
  z-index: 100; */
`;

const Container = styled.div`
  width: 300px;
  vertical-align: middle;
  white-space: nowrap;
  position: relative;
  input {
    width: 0px;
    height: 50px;
    border: 1px solid rgba(255, 255, 255, 0.35);
    border-radius: 5px;

    font-size: 10pt;
    float: left;
    color: #fff;
    opacity: 0.5;

    /* color: #63717f; */
    background: #f5f5f5;
    padding-left: 45px;
    /* border-radius: 5px; */
    transition: all 0.5s;
    &::placeholder {
      color: #65737e;
    }
  }
  .icon {
    z-index: 1;
    position: absolute;
    cursor: pointer;
    top: 50%;
    left: 0;
    margin-left: 16px;
    margin-top: 15px;
    color: #ff333396;
    /* text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5); */
  }

  input:hover,
  input:focus,
  input:active {
    width: 300px;
    outline: none;
    background: #2b303b;
    opacity: 1;
  }

  &:hover input {
    width: 300px;
    outline: none;
    background: #2b303b;
  }
`;

const SearchBox = () => {
  const [searchValue, setSearchValue] = useState('');
  const ITunesContext = useITunes();

  const SearchInputHandler = e => {
    setSearchValue(e.target.value);
  };
  const SearchClickHandler = () => {
    ITunesContext.setSearch(searchValue);
  };

  const KeyDownHandler = e => {
    if (e.keyCode === 13) {
      ITunesContext.setSearch(searchValue);
    }
  };

  return (
    <Box>
      <Container>
        <span className='icon '>
          <i className='fas fa-search' onClick={SearchClickHandler} />
        </span>
        <input
          type='text'
          placeholder='Search...'
          onChange={SearchInputHandler}
          onKeyDown={KeyDownHandler}
        />
      </Container>
    </Box>
  );
};

export default SearchBox;
