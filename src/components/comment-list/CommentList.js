import React from 'react';
import Comment from '../comment';

const CommentList = ({ comments }) => (
  comments.map(
    (item) => (
      <Comment id={item.id} key={item.id} body={item.body} author={item.author} />
    ),
  )
);

export default CommentList;
