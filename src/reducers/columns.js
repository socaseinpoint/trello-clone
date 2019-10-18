import { UPDATE_COLUMN } from '../constants/actionTypes';

const columnsReducer = (state = [
  {
    id: '1',
    title: 'To Do',
  },
  {
    id: '2',
    title: 'In Progress',
  },
  {
    id: '3',
    title: 'Testing',
  },
  {
    id: '4',
    title: 'Done',
  },
], action) => {
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
