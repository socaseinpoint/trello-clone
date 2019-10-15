import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useStateValue } from '../../state';
import PropTypes from 'prop-types';
import { addCard } from '../../actions/cards';
import styles from './addcart.module.css';

const AddCard = ({ target }) => {
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
      target,
    }));

    setValue('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={value} onChange={handleChange} className={styles.input} />
      <Button type="submit">Add Card</Button>
    </form>
  );
};

AddCard.propTypes = {
  target: PropTypes.number.isRequired,
};

export default AddCard;
