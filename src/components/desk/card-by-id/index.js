import React from 'react';
import { useStateValue } from '../../../state';
import Card from '../../card';

const CardById = ({ id }) => {
  const [{ cards }] = useStateValue();
  const card = cards.filter((item) => item.id === id)[0];
  const { title, comments } = card;

  return <Card title={title} comments={comments} id={id} />;
};

export default CardById;
