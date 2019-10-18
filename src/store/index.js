import { createStore } from 'redux';
import rootReducer from '../reducers';
import { loadState, saveState } from '../utils/localStorage';

const store = createStore(rootReducer, loadState());

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
