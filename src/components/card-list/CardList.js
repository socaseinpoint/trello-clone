import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../card';

function getCommentsFromCard(comments, id) {
  return comments.filter((item) => item.card === id);
}

const CardList = ({ cards }) => {
  const comments = useSelector((state) => state.comments);

  return (
    cards.map(
      (item) => (
        <Card
          title={item.title}
          id={item.id}
          key={item.id}
          body={item.body}
          column={item.column}
          author={item.author}
          comments={getCommentsFromCard(comments, item.id)}
        />
      ),
    )
  );
};

export default CardList;
