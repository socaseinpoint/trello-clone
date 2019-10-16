import React from 'react';
import Comment from '../comment';

const CommentList = ({ comments }) => {
  return (
    comments.map((item) => <Comment id={item.id} key={item.id} title={item.title} author={item.author} />)
  );
};

export default CommentList;
