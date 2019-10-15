import React from 'react';
import { useStateValue } from '../../state';
import ColumnById from './column-by-id';

const Desk = () => {
  const [{ columns }] = useStateValue();
  return (
    columns.allIds.map((item) => <ColumnById key={item.id} id={item} />)
  );
};

export default Desk;
