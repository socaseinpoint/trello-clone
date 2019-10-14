import React from 'react';
import ColumnById from '../containers/ColumnById';

const Desk = ({ columns }) => (
  columns.map((item) => <ColumnById key={item.id} id={item.id} />)
);

export default Desk;
