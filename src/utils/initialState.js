export const columns = [
  {
    id: 1,
    title: 'To Do',
  },
  {
    id: 2,
    title: 'In Progress',
  },
  {
    id: 3,
    title: 'Testing',
  },
  {
    id: 4,
    title: 'Done',
  },
];

export const cards = [
  {
    id: 1,
    title: 'Initial Card 1',
    body: 'Initial Card Body',
    author: 1,
    column: 1,
  },
  {
    id: 2,
    title: 'Initial Card 2',
    body: '',
    author: 1,
    column: 1,
  },
];

export const comments = [
  {
    id: 1,
    card: 1,
    title: 'Initial Comment 1',
    author: 1,
  },
  {
    id: 2,
    card: 1,
    title: 'Initial Comment 2',
    author: 1,
  },
];

export const users = [
  {
    id: 1,
    name: 'guest',
  },
];

export const user = null;

export const initialState = {
  columns,
  cards,
  comments,
  users,
  user,
};

export default initialState;
