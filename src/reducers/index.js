import { ADD_CARD, REMOVE_CARD, UPDATE_CARD } from '../constants/actionTypes';

function removeFromCardColumnsRelation(id, cardColumnsRelation) {
  const newRelation = {};
  Object.keys(cardColumnsRelation)
    .forEach((item) => {
      newRelation[item] = cardColumnsRelation[item].filter((subItem) => subItem !== id);
    });

  return newRelation;
}

function addToCardColumnsRelation(id, target, cardColumnsRelation) {
  const newRelation = { ...cardColumnsRelation };
  if (!newRelation[target]) {
    newRelation[target] = [];
  }

  newRelation[target].push(id);
  return newRelation;
}

function updateCard(cards, changes) {
  const newCards = cards.map((item) => {
    if (item.id === changes.id) {
      item = {
        ...item,
        ...changes,
      };
    }
    return item;
  });

  return newCards;
}

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_CARD:
      return {
        ...state,
        cards: [
          ...state.cards,
          {
            id: action.payload.id,
            title: action.payload.title,
          },
        ],
        cardColumnsRelation: {
          ...addToCardColumnsRelation(
            action.payload.id,
            action.payload.target,
            state.cardColumnsRelation,
          ),
        },
      };

    case REMOVE_CARD:
      return {
        ...state,
        cardColumnsRelation: {
          ...removeFromCardColumnsRelation(action.payload.id, state.cardColumnsRelation),
        },
      };

    case UPDATE_CARD:
      return {
        ...state,
        cards: [
          ...updateCard(state.cards, action.payload.data),
        ],
      };

    default:
      return state;
  }
};

export default reducer;
