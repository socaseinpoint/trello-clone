import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Card from '../card';
import { getCardsByColumn } from '../../selectors';

const CardList = ({ columnId }) => {
  const cards = useSelector((state) => getCardsByColumn(state, columnId));

  return (
    cards.map(
      (item) => (
        <Card
          title={item.title}
          id={item.id}
          key={item.id}
          body={item.body}
          column={item.column}
          author={item.author}
          cardId={item.id}
        />
      ),
    )
  );
};

CardList.propTypes = {
  columnId: PropTypes.string.isRequired,
};

export default CardList;
