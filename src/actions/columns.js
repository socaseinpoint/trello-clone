import { UPDATE_COLUMN } from '../constants/actionTypes';

export const updateColumn = (id, data) => ({
  type: UPDATE_COLUMN,
  payload: {
    id,
    data,
  },
});

export default updateColumn;
