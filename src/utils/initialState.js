export const initialColumns = [
  {
    id: 1,
    title: 'To DO',
    cards: [1],
  },
  {
    id: 2,
    title: 'In Progress',
    cards: [],
  },
  {
    id: 3,
    title: 'Testing',
    cards: [],
  },
  {
    id: 4,
    title: 'Done',
    cards: [],
  },
];

export const initialCards = [
  {
    id: 1,
    body: 'Initial Card',
    comments: [],
  },
];

export default {
  columns: initialColumns,
  cards: initialCards,
};
