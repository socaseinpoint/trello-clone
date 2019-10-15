import React from 'react';
import { useStateValue } from '../../state';
import ColumnList from '../column-list';

const Desk = () => {
  const [{ columns }] = useStateValue();
  return (
    <ColumnList columns={columns} />
  );
};

export default Desk;
