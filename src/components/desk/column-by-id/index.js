import React from 'react';
import { useStateValue } from '../../../state';
import CardById from '../card-by-id';
import Column from '../../column';

const ColumnById = ({ id }) => {
  const [{ columns, cardColumnsRelation }] = useStateValue();
  const { title } = columns.byId[id];
  const cards = cardColumnsRelation[id];

  return (
    <Column
      title={title}
      id={id}
      cards={
        cards && cards.map((cardId) => <CardById id={cardId} key={cardId} />)
      }
    />
  );
};

ColumnById.defaultProps = {
  title: 'No title',
  cards: [],
};

export default ColumnById;
