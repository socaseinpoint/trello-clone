import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import StoreContext from '../contexts/StoreContext';
import Card from '../components/Card';

const CardById = ({ id }) => {
  const { store } = useContext(StoreContext);
  const cardById = store.cards.find(({ localId }) => localId === id);

  return <Card body={cardById.body} comments={cardById.comments} />;
};

CardById.propTypes = {
  id: PropTypes.number.isRequired,
};

export default CardById;
