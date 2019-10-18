export const getColumns = (state) => state.columns;
export const getCards = (state) => state.cards;
export const getComments = (state) => state.comments;
export const getUser = (state) => state.user;

export const getCardsByColumn = (state, columnId) => {
  const { cards } = state;
  return cards.filter((card) => card.column === columnId);
};

export const getCommentsByCard = (state, cardId) => {
  const { comments } = state;
  return comments.filter((comment) => comment.card === cardId);
};
