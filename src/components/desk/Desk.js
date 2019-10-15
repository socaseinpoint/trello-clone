import React from 'react';
import { useStateValue } from '../../state';
import ColumnById from './column-by-id';
import styles from './desk.module.css';

const Desk = () => {
  const [{ columns }] = useStateValue();
  return (
    <div className={styles.row}>
      { columns.allIds.map((item) => <ColumnById key={item.id} id={item} />) }
    </div>
  );
};

export default Desk;
