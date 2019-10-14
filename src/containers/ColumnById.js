import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import StoreContext from '../contexts/StoreContext';
import Column from '../components/Column';

const ColumnById = ({ id }) => {
  const { store } = useContext(StoreContext);
  const column = store.columns.find((item) => item.id === id);

  return <Column id={column.id} title={column.title} />;
};

ColumnById.propTypes = {
  id: PropTypes.number.isRequired,
};

export default ColumnById;
