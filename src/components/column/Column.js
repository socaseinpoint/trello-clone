import React from 'react';
import AddCard from '../add-card';
import styles from './column.module.css';

const Column = ({ title, children, id }) => {
  return (
    <div className={styles.column}>
      <div className={styles.title}>
        <b>{ title }</b>
      </div>
      <div>
        {children}
      </div>
      <AddCard target={id} />
    </div>
  );
};

Column.defaultProps = {
  title: 'No title',
  cards: [],
};

export default Column;
