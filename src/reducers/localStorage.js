import {
  LOCAL_STORAGE_TO_STATE,
} from '../constants/actionTypes';

const localStorageReducer = (state, action) => {
  switch (action.type) {
    case LOCAL_STORAGE_TO_STATE:
      return action.payload;

    default:
      return state;
  }
};

export default localStorageReducer;
