import {
  ADD_CARD,
  REMOVE_CARD,
  UPDATE_CARD,
  ADD_COMMENT,
  REMOVE_COMMENT,
  UPDATE_COMMENT,
  UPDATE_COLUMN,
  ADD_USER,
} from '../constants/actionTypes';

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_CARD:
      return {
        ...state,
        cards: [
          ...state.cards,
          {
            id: action.payload.id,
            column: action.payload.target,
            title: action.payload.title,
            body: '',
          },
        ],
      };

    case REMOVE_CARD:
      return {
        ...state,
        cards: [
          ...state.cards.filter((item) => item.id !== action.payload.id),
        ],
      };

    case UPDATE_CARD:
      return {
        ...state,
        cards: [
          ...state.cards.map((item) => {
            if (item.id === action.payload.data.id) {
              return { ...item, ...action.payload.data };
            }

            return item;
          }),
        ],
      };

    case ADD_COMMENT:
      return {
        ...state,
        comments: [
          ...state.comments,
          {
            id: action.payload.id,
            card: action.payload.target,
            title: action.payload.title,
          },
        ],
      };

    case ADD_USER:
      return {
        ...state,
        user: {
          name: action.payload.name,
        },
      };

    default:
      return state;
  }
};

export default reducer;
