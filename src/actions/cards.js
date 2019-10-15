import uniqid from 'uniqid';
import { ADD_CARD, REMOVE_CARD } from '../constants/actionTypes';

export const addCard = ({ title, target }) => ({
  type: ADD_CARD,
  payload: {
    title,
    target,
    id: uniqid(),
  },
});

export const removeCard = (id) => ({
  type: REMOVE_CARD,
  payload: {
    id,
  },
});
