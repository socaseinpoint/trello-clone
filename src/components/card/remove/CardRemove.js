import React from 'react';
import { removeCard } from '../../../actions/cards';
import { useStateValue } from '../../../state';
import removeSvg from './remove.svg';
import styles from './remove.module.css';

const CardRemove = ({ id }) => {  
  const [state, dispatch] = useStateValue();

  function handleClick() {
    dispatch(removeCard(id));
  }

  return (
    <b onClick={handleClick} className={styles.remove}>
      <img src={removeSvg} alt='remove' className={styles.icon} />
    </b>
  );
};

export default CardRemove;
