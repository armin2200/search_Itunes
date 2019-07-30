import React, { useState, useEffect } from 'react';

import Section from '../components/Section';
import { getResults } from '../services/api';
import Loading from '../components/Loading';
import NavBar from '../components/NavBar';
import { ITunesContext } from '../context/ITunesContext.js';

const ITunes = () => {
  // const [songs, setSongs] = useState();
  // const [featureMovie, SetFeatureMovie] = useState();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState();
  const [favoritesCount, setFavoritesCount] = useState(
    Object.keys(JSON.parse(localStorage.getItem('favorites'))).length
  );

  useEffect(() => {
    if (!search) return;
    fetchData(search);
  }, [search]);

  const fetchData = async val => {
    setLoading(true);
    try {
      const body = { name: val };
      const { data } = await getResults(body);
      setData(data);
      // setSongs(data['song']);
      setLoading(false);
      // SetFeatureMovie(data['feature-movie']);
    } catch (error) {
      console.log(error.message);
    }
  };

  const SearchBoxHandler = val => {
    if (val === search) return;
    // if (!!val) fetchData(val);
    if (!!val) setSearch(val);
  };
  const sections = Object.keys(data).map(el => {
    const title = el.split('-').join(' ');

    return <Section title={title} key={el} items={data[el]} />;
  });

  return (
    <>
      <ITunesContext.Provider
        value={{
          search,
          setSearch: SearchBoxHandler,
          favoritesCount,
          setFavoritesCount
        }}
      >
        <NavBar />
        {/* <SearchBox clicked={SearchBoxHandler} /> */}
        <div style={{ backgroundColor: '#343d46' }}>
          {loading ? (
            <div>
              <Loading />
            </div>
          ) : (
            sections
          )}
        </div>
      </ITunesContext.Provider>
    </>
  );
};

export default ITunes;
