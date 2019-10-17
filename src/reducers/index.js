import columnsReducer from './columns';
import cardsReducer from './cards';
import commentsReducer from './comments';
import userReducer from './user';

const rootReducer = (state, action) => {
  const {
    cards,
    comments,
    user,
    columns,
  } = state;

  const newState = {
    cards: cardsReducer(cards, action),
    comments: commentsReducer(comments, action),
    user: userReducer(user, action),
    columns: columnsReducer(columns, action),
  };

  localStorage.setItem('state', JSON.stringify(newState));

  return newState;
};

export default rootReducer;
