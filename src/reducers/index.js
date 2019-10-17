import columnsReducer from './columns';
import cardsReducer from './cards';
import commentsReducer from './comments';
import userReducer from './user';

const rootReducer = ({ cards, comments, user, columns }, action) => ({
  cards: cardsReducer(cards, action),
  comments: commentsReducer(comments, action),
  user: userReducer(user, action),
  columns: columnsReducer(columns, action),
});

export default rootReducer;
