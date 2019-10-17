import {
  ADD_COMMENT,
  REMOVE_COMMENT,
  UPDATE_COMMENT,
} from '../constants/actionTypes';

const commentsReducer = (state, action) => {
  switch (action.type) {
    case ADD_COMMENT:
      return [
        ...state,
        {
          id: action.payload.id,
          card: action.payload.target,
          title: action.payload.title,
          author: action.payload.author,
        },
      ];

    case REMOVE_COMMENT:
      return [
        ...state.filter((item) => item.id !== action.payload.id),
      ];

    case UPDATE_COMMENT:
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

export default commentsReducer;
