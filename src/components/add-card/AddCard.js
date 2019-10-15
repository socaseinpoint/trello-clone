import React, { useState } from 'react';
import { useStateValue } from '../../state';
import PropTypes from 'prop-types';
import { addCard } from '../../actions/cards';
import styles from './addcart.module.css';

const AddCard = ({ id }) => {
  const [value, setValue] = useState('');
  const [state, dispatch] = useStateValue();

  function handleChange(e) {
    setValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (value === '') {
      return false;
    }

    dispatch(addCard({
      title: value,
      target: id,
    }));

    setValue('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={value} onChange={handleChange} className={styles.input} />
      <input type="submit" value="Add Card" />
    </form>
  );
};

AddCard.propTypes = {
  id: PropTypes.number.isRequired,
};

export default AddCard;
