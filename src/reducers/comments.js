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
        ...state,
        {
          id: action.payload.id,
          card: action.payload.target,
          title: action.payload.title,
          author: state.user.name,
        },
      ];

    case UPDATE_COMMENT:
      return [
        ...state,
        {
          id: action.payload.id,
          card: action.payload.target,
          title: action.payload.title,
          author: state.user.name,
        },
      ];

    default:
      return state;
  }
};

export default commentsReducer;
