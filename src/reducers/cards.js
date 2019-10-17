import {
  ADD_CARD,
  REMOVE_CARD,
  UPDATE_CARD,
} from '../constants/actionTypes';

const cardsReducer = (state, action) => {
  switch (action.type) {
    case ADD_CARD:
      return [
        ...state,
        {
          id: action.payload.id,
          column: action.payload.target,
          title: action.payload.title,
          author: action.payload.author,
          body: '',
        },
      ];

    case REMOVE_CARD:
      return [
        ...state.filter((item) => item.id !== action.payload.id),
      ];

    case UPDATE_CARD:
      return [
        ...state.map((item) => {
          if (item.id === action.payload.data.id) {
            return { ...item, ...action.payload.data };
          }

          return item;
        }),
      ];

    default:
      return state;
  }
};

export default cardsReducer;
