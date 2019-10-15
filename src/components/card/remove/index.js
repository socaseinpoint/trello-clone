import React from 'react';
import { removeCard } from '../../../actions/cards';
import { useStateValue } from '../../../state';

const CardRemove = ({ id }) => {  
  const [state, dispatch] = useStateValue();

  function handleClick() {
    dispatch(removeCard(id));
  }

  return (
    <b onClick={handleClick}>X</b>
  );
};

export default CardRemove;
