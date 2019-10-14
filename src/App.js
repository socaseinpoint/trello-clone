import React from 'react';
import Board from './containers/Board';
import Context from './contexts/Context';

function App() {
  return (
    <Context>
      <Board />
    </Context>
  );
}

export default App;
