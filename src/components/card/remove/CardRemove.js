import React from 'react';
import PropTypes from 'prop-types';
import Badge from 'react-bootstrap/Badge';
import { useStateValue } from '../../../state';
import { removeCard } from '../../../actions/cards';

const CardRemove = ({ id }) => {
  const dispatch = useStateValue()[1];

  function handleClick() {
    dispatch(removeCard(id));
  }

  return (
    <Badge onClick={handleClick} variant="danger" className="ml-2">Remove</Badge>
  );
};

CardRemove.propTypes = {
  id: PropTypes.string.isRequired,
};

export default CardRemove;
