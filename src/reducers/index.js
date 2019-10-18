import { combineReducers } from 'redux';
import columnsReducer from './columns';
import cardsReducer from './cards';
import commentsReducer from './comments';
import userReducer from './user';

const rootReducer = combineReducers({
  columns: columnsReducer,
  cards: cardsReducer,
  comments: commentsReducer,
  user: userReducer,
});

export default rootReducer;
