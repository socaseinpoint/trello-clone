import React from 'react';
import Card from '../card';

const CardList = ({ cards }) => {
  return (
    cards.map((item) => <Card title={item.title} id={item.id} key={item.id} />)
  );
};

export default CardList;
