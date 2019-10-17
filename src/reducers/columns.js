import { UPDATE_COLUMN } from '../constants/actionTypes';

const columnsReducer = (state, action) => {
  const { payload } = action;
  switch (action.type) {
    case UPDATE_COLUMN:
      return [
        ...state.map((item) => {
          if (item.id === payload.id) {
            return { ...item, ...payload.data };
          }
          return item;
        }),
      ];
    default:
      return state;
  }
};

export default columnsReducer;
