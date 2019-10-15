export const initialColumns = {
  byId: {
    key1: {
      title: 'To DO',
    },
    2: {
      title: 'In Progress',
    },
    3: {
      title: 'Testing',
    },
    4: {
      title: 'Done',
    },
  },
  allIds: ['key1', 2, 3, 4],
};

export const initialCardColumnsRelation = { 
  key1: [
    1, 2,
  ],
};

export const initialCards = [
  {
    id: 1,
    title: 'Initial Card',
    comments: [],
  },
  {
    id: 2,
    title: 'Initial Card 2',
    comments: [],
  },
];

export default {
  columns: initialColumns,
  cardColumnsRelation: initialCardColumnsRelation,
  cards: initialCards,
};
