import React, { useContext } from 'react';
import Desk from '../components/Desk';
import StoreContext from '../contexts/StoreContext';

const Board = () => {
  const { store } = useContext(StoreContext);

  return (
    <Desk columns={store.columns} cards={store.cards} />
  );
};

export default Board;
