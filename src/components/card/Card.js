import React from 'react';
import CardRemove from './remove';
import CardTitle from './title';
import styles from './card.module.css';

const Card = ({ title, comments, id }) => {
  return (
    <div className={styles.card}>
      <CardTitle title={title} id={id} />
      { comments && comments.length }
      <CardRemove id={id} />
    </div>
  );
};

Card.defaultProps = {
  comments: [],
};

export default Card;
