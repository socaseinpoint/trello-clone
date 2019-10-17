import { LOCAL_STORAGE_TO_STATE } from '../constants/actionTypes';

export const localStorageToState = (localState) => ({
  type: LOCAL_STORAGE_TO_STATE,
  payload: JSON.parse(localState),
});

export default localStorageToState;
