import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Badge from 'react-bootstrap/Badge';
import { removeComment } from '../../../actions/comments';

const RemoveComment = ({ id }) => {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(removeComment(id));
  }

  return (
    <Badge onClick={handleClick} variant="danger">Remove</Badge>
  );
};

RemoveComment.propTypes = {
  id: PropTypes.string.isRequired,
};

export default RemoveComment;
