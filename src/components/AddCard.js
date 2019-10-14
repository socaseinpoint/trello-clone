import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { addCard } from '../actions/card';

const AddCard = ({ id, store, setStore }) => {
  const [value, setValue] = useState('');

  function handleChange(e) {
    setValue(id, e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setStore(addCard({ store }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={value} onChange={handleChange} />
      <input type="submit" value="Add Card" />
    </form>
  );
};

AddCard.propTypes = {
  id: PropTypes.number.isRequired,
};

export default AddCard;
