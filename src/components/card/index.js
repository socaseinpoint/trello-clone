import React from 'react';
import RemoveCard from './remove';

const Card = ({ title, comments, id }) => {
  return (
    <div>
      { title }
      { comments && comments.length }
      <RemoveCard id={id} />
    </div>
  );
};

Card.defaultProps = {
  comments: [],
};

export default Card;
