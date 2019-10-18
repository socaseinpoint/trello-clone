import {
  ADD_USER,
} from '../constants/actionTypes';

const userReducer = (state = null, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        name: action.payload.name,
      };

    default:
      return state;
  }
};

export default userReducer;
