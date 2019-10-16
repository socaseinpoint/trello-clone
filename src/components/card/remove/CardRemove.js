import React from 'react';
import PropTypes from 'prop-types';
import { removeCard } from '../../../actions/cards';
import { useStateValue } from '../../../state';
import removeSvg from './remove.svg';
import styles from './remove.module.css';

const CardRemove = ({ id }) => {
  const dispatch = useStateValue()[1];

  function handleClick() {
    dispatch(removeCard(id));
  }

  return (
    <button type="button" onClick={handleClick} className={styles.remove}>
      <img src={removeSvg} alt="remove" className={styles.icon} />
    </button>
  );
};

CardRemove.propTypes = {
  id: PropTypes.number.isRequired,
};

export default CardRemove;
