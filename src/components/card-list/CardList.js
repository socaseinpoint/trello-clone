import React from 'react';
import { useStateValue } from '../../state';
import Card from '../card';

function getCommentsFromCard(comments, id) {
  return comments.filter((item) => item.card === id);
}

const CardList = ({ cards }) => {
  const [{ comments }] = useStateValue();

  return (
    cards.map(
      (item) => (
        <Card
          title={item.title}
          id={item.id}
          key={item.id}
          body={item.body}
          comments={getCommentsFromCard(comments, item.id)}
        />
      ),
    )
  );
};

export default CardList;
