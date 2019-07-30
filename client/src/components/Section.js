import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Card from './Card';
import BlurCardBtn from './BlurCardBtn';

const Container = styled.div`
  padding: 15px 30px;
  display: grid;
  /* height: 400px;
  overflow-y: scroll; */
  margin-top: 50px;
`;

const Box = styled.div`
  display: grid;
  grid-gap: 30px;
  grid-auto-rows: 1fr;
  /* justify-content: center; */
  grid-template-columns: repeat(auto-fit, 300px);

  /* grid-template-columns: 300px 300px; */
  @media (max-width: 600px) {
    grid-row-gap: 30px;
  }
`;
const H3 = styled.h3`
  font-family: Dosis;
  font-size: 36px;
  font-weight: bold;
  line-height: 46px;
  margin-bottom: 30px;
  color: #ffffff;
`;
const Hr = styled.hr`
  border: 0;
  height: 1px;
  margin-top: 30px;
  background-image: linear-gradient(
    to right,
    rgba(255, 255, 255, 0.25),
    rgba(255, 255, 255, 1),
    rgba(255, 255, 255, 0.25)
  );
`;

const Section = ({ items, title }) => {
  const [listItems, setListItems] = useState([]);
  // const [isFetching, setIsFetching] = useInfiniteScroll(fetchMoreListItems);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const cardPerPage = 10;

  useEffect(() => {
    const indexOfLastCard = currentPage * cardPerPage;
    const indexOfFirstCard = indexOfLastCard - cardPerPage;
    const cardsPage = items.slice(indexOfFirstCard, indexOfLastCard);
    setListItems(cardsPage);
    setCurrentPage(currentPage + 1);
  }, []);

  useEffect(() => {
    if (loading) return;
    setLoading(true);
  }, [loading]);

  function fetchMoreListItems() {
    const indexOfLastCard = currentPage * cardPerPage;
    const indexOfFirstCard = indexOfLastCard - cardPerPage;
    const currentCards = items.slice(indexOfFirstCard, indexOfLastCard);
    setCurrentPage(currentPage + 1);
    setTimeout(() => {
      setListItems(prevState => [...prevState, ...currentCards]);
      setLoading(false);
    }, 1500);
  }

  const renderCards = listItems.map(item => {
    return <Card key={item.id} item={item} />;
  });

  return (
    <Container>
      <H3
        style={{ color: '#fff', display: 'block', textTransform: 'capitalize' }}
      >
        {title}
      </H3>
      <Box>
        {renderCards}
        {listItems.length < items.length && loading && (
          <BlurCardBtn loaded={fetchMoreListItems} />
        )}
      </Box>
      <Hr />
    </Container>
  );
};

export default Section;
