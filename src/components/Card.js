import React from 'react';

const Card = ({ body, comments }) => {
  return (
    <div>
      { body }
      { comments.length }
    </div>
  );
};

Card.defaultProps = {
  comments: [],
};

export default Card;
