import uniqid from 'uniqid';
import { ADD_CARD, REMOVE_CARD, UPDATE_CARD } from '../constants/actionTypes';

export const addCard = (title, target, author) => ({
  type: ADD_CARD,
  payload: {
    title,
    target,
    author,
    id: uniqid(),
  },
});

export const removeCard = (id) => ({
  type: REMOVE_CARD,
  payload: {
    id,
  },
});

export const updateCard = (id, data) => ({
  type: UPDATE_CARD,
  payload: {
    id,
    data,
  },
});
