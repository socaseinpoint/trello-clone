import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import StoreContext from '../contexts/StoreContext';
import AddCard from '../components/AddCard';

const AddCardById = ({ id }) => {
  const { store } = useContext(StoreContext);
  const { setStore } = useContext(StoreContext);

  return <AddCard id={id} store={store} setStore={setStore} />;
};

AddCardById.propTypes = {
  id: PropTypes.number.isRequired,
};

export default AddCardById;
