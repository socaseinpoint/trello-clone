import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { removeCard } from '../../../actions/cards';

const CardRemove = ({ id }) => {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(removeCard(id));
  }

  return (
    <Button onClick={handleClick} variant="danger" className="ml-2">Remove card</Button>
  );
};

CardRemove.propTypes = {
  id: PropTypes.string.isRequired,
};

export default CardRemove;
