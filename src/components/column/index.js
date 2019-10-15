import React from 'react';
import AddCard from '../add-card';

const Column = ({ title, cards, id }) => {
  return (
    <div>
      <b>{ title }</b>
      <div>
        {cards}
      </div>
      <AddCard id={id} />
    </div>
  );
};

Column.defaultProps = {
  title: 'No title',
  cards: [],
};

export default Column;
