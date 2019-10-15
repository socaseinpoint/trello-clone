import { ADD_CARD, REMOVE_CARD, UPDATE_CARD } from '../constants/actionTypes';

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

    default:
      return state;
  }
};

export default reducer;
