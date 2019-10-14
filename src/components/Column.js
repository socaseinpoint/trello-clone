import React from 'react';
import CardById from '../containers/CardById';
import AddCardById from '../containers/AddCardById';

const Column = ({ title, cards, id, addCard }) => {
  return (
    <div>
      <b>{ title }</b>
      { cards.map((item) => <CardById id={item.id} key={item.id} />) }
      <AddCardById id={id} addCard={addCard} />
    </div>
  );
};

Column.defaultProps = {
  title: 'No title',
  cards: [],
};

export default Column;
