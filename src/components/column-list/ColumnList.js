import React from 'react';
import Column from '../column/Column';
import CardList from '../card-list';
import { useStateValue } from '../../state';
import styles from './column-list.module.css';

function getCardFromColumn(cards, id) {
  return cards.filter((item) => item.column === id);
}

const ColumnList = ({ columns }) => {
  const [{ cards }] = useStateValue();

  return (
    <div className={styles.list}>
      {columns.map((item) => (
        <Column title={item.title} key={item.id} id={item.id}>
          <CardList cards={getCardFromColumn(cards, item.id)} />
        </Column>
      ))}
    </div>
  );
};

export default ColumnList;
