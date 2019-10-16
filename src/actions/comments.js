import uniqid from 'uniqid';
import { ADD_COMMENT, REMOVE_COMMENT, UPDATE_COMMENT } from '../constants/actionTypes';

export const addComment = (title, target) => ({
  type: ADD_COMMENT,
  payload: {
    title,
    target,
    id: uniqid(),
  },
});

export const removeComment = (id) => ({
  type: REMOVE_COMMENT,
  payload: {
    id,
  },
});

export const updateComment = (id, data) => ({
  type: UPDATE_COMMENT,
  payload: {
    id,
    data,
  },
});
