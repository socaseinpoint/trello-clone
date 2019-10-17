import {
  ADD_CARD,
  REMOVE_CARD,
  UPDATE_CARD,
} from '../constants/actionTypes';

const cardsReducer = (state, action) => {
  const { payload } = action;

  switch (action.type) {
    case ADD_CARD:
      return [
        ...state,
        {
          id: payload.id,
          column: payload.target,
          title: payload.title,
          author: payload.author,
          body: '',
        },
      ];

    case REMOVE_CARD:
      return [
        ...state.filter((item) => item.id !== payload.id),
      ];

    case UPDATE_CARD:
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

export default cardsReducer;
