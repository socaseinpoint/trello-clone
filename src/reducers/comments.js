import {
  ADD_COMMENT,
  REMOVE_COMMENT,
  UPDATE_COMMENT,
} from '../constants/actionTypes';

const commentsReducer = (state = [], action) => {
  const { payload } = action;

  switch (action.type) {
    case ADD_COMMENT:
      return [
        ...state,
        {
          id: payload.id,
          card: payload.target,
          body: payload.title,
          author: payload.author,
        },
      ];

    case REMOVE_COMMENT:
      return [
        ...state.filter((item) => item.id !== payload.id),
      ];

    case UPDATE_COMMENT:
      return [
        ...state.map((item) => {
          if (item.id === payload.data.id) {
            return { ...item, ...payload.data };
          }

          return item;
        }),
      ];

    default:
      return state;
  }
};

export default commentsReducer;
