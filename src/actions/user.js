import { ADD_USER } from '../constants/actionTypes';

export const addUser = (name) => ({
  type: ADD_USER,
  payload: {
    name,
  },
});

export default addUser;
