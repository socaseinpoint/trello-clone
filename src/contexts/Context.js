import React, { useState } from 'react';
import StoreContext from './StoreContext';
import initialState from '../utils/initialState';

const Context = ({ children }) => {
  const [store, setStore] = useState(initialState);

  return (
    <StoreContext.Provider value={
      {
        store,
        setStore,
      }
    }
    >
      {children}
    </StoreContext.Provider>
  );
};

export default Context;
