import React from 'react';
import Comment from '../comment';

const CommentList = ({ comments }) => {
  return (
    comments.map((item) => <Comment id={item.id} key={item.id} title={item.title} />)
  );
};

export default CommentList;
