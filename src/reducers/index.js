import { ADD_CARD, REMOVE_CARD } from '../constants/actionTypes';

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
      console.log(action.payload.id);
      return {
        ...state,
        cardColumnsRelation: {
          ...removeFromCardColumnsRelation(action.payload.id, state.cardColumnsRelation),
        },
      };

    default:
      return state;
  }
};

export default reducer;
