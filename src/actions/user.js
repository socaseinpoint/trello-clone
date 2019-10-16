import { ADD_USER } from '../constants/actionTypes';

export const addUser = (name) => {
  localStorage.setItem('user', JSON.stringify({ name }));

  return ({
    type: ADD_USER,
    payload: {
      name,
    },
  });
};

export default addUser;
